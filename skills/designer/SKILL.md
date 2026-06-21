---
name: designer
description: Design and produce HTML-based data visualization artifacts with chart choice, visual encoding, layout, accessibility, interaction, and motion design guidance. Use when the user needs visual directions, style options, chart/interface decisions, motion behavior, or a self-contained HTML visualization built from a curated dataset and narrative brief.
---

# Designer

## Overview

Create the visual and interactive form of the data story. The default final output is a self-contained HTML artifact unless the user asks for a different web stack.

## Core Rule

Do not choose the final chart type, style family, layout, color system, interaction model, or motion behavior without consulting the user. Offer options and ask the user to choose. If one version is clearly stronger, explain why and still request confirmation.

## Button-Ready Choices

Present design decisions in this strict format:

```text
Choose one:
A. Short option label - one sentence explaining the tradeoff.
B. Short option label - one sentence explaining the tradeoff.
C. Short option label - one sentence explaining the tradeoff.
```

Use no more than five options. Include `D. Something else - describe the visual direction you want.` when the user may want a custom path. Stop after presenting visual directions, style families, chart forms, or motion choices and wait for the user.

## Workflow

1. Confirm inputs.
   Ask for or review the curated dataset, Analyst story direction, Narrator story brief, audience, target device, and workshop constraints.

   Before proposing visual directions, ask for the intended viewer type and any visual references the user wants to add. If the user provides a screenshot, site, artwork, or prior visualization as a reference, inspect it and translate it into concrete design traits such as map-first, chart-first, editorial, cinematic, dense, restrained, dimensional, tactile, annotated, or exploratory. Do not copy a reference wholesale; use it to understand the desired interaction pattern and visual posture.

   For map-led artifacts, ask the user to choose or confirm the map theme before implementation. The theme should support the story event and audience, for example snow wonderland, taxi night, civic neutral, satellite editorial, or clean teaching map. If the map theme is interactive in the artifact, make the controls real buttons with clear active states.

2. Offer visual directions.
   Present two or three distinct button-ready options with chart form, layout, interaction, motion approach, strengths, and risks.

   When visual judgment matters, create a small browser-viewable option board or rough HTML prototype under `outcome/<project-name>/options.html`. Open it in the browser when available, show the user the visual options, and ask them to choose using the same button-ready format. Keep the option board lightweight and disposable unless the user asks to preserve it.

3. Ask the user to choose.
   Do not implement until the user selects a direction or asks for variants.

4. Design the artifact.
   Plan chart encodings, hierarchy, annotations, responsive layout, accessibility, color, typography, interaction states, and motion.

5. Build HTML.
   Prefer a single HTML file with embedded CSS and JavaScript. Use vanilla HTML/CSS/JS unless the requested interaction needs a framework. Keep data loading simple and reproducible.

6. Verify the result.
   Open or render the artifact when possible. Check that it is nonblank, readable, responsive, accessible enough for workshop use, and faithful to the selected story.

7. Add page metadata and identity.
   For HTML artifacts, include a specific `<title>`, meta description, canonical URL when known, Open Graph/Twitter tags, theme color, and a relevant favicon. The visible page title, browser title, and social preview should all match the selected story, not just the dataset name. If no brand asset exists, create a small SVG favicon inside `outcome/<project-name>/`.

8. Store the outcome.
   Save final HTML artifacts under `outcome/<project-name>/`, using `index.html` for the primary artifact. Keep any supporting data or assets in that same folder unless the artifact is intentionally self-contained.

## Style Families

Use style families to avoid repetitive outputs. Present relevant options and let the user choose.

- Editorial: publication-like hierarchy, clear annotations, restrained polish.
- Dashboard: dense, filterable, comparison-heavy, operational.
- Scrollytelling: progressive sections, guided reveal, motion used with restraint.
- Studio: expressive composition, stronger visual personality, custom interactions.
- Teaching: simple, explicit, annotated for explaining the data-vis process.

## Motion Design Rules

Use motion to explain change, guide attention, or reveal sequence. Avoid decorative animation that distracts from data. Respect reduced-motion preferences in CSS and provide a static reading path.

## Reference

Read `references/style-directions.md` when proposing visual options, choosing motion behavior, or deciding how to map a narrative brief into an HTML artifact. Use `assets/html-starter/index.html` as a lightweight starting point when a plain HTML artifact is appropriate.
