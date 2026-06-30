#!/usr/bin/env node

const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const PACKAGE_ROOT = path.resolve(__dirname, "..");
const PLUGIN_NAME = "data-vizard";
const MARKETPLACE_NAME = "data-vizard";
const DISPLAY_NAME = "Data Vizard";

function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command || command === "--help" || command === "-h") {
    printHelp();
    return;
  }

  if (command === "--version" || command === "-v") {
    console.log(readPackageJson().version);
    return;
  }

  if (command === "install") {
    install(args.slice(1));
    return;
  }

  console.error(`Unknown command: ${command}`);
  printHelp();
  process.exitCode = 1;
}

function printHelp() {
  console.log(`Data Vizard

Usage:
  data-vizard install [options]

Options:
  --root <path>      Stable install root to write. Default: ~/.data-vizard/marketplace
  --no-codex        Stage files but skip Codex CLI registration/install.
  --no-claude       Stage files but skip Claude Code CLI registration/install.
  --no-gemini       Stage files but skip Gemini CLI extension install.
  --dry-run         Print planned actions without writing files or running CLIs.
  -h, --help        Show this help.
  -v, --version     Show package version.
`);
}

function install(args) {
  const options = parseInstallOptions(args);
  const packageJson = readPackageJson();
  const marketplaceRoot = path.resolve(
    expandHome(options.root || path.join(os.homedir(), ".data-vizard", "marketplace")),
  );
  const sourcePluginDir = path.join(PACKAGE_ROOT, "plugins", PLUGIN_NAME);
  const targetPluginDir = path.join(marketplaceRoot, "plugins", PLUGIN_NAME);
  const sourceGeminiExtensionDir = path.join(PACKAGE_ROOT, "extensions", PLUGIN_NAME);
  const targetGeminiExtensionDir = path.join(marketplaceRoot, "extensions", PLUGIN_NAME);

  if (!fs.existsSync(sourcePluginDir)) {
    throw new Error(`Bundled plugin not found at ${sourcePluginDir}`);
  }
  if (!fs.existsSync(sourceGeminiExtensionDir)) {
    throw new Error(`Bundled Gemini extension not found at ${sourceGeminiExtensionDir}`);
  }

  const codexMarketplacePath = path.join(marketplaceRoot, ".agents", "plugins", "marketplace.json");
  const claudeMarketplacePath = path.join(marketplaceRoot, ".claude-plugin", "marketplace.json");

  console.log(`${DISPLAY_NAME} installer ${packageJson.version}`);
  console.log(`Marketplace root: ${marketplaceRoot}`);

  if (options.dryRun) {
    console.log(`Would copy ${sourcePluginDir} -> ${targetPluginDir}`);
    console.log(`Would copy ${sourceGeminiExtensionDir} -> ${targetGeminiExtensionDir}`);
    console.log(`Would write ${codexMarketplacePath}`);
    console.log(`Would write ${claudeMarketplacePath}`);
  } else {
    copyDirectory(sourcePluginDir, targetPluginDir);
    copyDirectory(sourceGeminiExtensionDir, targetGeminiExtensionDir);
    writeJson(codexMarketplacePath, createCodexMarketplace());
    writeJson(claudeMarketplacePath, createClaudeMarketplace(packageJson.version));
    console.log("Staged Data Vizard marketplace and Gemini extension files.");
  }

  const stagedOnly = options.noCodex && options.noClaude && options.noGemini;
  if (!options.noCodex) {
    installCodex(marketplaceRoot, options.dryRun);
  }

  if (!options.noClaude) {
    installClaude(marketplaceRoot, options.dryRun);
  }

  if (!options.noGemini) {
    installGemini(targetGeminiExtensionDir, options.dryRun);
  }

  if (stagedOnly) {
    printManualCommands(marketplaceRoot, targetGeminiExtensionDir);
  }

  console.log("");
  console.log("Start a new Codex thread and use $data-vizard:data-vizard.");
  console.log("Start a new Claude Code session and use /data-vizard:data-vizard.");
  console.log("Start a new Gemini CLI session and use /data-vizard or the data-vizard skill.");
}

function parseInstallOptions(args) {
  const options = {
    root: null,
    noCodex: false,
    noClaude: false,
    noGemini: false,
    dryRun: false,
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === "--root") {
      const value = args[index + 1];
      if (!value) {
        throw new Error("--root requires a path");
      }
      options.root = value;
      index += 1;
    } else if (arg === "--no-codex") {
      options.noCodex = true;
    } else if (arg === "--no-claude") {
      options.noClaude = true;
    } else if (arg === "--no-gemini") {
      options.noGemini = true;
    } else if (arg === "--dry-run") {
      options.dryRun = true;
    } else if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    } else {
      throw new Error(`Unknown install option: ${arg}`);
    }
  }

  return options;
}

function copyDirectory(sourceDir, targetDir) {
  assertNoSymlinks(sourceDir);
  fs.rmSync(targetDir, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(targetDir), { recursive: true });
  fs.cpSync(sourceDir, targetDir, {
    recursive: true,
    filter: (source) => !source.includes(`${path.sep}.DS_Store`),
  });
}

function assertNoSymlinks(rootDir, currentDir = rootDir) {
  for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
    const entryPath = path.join(currentDir, entry.name);

    if (entry.isSymbolicLink()) {
      const relativePath = path.relative(rootDir, entryPath);
      throw new Error(`Refusing to copy symlink in bundled content: ${relativePath}`);
    }

    if (entry.isDirectory()) {
      assertNoSymlinks(rootDir, entryPath);
    }
  }
}

function createCodexMarketplace() {
  return {
    name: MARKETPLACE_NAME,
    interface: {
      displayName: DISPLAY_NAME,
    },
    plugins: [
      {
        name: PLUGIN_NAME,
        source: {
          source: "local",
          path: `./plugins/${PLUGIN_NAME}`,
        },
        policy: {
          installation: "AVAILABLE",
          authentication: "ON_INSTALL",
        },
        category: "Productivity",
      },
    ],
  };
}

function createClaudeMarketplace(version) {
  return {
    name: MARKETPLACE_NAME,
    owner: {
      name: "inosaint",
      url: "https://github.com/inosaint",
    },
    description: "Data Vizard agent workflow plugins.",
    version,
    plugins: [
      {
        name: PLUGIN_NAME,
        source: `./plugins/${PLUGIN_NAME}`,
        displayName: DISPLAY_NAME,
        description:
          "Guide data visualization projects from dataset intake to analysis, narrative, design, and HTML story output.",
        version,
        author: {
          name: "inosaint",
          url: "https://github.com/inosaint",
        },
        repository: "https://github.com/inosaint/data-vizard",
        license: "MIT",
        keywords: ["data-visualization", "storytelling", "csv", "analysis", "html"],
        category: "Productivity",
      },
    ],
  };
}

function installCodex(marketplaceRoot, dryRun) {
  console.log("");
  console.log("Codex");

  const addArgs = ["plugin", "marketplace", "add", marketplaceRoot];
  const installArgs = ["plugin", "add", `${PLUGIN_NAME}@${MARKETPLACE_NAME}`];

  if (dryRun) {
    console.log(`Would run: codex ${addArgs.map(shellQuote).join(" ")}`);
    console.log(`Would run: codex ${installArgs.join(" ")}`);
    return;
  }

  if (!commandExists("codex")) {
    console.log("Codex CLI was not found on PATH.");
    printCodexCommands(marketplaceRoot);
    return;
  }

  const add = run("codex", addArgs);
  if (!add.ok) {
    console.warn("Could not register the Codex marketplace automatically.");
    printCommandOutput(add);
    console.warn("Continuing in case the marketplace was already registered.");
  }

  const pluginInstall = run("codex", installArgs);
  if (pluginInstall.ok) {
    console.log("Installed data-vizard@data-vizard in Codex.");
  } else {
    console.warn("Could not install the Codex plugin automatically.");
    printCommandOutput(pluginInstall);
    printCodexCommands(marketplaceRoot);
  }
}

function installClaude(marketplaceRoot, dryRun) {
  console.log("");
  console.log("Claude Code");

  const marketplaceArgs = ["plugin", "marketplace", "add", marketplaceRoot];
  const installArgs = ["plugin", "install", `${PLUGIN_NAME}@${MARKETPLACE_NAME}`];

  if (dryRun) {
    console.log(`Would run: claude ${marketplaceArgs.map(shellQuote).join(" ")}`);
    console.log(`Would run: claude ${installArgs.join(" ")}`);
    return;
  }

  if (!commandExists("claude")) {
    console.log("Claude Code CLI was not found on PATH.");
    printClaudeCommands(marketplaceRoot);
    return;
  }

  const add = run("claude", marketplaceArgs);
  if (!add.ok) {
    console.warn("Could not register the Claude Code marketplace automatically.");
    printCommandOutput(add);
    console.warn("Continuing in case the marketplace was already registered.");
  }

  const pluginInstall = run("claude", installArgs);
  if (pluginInstall.ok) {
    console.log("Installed data-vizard@data-vizard in Claude Code.");
  } else {
    console.warn("Could not install the Claude Code plugin automatically.");
    printCommandOutput(pluginInstall);
    printClaudeCommands(marketplaceRoot);
  }
}

function installGemini(geminiExtensionDir, dryRun) {
  console.log("");
  console.log("Gemini CLI");

  const installArgs = ["extensions", "install", geminiExtensionDir, "--consent", "--skip-settings"];

  if (dryRun) {
    console.log(`Would run: gemini ${installArgs.map(shellQuote).join(" ")}`);
    return;
  }

  if (!commandExists("gemini")) {
    console.log("Gemini CLI was not found on PATH.");
    printGeminiCommands(geminiExtensionDir);
    return;
  }

  const extensionInstall = runInteractive("gemini", installArgs);
  if (extensionInstall.ok) {
    console.log("Installed Data Vizard in Gemini CLI.");
  } else {
    console.warn("Could not install the Gemini CLI extension automatically.");
    if (extensionInstall.error) {
      console.warn(`  ${extensionInstall.error.message}`);
    }
    printGeminiCommands(geminiExtensionDir);
  }
}

function printManualCommands(marketplaceRoot, geminiExtensionDir) {
  printCodexCommands(marketplaceRoot);
  printClaudeCommands(marketplaceRoot);
  printGeminiCommands(geminiExtensionDir);
}

function printCodexCommands(marketplaceRoot) {
  console.log("");
  console.log("To finish Codex installation manually:");
  console.log(`  codex plugin marketplace add ${shellQuote(marketplaceRoot)}`);
  console.log(`  codex plugin add ${PLUGIN_NAME}@${MARKETPLACE_NAME}`);
}

function printClaudeCommands(marketplaceRoot) {
  console.log("");
  console.log("To finish Claude Code installation manually:");
  console.log(`  claude plugin marketplace add ${shellQuote(marketplaceRoot)}`);
  console.log(`  claude plugin install ${PLUGIN_NAME}@${MARKETPLACE_NAME}`);
  console.log("");
  console.log("Or inside an interactive Claude Code session:");
  console.log(`  /plugin marketplace add ${marketplaceRoot}`);
  console.log(`  /plugin install ${PLUGIN_NAME}@${MARKETPLACE_NAME}`);
  console.log("  /reload-plugins");
}

function printGeminiCommands(geminiExtensionDir) {
  console.log("");
  console.log("To finish Gemini CLI installation manually:");
  console.log(`  gemini extensions install ${shellQuote(geminiExtensionDir)} --consent --skip-settings`);
  console.log("  gemini extensions list");
  console.log("");
  console.log("Then start a new Gemini CLI session and run:");
  console.log("  /data-vizard <your request>");
}

function commandExists(command) {
  const result = spawnSync(command, ["--version"], { encoding: "utf8" });
  return !(result.error && result.error.code === "ENOENT");
}

function run(command, args) {
  const result = spawnSync(command, args, { encoding: "utf8" });
  return {
    ok: !result.error && result.status === 0,
    status: result.status,
    error: result.error,
    stdout: result.stdout,
    stderr: result.stderr,
  };
}

function runInteractive(command, args) {
  const result = spawnSync(command, args, { stdio: "inherit" });
  return {
    ok: !result.error && result.status === 0,
    status: result.status,
    error: result.error,
  };
}

function printCommandOutput(result) {
  if (result.error) {
    console.warn(`  ${result.error.message}`);
  }
  if (result.stderr && result.stderr.trim()) {
    console.warn(indent(result.stderr.trim()));
  }
  if (result.stdout && result.stdout.trim()) {
    console.warn(indent(result.stdout.trim()));
  }
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function readPackageJson() {
  return JSON.parse(fs.readFileSync(path.join(PACKAGE_ROOT, "package.json"), "utf8"));
}

function expandHome(inputPath) {
  if (inputPath === "~") {
    return os.homedir();
  }

  if (inputPath.startsWith(`~${path.sep}`)) {
    return path.join(os.homedir(), inputPath.slice(2));
  }

  return inputPath;
}

function shellQuote(value) {
  if (/^[A-Za-z0-9_./:@%+=,-]+$/.test(value)) {
    return value;
  }

  return `'${value.replaceAll("'", "'\\''")}'`;
}

function indent(value) {
  return value
    .split("\n")
    .map((line) => `  ${line}`)
    .join("\n");
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
