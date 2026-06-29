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
  --root <path>      Stable marketplace root to write. Default: ~/.data-vizard/marketplace
  --no-codex        Stage files but skip Codex CLI registration/install.
  --no-claude       Stage files but skip Claude Code CLI registration/install.
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

  if (!fs.existsSync(sourcePluginDir)) {
    throw new Error(`Bundled plugin not found at ${sourcePluginDir}`);
  }

  const codexMarketplacePath = path.join(marketplaceRoot, ".agents", "plugins", "marketplace.json");
  const claudeMarketplacePath = path.join(marketplaceRoot, ".claude-plugin", "marketplace.json");

  console.log(`${DISPLAY_NAME} installer ${packageJson.version}`);
  console.log(`Marketplace root: ${marketplaceRoot}`);

  if (options.dryRun) {
    console.log(`Would copy ${sourcePluginDir} -> ${targetPluginDir}`);
    console.log(`Would write ${codexMarketplacePath}`);
    console.log(`Would write ${claudeMarketplacePath}`);
  } else {
    copyPlugin(sourcePluginDir, targetPluginDir);
    writeJson(codexMarketplacePath, createCodexMarketplace());
    writeJson(claudeMarketplacePath, createClaudeMarketplace(packageJson.version));
    console.log("Staged Data Vizard marketplace files.");
  }

  const stagedOnly = options.noCodex && options.noClaude;
  if (!options.noCodex) {
    installCodex(marketplaceRoot, options.dryRun);
  }

  if (!options.noClaude) {
    installClaude(marketplaceRoot, options.dryRun);
  }

  if (stagedOnly) {
    printManualCommands(marketplaceRoot);
  }

  console.log("");
  console.log("Start a new Codex thread and use $data-vizard:data-vizard.");
  console.log("Start a new Claude Code session and use /data-vizard:data-vizard.");
}

function parseInstallOptions(args) {
  const options = {
    root: null,
    noCodex: false,
    noClaude: false,
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

function copyPlugin(sourcePluginDir, targetPluginDir) {
  fs.rmSync(targetPluginDir, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(targetPluginDir), { recursive: true });
  fs.cpSync(sourcePluginDir, targetPluginDir, {
    recursive: true,
    dereference: true,
    filter: (source) => !source.includes(`${path.sep}.DS_Store`),
  });
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
      name: "Trine",
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
          name: "Trine",
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

function printManualCommands(marketplaceRoot) {
  printCodexCommands(marketplaceRoot);
  printClaudeCommands(marketplaceRoot);
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
