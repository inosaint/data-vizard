# Data Vizard Plugin

Data Vizard is an agent plugin for staged data visualization work. It bundles skills for dataset intake, curation, exploratory analysis, adaptive narration, critique, chart cleanup, and HTML visualization design.

## What This Plugin Provides

- `data-vizard:data-vizard` - Orchestrates the full workflow, delegates role work, and keeps user decision gates explicit.
- `data-vizard:data-curator` - Profiles, cleans, reshapes, joins, enriches, and documents datasets.
- `data-vizard:data-analyst` - Finds patterns, caveats, comparisons, anomalies, and evidence-backed story directions.
- `data-vizard:narrator` - Decides how much language the visualization actually needs and produces restrained story briefs.
- `data-vizard:critic` - Reviews briefs and artifacts for editorial rigor, visual craft, restraint, and anti-default quality.
- `data-vizard:de-slop` - Cleans up bad, cluttered, misleading, default-looking, or hard-to-read charts while preserving the underlying evidence.
- `data-vizard:designer` - Designs and builds HTML visualization artifacts, plus image-led option comps for data-art directions, with chart, layout, accessibility, interaction, motion, and data-art guidance.

## Install From npm

Prerequisites:

- Node.js 18 or newer.
- Codex CLI installed and signed in if you want automatic Codex registration.
- Claude Code CLI installed and signed in if you want automatic Claude Code registration.
- Gemini CLI installed and signed in if you want automatic Gemini extension installation.

Use the published installer:

```bash
npx data-vizard install
```

Equivalent commands:

```bash
pnpm dlx data-vizard install
bunx data-vizard install
```

The installer copies this plugin and the Gemini extension into `~/.data-vizard/marketplace`, writes Codex and Claude Code marketplace files, and attempts to install `data-vizard@data-vizard` plus the Gemini extension when those CLIs are available.

The Codex and Claude desktop apps still rely on their CLIs for this npm installer flow. If a CLI is missing, the installer stages the marketplace files and prints the manual commands to run after installing that host CLI.

## Compatibility

| Host | Status | Manifest | Notes |
| --- | --- | --- | --- |
| Codex app and CLI | Supported | `.codex-plugin/plugin.json` | Visual plugin metadata, skills, and local marketplace install are supported. Local/workspace plugins can appear through marketplaces or workspace sharing. |
| Claude Code | Supported | `.claude-plugin/plugin.json` | Uses a separate Claude manifest and marketplace file. Validate with `claude plugin validate`. |
| Gemini CLI | Supported | `extensions/data-vizard/gemini-extension.json` | Installs as a Gemini extension with bundled skills and a `/data-vizard` command. |
| npm | Supported | `bin/data-vizard.js` | Ships the plugin, assets, marketplace files, root README, and changelog. |

## Development Install From A Fresh Clone

Normal installs should use npm. This clone-based path is only for development before a version is published.

Prerequisites:

- Codex app or Codex CLI with plugin support.
- Claude Code CLI with plugin support, if installing for Claude Code.
- Gemini CLI with extension support, if installing for Gemini.
- This repository cloned locally.

From the repository root for Codex:

```bash
cd /path/to/data-vizard
codex plugin marketplace add "$(pwd)"
codex plugin add data-vizard@data-vizard
```

From the repository root for Claude Code:

```bash
cd /path/to/data-vizard
claude plugin marketplace add "$(pwd)"
claude plugin install data-vizard@data-vizard
```

From the repository root for Gemini CLI:

```bash
cd /path/to/data-vizard
gemini extensions install "$(pwd)/extensions/data-vizard" --consent --skip-settings
```

Why this works:

- The Codex marketplace definition lives at `.agents/plugins/marketplace.json`.
- The Claude Code marketplace definition lives at `.claude-plugin/marketplace.json`.
- The Gemini CLI extension definition lives at `extensions/data-vizard/gemini-extension.json`.
- Both marketplaces are named `data-vizard`.
- Both point to the plugin source at `./plugins/data-vizard`.

Verify the install:

```bash
codex plugin marketplace list
codex plugin list --available --json
claude plugin list
gemini extensions list
gemini skills list --all
```

After installing or reinstalling a plugin, start a new Codex thread, Claude Code session, or Gemini CLI session so the updated skills are loaded.

## Basic Usage

In a new Codex thread, invoke the orchestrator:

```text
Use $data-vizard:data-vizard to build a visualization from this CSV.
```

In Claude Code, invoke the orchestrator:

```text
/data-vizard:data-vizard Build a visualization from this CSV.
```

In Gemini CLI, invoke the extension command:

```text
/data-vizard Build a visualization from this CSV.
```

Or call a role skill directly when you already know the stage:

```text
Use $data-vizard:data-curator to profile and clean this dataset.
Use $data-vizard:data-analyst to find story directions in this curated CSV.
Use $data-vizard:narrator to decide how much language this visualization actually needs.
Use $data-vizard:critic to review a visualization brief or artifact before signoff.
Use $data-vizard:de-slop to clean up a bad chart without changing the underlying evidence.
Use $data-vizard:designer to build the HTML visualization.
```

The orchestrator confirms where project artifacts should live in the active workspace before creating or changing files, asks early about explanatory versus data-art posture, uses image-led optioning for data-art direction choices in Codex and Gemini, falls back to HTML or static browser-viewable comps in Claude Code, and uses critique passes before final signoff.

## Privacy And Data

Data Vizard works on files and datasets you provide in the active workspace. The plugin does not add a server, background sync, analytics, or external app connector. Codex and Claude Code host settings still control model access, file permissions, network access, and command approvals.

For sensitive datasets, review source rights before importing data, keep private raw files out of commits, and document caveats close to any public-facing claims.

## Updating After Pulling Changes

After pulling plugin updates:

```bash
cd /path/to/data-vizard
codex plugin add data-vizard@data-vizard
claude plugin install data-vizard@data-vizard
gemini extensions install "$(pwd)/extensions/data-vizard" --consent --skip-settings
```

Then start a new Codex thread, Claude Code session, or Gemini CLI session. If Codex, Claude Code, or Gemini CLI still shows an older version, confirm that the manifests under `plugins/data-vizard/` and `extensions/data-vizard/` have a new version, then reinstall again.

## Release Checks

Local package checks:

```bash
NPM_CONFIG_CACHE=/tmp/data-vizard-npm-cache npm pack --dry-run --json
node bin/data-vizard.js install --dry-run --root /tmp/data-vizard-local-smoke
```

Published-package smoke test:

```bash
cd /tmp
NPM_CONFIG_CACHE=/tmp/data-vizard-npm-cache npx --yes data-vizard@0.1.5 --version
NPM_CONFIG_CACHE=/tmp/data-vizard-npm-cache npx --yes data-vizard@0.1.5 install --dry-run --root /tmp/data-vizard-published-smoke
NPM_CONFIG_CACHE=/tmp/data-vizard-npm-cache npx --yes data-vizard@0.1.5 install --root /tmp/data-vizard-published-stage --no-codex --no-claude --no-gemini
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

## Troubleshooting

If Codex says:

```text
plugin `data-vizard` was not found in marketplace `data-vizard`
```

Register the repo marketplace first:

```bash
cd /path/to/data-vizard
codex plugin marketplace add "$(pwd)"
codex plugin add data-vizard@data-vizard
```

If `codex` itself fails because it cannot find a native vendor binary, repair the Codex CLI install:

```bash
npm uninstall -g @openai/codex
npm install -g @openai/codex@latest
codex --version
```

If optional plugin validation fails with `ModuleNotFoundError: No module named 'yaml'`, use a local validation environment rather than changing system Python:

```bash
python3 -m venv .venv-validator
.venv-validator/bin/python -m pip install --upgrade pip PyYAML
.venv-validator/bin/python /path/to/plugin-creator/scripts/validate_plugin.py plugins/data-vizard
```

That validation step is only for development checks; normal plugin installation does not require `PyYAML`.
