---
name: data-vizard
description: Orchestrate an interactive data visualization workflow for workshop participants from dataset discovery or intake through curation, analysis, narrative posture, critique, design direction, image-led optioning, and final HTML artifact planning. Use when the user wants end-to-end guidance, invokes Data Vizard, wants help deciding which Data Vizard role skill to use next, or asks to coordinate Data Curator, Data Analyst, Narrator, Critic, and Designer while keeping the user involved in all major decisions.
---

# Data Vizard

## Overview

Guide the participant through the full data visualization process as an interactive facilitator and delegated orchestrator. Use the role skills directly when a task is narrow, and coordinate them when the user wants an end-to-end workshop flow.

Data Vizard should treat Critic as a standing internal review checkpoint, not just a late-stage polish pass. By default, each major stage should be critiqued before its output is presented to the user or handed to the next stage.

Critic output is internal only. Data Vizard should never show Critic notes to the user. Instead, use those notes to rework the current stage and present the improved result.

## Core Rule

Do not make major project decisions silently. Ask the user before choosing dataset sources, enrichment strategy, analytical direction, narrative posture, critique lens when it matters, chart form, visual style, interaction model, or motion behavior.

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

## Narrative Posture

Establish the narrative posture early. This governs how much language the artifact should carry and how Critic evaluates the result.

- `Explanatory`: the piece should teach, argue, or clarify with explicit narrative support.
- `Balanced`: the visual carries most of the work, with selective language to anchor the reading path.
- `Data-art-led`: the visual should speak first; visible narration is minimal or absent unless a caveat or orientation cue is essential.

If the user has not chosen a posture, ask about it before requiring a story brief or visible copy plan.

For collection-like, record-by-record, or visually rich source datasets such as catalogs, archives, shelves, posters, covers, specimens, or media libraries, do not leave posture implicit. Force an explicit choice between at least:

- `Balanced explorer`
- `Data-art-led explorer`

Do not let `browseable`, `searchable`, `filterable`, `library`, or `explorer` silently imply a utility-first product shell.

## Workflow

The role sequence is still explicit, but the weight of each stage changes by posture. Do not skip Curator or Analyst for real data work. Narrator may return a silent or minimal brief. Critic is mandatory before final signoff and should also review each major stage before presentation.

1. Establish the project brief.
   Ask for the single missing detail that most affects the next step, using button-ready choices where possible. Prefer topic or dataset source first; after that, prefer narrative posture before audience, constraints, or artifact format if posture will change the role outputs.

   Store project-specific product context in `outcome/<project-name>/PRODUCT.md`, not in the repository root. This file should capture the audience, purpose, personality, anti-references, design principles, accessibility goals, narrative posture, intent brief, and default approach to avoid for that one visualization project.

   For collection-led or archive-style projects, the brief should also name:
   - the aesthetic family to explore first
   - the accent color or color temperature to bias toward or avoid
   - whether the first screen should feel more `utility`, `editorial`, `studio`, or `hybrid`

2. Curate the data.
   Use Data Curator to find, inspect, clean, reshape, or supplement data. Ask the user to approve external dataset choices and enrichment assumptions unless the user has explicitly delegated the source choice; delegated choices still require a Curator handoff note.

3. Critique the curation handoff.
   Use Critic to review the Curator output before presenting the data readout or downstream implications. Critique should check data fitness, caveat visibility, transformation discipline, and whether the curation summary is overstating what the file can support. Revise the curation readout before showing it to the user.

4. Analyze for possible story directions.
   Use Data Analyst to profile the data and propose evidence-backed story variations. Do not let the Analyst pick the final story unless the user has explicitly delegated story direction; delegated choices still require an Analyst handoff note explaining the selected direction and alternatives considered.

5. Critique the analysis options.
   Use Critic to review Analyst candidates before showing them to the user. Critique should check whether the option set is fair, evidence-backed, caveat-aware, and not prematurely narrowed. Rework the options before presenting them.

6. Structure the narrative load.
   Use Narrator after the user selects or delegates a story direction. Narrator must first decide how much visible language the piece needs. It may return a `silent brief`, `minimal copy brief`, `guided narrative`, or `editorial narrative` depending on posture and evidence.

7. Critique the narrative brief.
   Use Critic after Narrator. Critic reviews the chosen posture, copy load, focal point, default approach to avoid, and likely failure modes before Designer implements. Default to `dual` critique mode unless the user requests a different lens. Feed the findings back into Narrator or the orchestrator rather than surfacing them directly.

8. Choose the design direction.
   Use Designer to propose visual directions and style families as button-ready choices. Ask the user to choose before implementing unless the user has explicitly delegated design direction; delegated choices still require a Designer plan before implementation. If the user asks for variants, produce a small set of clearly differentiated options.

   For `data-art-led` work, prefer host-aware optioning. In Codex and Gemini, generate preview images for each direction under `outcome/<project-name>/options/` and summarize them in `options.md`. In Claude Code or any host without image generation, use `options.html` or another browser-viewable static comparison instead.

   For collection-like or visually rich datasets, do not accept a design option set that only varies chart type or control layout. At least one option must be explicitly composition-led, and at least one option must name a concrete aesthetic family and color attitude rather than falling back to generic app-shell styling.

   For image-led optioning, require Designer to run an option similarity check before the options reach the user. Reject sets where the concepts share the same shell, palette temperature, typography mood, control placement, image treatment, density, spatial metaphor, or interaction model beyond two shared traits. The options should feel like different directions, not variations of one generated style.

9. Critique design options and plans.
   Use Critic to review Designer options before presenting them to the user. Critique should check focal point, hierarchy, originality, interaction burden, and whether the options are genuinely differentiated. Rework or discard weak options before presenting the set.

   If Critic identifies `default-dashboard-grammar`, `utility-ui-collapse`, `option-set-too-narrow`, or generic color drift, Designer should revise before the options reach the user unless the brief explicitly called for a utility-first dashboard.

10. Build or plan the HTML artifact.
   The final Designer output should be an HTML-based artifact or a precise implementation plan for one. Use `index.html` as the entry point, but do not default to a single-file build. For anything with meaningful styling, interaction logic, reusable components, or nontrivial data handling, prefer separate files such as `index.html`, `styles.css`, and `script.js`. Store completed visualization artifacts under `outcome/<project-name>/`.

   Before implementation signoff, require Designer to identify the actual rendered shell and how composition carries discovery. For collection-led or record-by-record explorers, do not accept an artifact that relies mainly on generic search/filter chrome while only exposing a small subset of records in the visual field.

   For immersive, scene-led, map-led, dense, animated, or spatial concepts, require Designer to produce a simple wireframe or low-fidelity mockup before final build and to state the rendering/library decision. If a concept image shows a specific mechanism such as clipped specimens in an illustrated landscape, parallax depth, custom spatial clustering, or an ecological transect, the implementation plan must preserve it or explicitly ask the user to approve a simpler direction.

11. Critique the final artifact.
   Use Critic again after Designer produces or verifies the HTML artifact. Final signoff requires a concrete critique pass, not just a generic summary. If Critic finds material issues, revise the artifact and re-run Critic before presenting the result as complete.

   Final signoff also requires Designer verification notes or `outcome/<project-name>/SIGNOFF.md` covering file structure, wireframe/fidelity result, rendering/library decision, visible text, shell, interaction locality, density, data completeness, control honesty, metadata, responsive rendering, and remaining caveats. If browser/render verification is unavailable, mark the artifact `Blocked: verification unavailable` or `Draft built`; do not mark it `Completed`.

## Role Routing

- Use `$data-curator` when the user needs data discovery, cleaning, profiling, reshaping, joining, or supplementing.
- Use `$data-analyst` when the user needs patterns, comparisons, anomalies, uncertainty, or possible story directions.
- Use `$narrator` when the user has selected an analytical direction and needs the visualization story or language load shaped with restraint.
- Use `$critic` when the user needs editorial critique, visual critique, anti-default review, or a final evaluation pass.
- Use `$designer` when the user needs chart design, visual style, motion design, interaction, accessibility, image-gen-assisted optioning, or an HTML visualization artifact.

## Subagents

Skills are the packaging model. For multi-stage project work, Data Vizard should act as a true orchestrator and delegate role work to subagents instead of inlining every stage itself.

Use hybrid delegation:

- When the user invokes `$data-vizard` for an end-to-end project, spawn role subagents for Curator, Analyst, Narrator, Critic, and Designer as needed.
- When the user directly invokes a role skill, that role may run standalone without the orchestrator.
- Keep the user-facing workflow intact: summarize options, explain tradeoffs, and ask the user to choose.
- Do not force the same amount of Narrator output across postures.
- Do not allow Critic to silently replace user choice; it surfaces defects and recommends changes, then hands the decision back to the orchestrator and user.

## Handoff Contract

Normalize role handoffs so later stages can reason about restraint, craft, and evaluation consistently.

Every Narrator, Critic, and Designer handoff should include the fields that are relevant:

- `posture`
- `language_load`
- `text_budget`
- `must_keep_text`
- `optional_text`
- `focal_point`
- `default_to_avoid`
- `critique_mode`
- `critique_findings`

These fields can be concise, but they should be explicit.

## Project Ledger

For every visualization project, maintain a repo-accessible progress ledger at:

```text
project-ledgers/<project-name>.md
```

Normalize `<project-name>` to lowercase hyphen-case, such as `nyc-taxi-weather-jan-2026.md`. Create the file when the workflow starts if it does not already exist.

Update the ledger whenever a stage is completed:

- Data Vizard completes orchestration or a decision gate
- Data Curator produces a dataset or handoff notes
- Critic reviews the Curator handoff
- Data Analyst presents story candidates or the user selects one
- Critic reviews Analyst candidates
- Narrator produces or revises the approved story brief
- Critic reviews the narrative brief
- Designer produces, revises, or verifies the HTML artifact
- Critic reviews design options or plans
- Critic produces the final artifact critique pass

Record each skill boundary, files or references loaded, user decision gates, posture, evidence notes, critique notes, and outputs produced. Keep the ledger focused on progress, handoffs, decisions, caveats, and artifacts rather than token accounting.

Apply the deletion test to every row before writing it: would removing this entry make it harder to reconstruct what decision was made and why? If not, do not write it. A row that only records that a stage ran — with no decision, caveat, or output worth preserving — should be omitted or collapsed into the previous row.

Use ledger status precisely:

- `Proposed`: options, plans, or direction briefs exist but the user has not chosen.
- `Draft built`: an artifact exists but verification or critique is incomplete.
- `Needs revision`: a required audit or critique found material defects.
- `Blocked`: the workflow cannot continue without user input, missing data, unavailable rendering, or another external condition.
- `Verified`: Designer audits passed and verification notes or `SIGNOFF.md` exist.
- `Completed`: the stage is verified where verification is required, Critic has passed it when applicable, and no required revision remains.

Do not write `Completed` for a final HTML artifact just because files were created. The ledger should distinguish build completion from verified signoff.

Use this compact table shape:

```markdown
| Stage | Skill | Model | Status | Decisions / Evidence | Outputs |
| --- | --- | --- | --- | --- | --- |
```

The `Model` column records the active model identifier for each stage (e.g. `claude-sonnet-4-6`, `gemini-2.5-pro`, `gpt-4o`). Curator records the model for its own stage; subsequent skills record their own model if it differs.

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

For the default workshop path, prefer `index.html` as the main entry file, with separate `styles.css` and `script.js` alongside it whenever the artifact is more than tiny or disposable. Use a single self-contained HTML file only when the piece is genuinely small and keeping everything together improves speed or portability. After Designer verifies the artifact and Critic completes the final pass, update `project-ledgers/<project-name>.md` with the final outcome path and verification notes.

## Reference

Read `references/workflow-map.md` when planning a multi-step workshop session, testing the workflow against a sample dataset, or deciding how the role skills should hand off to each other.
