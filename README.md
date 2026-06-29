# Data Vizard

Data Vizard is a WIP agent plugin for building data visualization stories with a staged workflow. The workflow moves from data intake to analysis, narrative framing, visual design, and a final HTML artifact while keeping user decisions explicit.

## Workflow

Most projects follow this path:

1. `data-vizard` coordinates the project and decision gates.
2. `data-curator` finds, evaluates, cleans, joins, and documents data.
3. `data-analyst` explores the curated data and proposes evidence-backed story directions.
4. `narrator` turns the selected analytical direction into a story brief, copy, caveats, and annotation plan.
5. `designer` chooses the visual form with the user, then builds and verifies the HTML artifact.

Project folders use lowercase hyphen-case slugs, for example `nyc-taxi-weather-jan-2026`.

## Skills

The local skills live in `skills/`.

- `skills/data-vizard/` - Orchestrates the full visualization workflow, routes between role skills, and maintains decision gates.
- `skills/data-curator/` - Handles dataset discovery, data fitness checks, cleaning, reshaping, joins, enrichment, and curator handoff notes.
- `skills/data-analyst/` - Profiles curated datasets, finds patterns and caveats, and proposes possible story directions without choosing the final story silently.
- `skills/narrator/` - Shapes the selected analysis into audience-facing structure: story spine, titles, section copy, annotations, and caveats.
- `skills/designer/` - Designs and produces HTML-based visualization artifacts, including chart choice, layout, interaction, accessibility, visual style, and motion behavior.

Each skill has a `SKILL.md` file with its operating rules. Some skills also include `references/` for playbooks and reusable guidance, or `assets/` for starter files.

## Install

Install the published package with npm, pnpm, or Bun:

```bash
npx data-vizard install
pnpm dlx data-vizard install
bunx data-vizard install
```

The installer copies the bundled plugin into a stable local marketplace at `~/.data-vizard/marketplace`, then registers and installs it for Codex and Claude Code when their CLIs are available.

After installing, start a new agent session and invoke the orchestrator:

```text
Codex: $data-vizard:data-vizard
Claude Code: /data-vizard:data-vizard
```

## Manual Plugin Install

The plugin source lives in `plugins/data-vizard/`, with repo-local marketplace files for Codex and Claude Code. From a fresh clone, install it manually with:

```bash
codex plugin marketplace add "$(pwd)"
codex plugin add data-vizard@data-vizard

claude plugin marketplace add "$(pwd)"
claude plugin install data-vizard@data-vizard
```

See `plugins/data-vizard/README.md` for full install, usage, update, and troubleshooting notes.

## Folder Guide

- `outcome/` - Final or in-progress public-facing visualization artifacts. Each project gets its own folder, usually with an `index.html` and supporting files such as story briefs, design notes, SVG favicons, or map assets.
- `data/` - Curated data, raw source snapshots, transformation notes, and intermediate datasets used to build a visualization.
- `scripts/` - Reproducible data preparation scripts. For example, `scripts/build_nyc_taxi_weather_hourly.py` builds the NYC taxi/weather dataset.
- `skills/` - Local role skills used by the Data Vizard workflow.
- `project-ledgers/` - Project ledgers that record stage progress, skill handoffs, decisions, caveats, and important files.
- `outcome/<project-name>/PRODUCT.md` - Project-specific product context: audience, purpose, brand personality, anti-references, design principles, and accessibility goals.


## Current Projects

- `outcome/nyc-taxi-weather-jan-2026/` - A map-led scrollytelling story about how the January 25, 2026 snow day affected NYC yellow taxi pickups.
- `outcome/india-state-choropleth/` - An India state choropleth visualization workspace.

## Working Notes

- Keep user-facing visualization outputs under `outcome/<project-name>/`.
- Keep curated data and transformation artifacts under `data/<project-name>/`.
- Keep project progress notes in `project-ledgers/<project-name>.md`.
- When adding new skills, include a clear `SKILL.md` and keep supporting guidance in that skill's `references/` folder.
- For chart and map animations, prefer semantic data transitions: animate heights, bases, segment boundaries, filters, and scales rather than relying on opacity-only color swaps.
