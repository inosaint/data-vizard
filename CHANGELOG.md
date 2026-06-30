# Changelog

All notable changes to Data Vizard will be documented here.

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
