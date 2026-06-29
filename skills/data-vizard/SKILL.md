---
name: data-vizard
description: Orchestrate an interactive data visualization workflow for workshop participants from dataset discovery or intake through curation, analysis, narrative structure, design direction, and final HTML artifact planning. Use when the user wants end-to-end guidance, invokes Data Vizard, wants help deciding which Data Vizard role skill to use next, or asks to coordinate Data Curator, Data Analyst, Narrator, and Designer while keeping the user involved in all major decisions.
---

# Data Vizard

## Overview

Guide the participant through the full data visualization process as an interactive facilitator. Use the role skills directly when a task is narrow, and coordinate them when the user wants an end-to-end workshop flow.

## Core Rule

Do not make major project decisions silently. Ask the user before choosing dataset sources, enrichment strategy, analytical direction, narrative framing, chart form, visual style, interaction model, or motion behavior.

When the user has not supplied enough context, ask exactly one focused decision question and wait. If more than one decision is needed, ask the highest-leverage or most blocking question first and postpone the rest until after the user answers. If a decision can be postponed, continue with a clearly labeled assumption instead of stacking multiple questions.

## Button-Ready Choices

Present one decision gate at a time in a strict, compact choice format so Codex surfaces can turn choices into buttons when supported.

Use this pattern:

```text
Choose one:
A. Short option label - one sentence explaining the tradeoff.
B. Short option label - one sentence explaining the tradeoff.
C. Short option label - one sentence explaining the tradeoff.
```

Keep labels short, start at `A`, and include no more than four options unless the user asks for a broader menu. Add `D. Something else - describe your preferred direction.` when the user may reasonably want a custom path.

After presenting button-ready choices, stop and wait for the user. Do not continue as if an option was selected. Do not include a second `Choose one:` block in the same response.

## Workflow

The role sequence is mandatory for every visualization artifact. Do not skip Data Curator, Data Analyst, Narrator, or Designer. Even when the user delegates a choice or asks for speed, run each stage and leave a compact handoff artifact or ledger entry before moving to the next one. A stage may be brief, but it must be explicit.

1. Establish the project brief.
   Ask for the single missing detail that most affects the next step, using button-ready choices where possible. Prefer topic or dataset source first; defer audience, constraints, and artifact format until they become necessary. If the user does not have a dataset, route to Data Curator.

   Store project-specific product context in `outcome/<project-name>/PRODUCT.md`, not in the repository root. This file should capture the audience, purpose, personality, anti-references, design principles, and accessibility goals for that one visualization project.

2. Curate the data.
   Use Data Curator to find, inspect, clean, reshape, or supplement data. Ask the user to approve external dataset choices and enrichment assumptions unless the user has explicitly delegated the source choice; delegated choices still require a Curator handoff note.

3. Analyze for possible story directions.
   Use Data Analyst to profile the data and propose evidence-backed story variations. Do not let the Analyst pick the final story unless the user has explicitly delegated story direction; delegated choices still require an Analyst handoff note explaining the selected direction and alternatives considered.

4. Structure the narrative.
   Use Narrator after the user selects or delegates a story direction. Shape the visualization story, titles, sequence, annotations, claims, caveats, and audience language. Always leave a story brief before Designer implements.

5. Choose the design direction.
   Use Designer to propose visual directions and style families as button-ready choices. Ask the user to choose before implementing unless the user has explicitly delegated design direction; delegated choices still require a Designer plan before implementation. If the user asks for variants, produce a small set of clearly differentiated options.

6. Build or plan the HTML artifact.
   The final Designer output should be an HTML-based artifact or a precise implementation plan for one. Prefer a single self-contained HTML file unless the user requests a framework. Store completed visualization artifacts under `outcome/<project-name>/`.

## Role Routing

- Use `$data-curator` when the user needs data discovery, cleaning, profiling, reshaping, joining, or supplementing.
- Use `$data-analyst` when the user needs patterns, comparisons, anomalies, uncertainty, or possible story directions.
- Use `$narrator` when the user has selected an analytical direction and needs the visualization story shaped in language.
- Use `$designer` when the user needs chart design, visual style, motion design, interaction, accessibility, or an HTML visualization artifact.

## Subagents

Skills are the primary packaging model. Subagents are optional execution helpers.

Use subagents only when parallel exploration would help, such as asking Analyst to explore story candidates while Designer explores possible visual styles from the same brief. When using subagents, keep the user-facing workflow intact: summarize options, explain tradeoffs, and ask the user to choose.

## Project Ledger

For every visualization project, maintain a repo-accessible progress ledger at:

```text
project-ledgers/<project-name>.md
```

Normalize `<project-name>` to lowercase hyphen-case, such as `nyc-taxi-weather-jan-2026.md`. Create the file when the workflow starts if it does not already exist.

Update the ledger whenever a stage is completed:

- Data Vizard completes orchestration or a decision gate
- Data Curator produces a dataset or handoff notes
- Data Analyst presents story candidates or the user selects one
- Narrator produces or revises the approved story brief
- Designer produces, revises, or verifies the HTML artifact

Record each skill boundary, files or references loaded, user decision gates, evidence notes, and outputs produced. Keep the ledger focused on progress, handoffs, decisions, caveats, and artifacts rather than token accounting.

Use this compact table shape:

```markdown
| Stage | Skill | Status | Decisions / Evidence | Outputs |
| --- | --- | --- | --- | --- |
```

## Project Storage

Use these repo paths consistently for each project:

```text
data/<project-name>/raw/
data/<project-name>/curated/
outcome/<project-name>/PRODUCT.md
outcome/<project-name>/<artifact-name>.html
project-ledgers/<project-name>.md
```

Store source snapshots, raw files, cleaned tables, joins, and data handoff notes under `data/<project-name>/`. Store public-facing HTML artifacts, story briefs, product context, design briefs, favicons, and presentation-specific assets under `outcome/<project-name>/`.

Store the final visualization outcome in a predictable repo path:

```text
outcome/<project-name>/<artifact-name>.html
```

Normalize `<project-name>` to lowercase hyphen-case, matching the project ledger name when possible. For example:

```text
outcome/nyc-taxi-weather-jan-2026/index.html
```

When Designer creates presentation-specific supporting files, keep them inside the same project outcome folder:

```text
outcome/<project-name>/assets/
```

Do not store source snapshots, raw datasets, or reusable curated tables in `outcome/`; those belong under `data/<project-name>/`.

For the default workshop path, prefer a single self-contained HTML file named `index.html`. After Designer verifies the artifact, update `project-ledgers/<project-name>.md` with the final outcome path and verification notes.

## Reference

Read `references/workflow-map.md` when planning a multi-step workshop session, testing the workflow against a sample dataset, or deciding how the role skills should hand off to each other.
