---
name: designer
description: Design and produce HTML-based data visualization artifacts with chart choice, visual encoding, layout, accessibility, interaction, and motion design guidance. Use when the user needs visual directions, style options, chart/interface decisions, motion behavior, or a self-contained HTML visualization built from a curated dataset and narrative brief.
---

# Designer

## Overview

Create the visual and interactive form of the data story. The default final output is a self-contained HTML artifact unless the user asks for a different web stack.

## Core Rule

Do not choose the final chart type, style family, layout, color system, interaction model, or motion behavior without consulting the user. Offer options and ask the user to choose. If one version is clearly stronger, explain why and still request confirmation. Ask only one design decision question per response; if multiple choices are pending, ask the one that most affects the next concrete action.

## Button-Ready Choices

Present one design decision at a time in this strict format:

```text
Choose one:
A. Short option label - one sentence explaining the tradeoff.
B. Short option label - one sentence explaining the tradeoff.
C. Short option label - one sentence explaining the tradeoff.
```

Use no more than four options unless the user asks for a broader menu. Include `D. Something else - describe the visual direction you want.` when the user may want a custom path. Stop after presenting visual directions, style families, chart forms, or motion choices and wait for the user. Do not include a second `Choose one:` block in the same response.

## Workflow

1. Confirm inputs.
   Ask for or review the curated dataset, Analyst story direction, Narrator story brief, project-local `outcome/<project-name>/PRODUCT.md`, audience, target device, and workshop constraints. If several inputs are missing, ask only for the one that blocks the next concrete design step.

   Before proposing visual directions, ask for either the intended viewer type or a visual reference only when it is the most important missing input. If the user provides a screenshot, site, artwork, or prior visualization as a reference, inspect it and translate it into concrete design traits such as map-first, chart-first, editorial, cinematic, dense, restrained, dimensional, tactile, annotated, or exploratory. Do not copy a reference wholesale; use it to understand the desired interaction pattern and visual posture.

   For map-led artifacts, ask the user to choose or confirm the map theme before implementation. The theme should support the story event and audience, for example snow wonderland, taxi night, civic neutral, satellite editorial, or clean teaching map. If the map theme is interactive in the artifact, make the controls real buttons with clear active states.

   For map-led narratives, also confirm the map reading level and focus behavior before building, but do so as a separate one-question decision gate. Ask whether the user expects regional overview, citywide map, transit/street-level view, or neighborhood close-up. When the story shifts to a subset such as airports, boroughs, corridors, or neighborhoods, dim unrelated marks and keep the focus marks visually dominant. Include enough mapped marks to make the spatial pattern legible; do not show only a few hand-picked points unless the user explicitly asks for a spotlight-only map. If using 3D columns on a map, prefer the map SDK's native extrusion or 3D layer capabilities over CSS/HTML marker drawings. Make the marks read as real map geometry rather than gradients, sliders, decorative stems, or floating stickers.

   Decide whether color means category, magnitude, or narrative focus. For scrollytelling, prefer one neutral/default color for all marks, then use a highlight color only for the active story region unless the user asks for a categorical legend.

   If the user expects a real map, use an actual map SDK or tile source for the basemap and clearly separate data overlays from basemap features. Do not draw fake transit lines, streets, borough boundaries, or infrastructure unless they come from a real source or are explicitly labeled as schematic.

   For country maps, use boundary sources and visual treatments that align with the country's official sovereignty position and avoid disputed-boundary surprises from generic global map providers. When mapping India, use India-aligned sovereign boundaries for the national outline and state/UT geography; do not rely on default global basemaps or boundary datasets that omit or visually diminish claimed territories. If a compliant boundary source is unavailable, use a clearly labeled schematic/cartogram instead of a political boundary map.

2. Offer visual directions.
   Present two or three distinct button-ready options with chart form, layout, interaction, motion approach, strengths, and risks.

   When visual judgment matters, create a small browser-viewable option board or rough HTML prototype under `outcome/<project-name>/options.html`. Open it in the browser when available, show the user the visual options, and ask them to choose using the same button-ready format. Keep the option board lightweight and disposable unless the user asks to preserve it.

3. Ask the user to choose.
   Do not implement until the user selects a direction or asks for variants.

4. Design the artifact.
   Plan chart encodings, hierarchy, annotations, responsive layout, accessibility, color, typography, axis/legend/label attachment, chart hover/focus/selected states, and motion.

5. Build HTML.
   Prefer a single HTML file with embedded CSS and JavaScript. Use vanilla HTML/CSS/JS unless the requested interaction needs a framework. Keep data loading simple and reproducible.

6. Verify the result.
   Open or render the artifact when possible. Check that it is nonblank, readable, responsive, accessible enough for workshop use, faithful to the selected story, that every axis label, tick label, legend, and unit is visibly attached to the marks or plot it describes, and that chart hover/focus states reveal the expected values without layout shift.

7. Add page metadata and identity.
   For HTML artifacts, include a specific `<title>`, meta description, canonical URL when known, Open Graph/Twitter tags, theme color, and a relevant favicon. The visible page title, browser title, and social preview should all match the selected story, not just the dataset name. If no brand asset exists, create a small SVG favicon inside `outcome/<project-name>/`.

8. Store the outcome.
   Save final HTML artifacts under `outcome/<project-name>/`, using `index.html` for the primary artifact. Keep presentation-specific assets such as favicons, images, map tiles, or tiny embedded display data in that same folder when needed. Keep source snapshots, reusable curated datasets, and analysis-ready tables under `data/<project-name>/`.

## Style Families

Use style families to avoid repetitive outputs. Present relevant options and let the user choose.

- Editorial: publication-like hierarchy, clear annotations, restrained polish.
- Dashboard: dense, filterable, comparison-heavy, operational.
- Scrollytelling: progressive sections, guided reveal, motion used with restraint.
- Studio: expressive composition, stronger visual personality, custom interactions.
- Teaching: simple, explicit, annotated for explaining the data-vis process.

## Axis And Label Attachment Rules

Axes, tick labels, legends, captions, units, and time labels must be visually scoped to the chart, plot area, row, column, or mark set they describe. A reader should be able to answer "what does this label belong to?" from proximity, alignment, grouping, or direct connection without guessing.

Do not place shared axis labels or year labels in detached footers unless they are physically attached and aligned to a single plot area. In matrices, dashboards, tables of sparklines, small multiples, or repeated chart rows, prefer per-cell mini axes, direct labels, column headers, or sticky guides that remain visually connected to the relevant marks. Avoid orphaned labels below a matrix or card when they could describe more than one chart.

When a chart omits an axis for compactness, replace it with an explicit local cue such as a date range, endpoint labels, direct data labels, a legend label, or a detail tooltip. During verification, scan the rendered artifact at desktop and mobile sizes and remove or relocate any label that feels decorative, random, or disconnected from a specific encoded value.

## Chart Interaction Rules

Charts must not ship as static-looking marks when the surrounding artifact is interactive. For every chart, matrix, heatmap, sparkline, map overlay, or dense visual mark set, define the expected default, hover, focus where practical, active or selected, and disabled or missing-data states.

Hover and focus states should change the actual mark affordance, such as stroke, outline, point radius, bar border, row emphasis, crosshair, or guide line, and should expose a visible tooltip or detail readout by default. Do not rely only on the browser's native SVG `<title>` tooltip for primary chart interactions. The tooltip or readout should name the entity, period, value, unit, and uncertainty or caveat when relevant.

For dense dashboards, make hit targets forgiving without distorting the encoded values. Use transparent overlays, Voronoi-like hit areas, or cell-level targets when tiny marks would be hard to hover. Keep selected states visually distinct from hover states so readers can tell what is currently chosen after the pointer leaves.

For touch or keyboard-heavy contexts, provide an equivalent click, selected detail panel, table fallback, or keyboard-focus path with the same value details as the hover tooltip. If a hover-only state is intentionally lightweight, ensure the same data is still available through visible labels, detail panels, or accessible text.

## Motion Design Rules

Use motion to explain change, guide attention, or reveal sequence. Avoid decorative animation that distracts from data. Respect reduced-motion preferences in CSS and provide a static reading path.

For chart and map transitions, animate the data encoding itself rather than only fading colors or swapping states. When a mark changes meaning between narrative steps, preserve its spatial footprint and interpolate the relevant dimensions, bases, filters, or scales so the viewer can see what changed. For stacked bars, columns, and extrusions, grow or shrink segments from the correct edge and let one segment replace another only where the represented quantity changes; do not rely on opacity tricks that obscure whether values are stacked, nested, or merely highlighted.

For scrollytelling charts, prefer scroll-progress-driven transitions when the user is comparing before/after states. A card entering view can drive progress from 0 to 1: at 0 the chart should show the previous state, at 1 it should show the new state, and in between the marks should smoothly transform through valid intermediate values. Use binary threshold transitions only when the state change is categorical and not meaningfully interpolable.

## Reference

Read `references/style-directions.md` when proposing visual options, choosing motion behavior, or deciding how to map a narrative brief into an HTML artifact. Use `assets/html-starter/index.html` as a lightweight starting point when a plain HTML artifact is appropriate.
