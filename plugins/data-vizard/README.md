# Data Vizard Plugin

Data Vizard is a local Codex plugin for staged data visualization work. It bundles skills for dataset intake, curation, exploratory analysis, narrative framing, and HTML visualization design.

## What This Plugin Provides

- `data-vizard:data-vizard` - Orchestrates the full workflow and keeps user decision gates explicit.
- `data-vizard:data-curator` - Profiles, cleans, reshapes, joins, and documents datasets.
- `data-vizard:data-analyst` - Finds patterns, caveats, and evidence-backed story directions.
- `data-vizard:narrator` - Turns analysis into audience-facing structure, copy, titles, annotations, and caveats.
- `data-vizard:designer` - Designs and builds HTML visualization artifacts with chart, layout, accessibility, interaction, and motion guidance.

## Install From A Fresh Clone

Prerequisites:

- Codex app or Codex CLI with plugin support.
- This repository cloned locally.

From the repository root:

```bash
cd /path/to/data-vizard
codex plugin marketplace add "$(pwd)"
codex plugin add data-vizard@personal
```

Why this works:

- The marketplace definition lives at `.agents/plugins/marketplace.json`.
- That marketplace is named `personal`.
- It points Codex to the plugin source at `./plugins/data-vizard`.

Verify the install:

```bash
codex plugin marketplace list
codex plugin list
```

You should see a `personal` marketplace pointing at this repo and `data-vizard@personal` listed as installed and enabled.

After installing or reinstalling a plugin, start a new Codex thread so the updated skills are loaded into the session.

## Basic Usage

In a new Codex thread, invoke the orchestrator:

```text
Use $data-vizard:data-vizard to build a visualization from this CSV.
```

Or call a role skill directly when you already know the stage:

```text
Use $data-vizard:data-curator to profile and clean this dataset.
Use $data-vizard:data-analyst to find story directions in this curated CSV.
Use $data-vizard:narrator to turn this analysis into a story brief.
Use $data-vizard:designer to build the HTML visualization.
```

The default workflow stores project artifacts in the repo:

- `data/<project-name>/` - Raw snapshots, curated data, data dictionaries, and analysis files.
- `outcome/<project-name>/` - Final or in-progress visualization artifacts, usually including `index.html`.
- `project-ledgers/<project-name>.md` - Stage progress, user decisions, caveats, and handoffs.

## Updating After Pulling Changes

After pulling plugin updates:

```bash
cd /path/to/data-vizard
codex plugin add data-vizard@personal
```

Then start a new Codex thread. If Codex still shows an older version, confirm that `plugins/data-vizard/.codex-plugin/plugin.json` has a new version or cachebuster suffix, then reinstall again.

## Troubleshooting

If Codex says:

```text
plugin `data-vizard` was not found in marketplace `personal`
```

Register the repo marketplace first:

```bash
cd /path/to/data-vizard
codex plugin marketplace add "$(pwd)"
codex plugin add data-vizard@personal
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
