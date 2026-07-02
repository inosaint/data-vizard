# Data Vizard

Data Vizard is an agent plugin for building data visualization stories with a staged workflow. It guides a project from data intake to curation, exploratory analysis, narrative framing, visual design, and a final HTML artifact while keeping user decisions explicit.

## Install

Prerequisites:

- Node.js 18 or newer.
- Codex CLI installed and signed in if you want automatic Codex registration.
- Claude Code CLI installed and signed in if you want automatic Claude Code registration.
- Gemini CLI installed and signed in if you want automatic Gemini extension installation.

Install the published package with npm, pnpm, or Bun:

```bash
npx data-vizard install
pnpm dlx data-vizard install
bunx data-vizard install
```

The installer copies the bundled plugin and Gemini extension into a stable local install root at `~/.data-vizard/marketplace`, writes Codex and Claude Code marketplace files, and attempts to install `data-vizard@data-vizard` plus the Gemini extension when those CLIs are available.

The Codex and Claude desktop apps still rely on their CLIs for this npm installer flow. If a CLI is missing, the installer stages the marketplace files and prints the manual commands to run after installing that host CLI.

## Quickstart

After installing, start a new Codex thread, Claude Code session, or Gemini CLI session so the plugin skills are loaded.

```text
Codex: Use $data-vizard:data-vizard to build a visualization from this CSV.
Claude Code: /data-vizard:data-vizard Build a visualization from this CSV.
Gemini CLI: /data-vizard Build a visualization from this CSV.
```

You can also call a role skill directly:

```text
$data-vizard:data-curator
$data-vizard:data-analyst
$data-vizard:narrator
$data-vizard:critic
$data-vizard:designer
```

## Compatibility

| Host | Status | Install path | Notes |
| --- | --- | --- | --- |
| Codex app and CLI | Supported | `.agents/plugins/marketplace.json` plus `.codex-plugin/plugin.json` | Local and workspace plugins can appear in the Codex plugin directory through marketplaces or workspace sharing. The public OpenAI-curated directory is not a self-serve npm publishing target. |
| Claude Code | Supported | `.claude-plugin/marketplace.json` plus `.claude-plugin/plugin.json` | Validate with `claude plugin validate` and install with `claude plugin install data-vizard@data-vizard`. |
| Gemini CLI | Supported | `extensions/data-vizard/gemini-extension.json` | Installs as a Gemini extension with bundled skills and a `/data-vizard` command. |
| npm | Supported | `bin/data-vizard.js` installer | The package ships the plugin, marketplace files, README, and changelog. |

## Verify

Local package checks:

```bash
NPM_CONFIG_CACHE=/tmp/data-vizard-npm-cache npm pack --dry-run --json
node bin/data-vizard.js install --dry-run --root /tmp/data-vizard-local-smoke
```

Published-package smoke test:

```bash
cd /tmp
NPM_CONFIG_CACHE=/tmp/data-vizard-npm-cache npx --yes data-vizard@0.1.4 --version
NPM_CONFIG_CACHE=/tmp/data-vizard-npm-cache npx --yes data-vizard@0.1.4 install --dry-run --root /tmp/data-vizard-published-smoke
NPM_CONFIG_CACHE=/tmp/data-vizard-npm-cache npx --yes data-vizard@0.1.4 install --root /tmp/data-vizard-published-stage --no-codex --no-claude --no-gemini
```

Full install verification:

```bash
npx --yes data-vizard@0.1.4 install
codex plugin list --available --json
claude plugin list
gemini extensions list
```

Claude Code compatibility check:

```bash
claude plugin validate plugins/data-vizard
claude plugin marketplace add /tmp/data-vizard-published-stage
claude plugin install data-vizard@data-vizard --scope local
claude plugin list
```

Gemini CLI compatibility check:

```bash
gemini extensions validate extensions/data-vizard
gemini extensions install /tmp/data-vizard-published-stage/extensions/data-vizard --consent --skip-settings
gemini extensions list
gemini skills list --all
```

## Update Or Remove

Update from npm:

```bash
npx data-vizard@latest install
```

Remove installed integrations:

```bash
codex plugin remove data-vizard@data-vizard
claude plugin uninstall data-vizard@data-vizard
gemini extensions uninstall data-vizard
```

After updating or removing an installed integration, start a new Codex thread, Claude Code session, or Gemini CLI session.

## Privacy And Data

Data Vizard works on files and datasets you provide in the active workspace. The plugin itself does not add a server, background sync, analytics, or external app connector. Host-level model, tool, network, approval, and file-access settings still apply in Codex and Claude Code.

For sensitive datasets, review source rights before importing data, avoid committing private raw files, and keep project caveats close to any published visualization.

## Development Install From Clone

Normal installs should use npm. This clone-based path is only for development before a version is published:

```bash
codex plugin marketplace add "$(pwd)"
codex plugin add data-vizard@data-vizard

claude plugin marketplace add "$(pwd)"
claude plugin install data-vizard@data-vizard

gemini extensions install "$(pwd)/extensions/data-vizard" --consent --skip-settings
```

The plugin source lives in `plugins/data-vizard/`. See `plugins/data-vizard/README.md` for role details, usage notes, update flow, and troubleshooting.

## Package Contents

- `bin/data-vizard.js` - npm installer CLI.
- `plugins/data-vizard/` - Packaged plugin source for Codex and Claude Code.
- `extensions/data-vizard/` - Packaged Gemini CLI extension source.
- `plugins/data-vizard/assets/` - Plugin icon, logo, and screenshots.
- `CHANGELOG.md` - Release history.

## Release Checklist

- Keep `package.json`, `plugins/data-vizard/.codex-plugin/plugin.json`, `.claude-plugin/marketplace.json`, `plugins/data-vizard/.claude-plugin/plugin.json`, and `extensions/data-vizard/gemini-extension.json` versions aligned.
- Regenerate plugin assets with `python3 scripts/generate_plugin_assets.py`; pass `--source /path/to/logo.png` when replacing the canonical logo.
- Run npm pack and installer dry-run checks before publishing.
- Run Codex, Claude Code, and Gemini CLI install checks in a fresh terminal or CI job.
- Update `CHANGELOG.md` for every release.
