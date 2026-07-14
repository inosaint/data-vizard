# Changelog

All notable changes to Data Vizard will be documented here.

## Unreleased

- Added banned words/phrases operational checklist to Narrator's anti-AI-tropes reference, with reason and alternative columns.
- Applied deletion test to project ledger guidance in orchestrator — rows with no decision or caveat worth preserving should be omitted.
- Added evaluation rubric and sunset tracking conventions to data-curator's open data sources reference.
- Added `RELEASE.md` with step-by-step release checklist covering version refs, doc review across all surfaces, and npm publish smoke test.
- Planned `data-vizard uninstall` CLI subcommand (not yet implemented).

## 0.1.5 - 2026-07-13

- Added the `de-slop` skill across root, packaged plugin, and Gemini extension surfaces for repairing bad or misleading charts without changing the evidence.
- Added Designer, Critic, and Data Vizard guardrails for image-option diversity, control honesty, record reachability, file-structure discipline, artifact signoff notes, and precise ledger statuses.
- Added pre-build wireframe/fidelity planning and richer rendering decision gates for immersive, scene-led, spatial, animated, map-led, and data-art concepts.
- Added `Model` column to the project ledger table in the data-vizard orchestrator skill so each stage records the active model identifier.
- Added "The Field" (Paraguay FIFA 2026 data-art piece) and London Salaries to the landing-page showcase; updated all showcase cards with dual version and model tags.
- Converted Plugin README and Changelog from Markdown links to styled HTML pages (`faq.html`, `changelog.html`) with breadcrumbs and matched footer.
- Added `llms.txt` at repo root for agent discoverability.
- Added SEO and AEO structured data (JSON-LD `FAQPage`, `SoftwareApplication`, `WebPage`) and Open Graph / Twitter Card meta across all pages.
- Deleted unused `docs.html`.

## 0.1.4 - 2026-07-02

- Added the `critic` workflow skill across packaged plugin and Gemini extension surfaces.
- Refreshed release and uninstall documentation so Codex, Claude Code, and Gemini CLI update paths stay aligned.
- Updated npm verification examples and release metadata for the `0.1.4` publish.

## 0.1.3 - 2026-06-30

- Clarified npm install prerequisites for Codex CLI, Claude Code CLI, and Gemini CLI users.
- Added Gemini CLI extension support with a `gemini-extension.json` manifest, bundled skills, and `/data-vizard` command.
- Taught the npm installer to stage and install the Gemini CLI extension when `gemini` is available.
- Fixed generated Claude marketplace publisher metadata to use `inosaint`.

## 0.1.2 - 2026-06-30

- Pointed all Codex plugin-list image fields at square icon assets so the plugin directory does not render the wide banner in icon slots.
- Kept `icon.png` and `logo.png` identical, with `logo-dark.png` as the dark-mode square variant.
- Switched public publisher metadata to the GitHub identity `inosaint`.
- Removed image embeds from the npm-facing README to avoid broken relative images on npm.

## 0.1.1 - 2026-06-30

- Added Codex plugin-directory visual assets with a consistent wizard-and-chart logo.
- Wired `composerIcon`, `logo`, `logoDark`, and screenshot metadata into the Codex plugin manifest.
- Made the npm installer bin executable for cleaner package execution.
- Expanded the root and plugin READMEs with compatibility, privacy, verification, update, and release guidance.
- Added a reproducible script for regenerating plugin visual assets.

## 0.1.0 - 2026-06-30

- Published the first npm installer for the Data Vizard agent workflow plugin.
- Bundled Codex and Claude Code marketplace manifests.
- Included five workflow skills: orchestrator, curator, analyst, narrator, and designer.
- Added release guidance for npm install testing, Codex marketplace testing, and Claude Code compatibility checks.
