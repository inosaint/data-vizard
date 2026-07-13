---
name: de-slop
description: Clean up bad, cluttered, misleading, default-looking, or hard-to-read charts and visualization artifacts. Use when the user provides a chart image, screenshot, HTML artifact, notebook output, chart code, chart spec, or dataset-backed draft and wants it redesigned with stronger data-visualization principles while preserving the underlying claim and evidence.
---

# De-Slop

## Overview

Turn a weak chart into a clearer, more honest, more intentional visualization. De-Slop is a repair pass: it diagnoses what the chart is trying to say, removes default or misleading choices, and produces a cleaner replacement brief, chart spec, code patch, or HTML artifact.

Use this skill when the input is already a chart or draft visualization. For a project starting from raw data, use `data-curator`, `data-analyst`, `narrator`, and `designer` instead.

## Core Rule

Preserve the evidence before improving the aesthetics. Do not change the data, aggregation, denominator, date range, units, or claim unless the current chart is misleading and the change is explicitly called out.

Good cleanup makes the intended comparison easier to see. It does not make a weak claim look stronger than the data supports.

## Inputs

Accept any of:

- chart screenshot or image
- HTML/CSS/JS artifact
- notebook output
- Vega-Lite, Plot, D3, ggplot, matplotlib, seaborn, Plotly, or spreadsheet chart
- dataset plus a bad chart description
- a rough sketch or chart brief

If the chart is visual-only and the underlying data is missing, identify what can be fixed from the image and what needs data access before making quantitative changes.

## Workflow

1. Identify the chart's job.
   Name the likely question, audience, comparison, and intended takeaway. If the chart has no clear job, propose one or two plausible jobs before redesigning.

2. Audit the evidence contract.
   Check:
   - source, date range, unit, denominator, and aggregation
   - whether values are counts, rates, shares, indexed values, ranks, or estimates
   - whether missing data is encoded, hidden, or mistaken for zero
   - whether uncertainty, sample size, or coverage caveats matter
   - whether the title or annotation overclaims

3. Diagnose chart defects.
   Look for:
   - wrong chart form for the comparison
   - 3D, pie, donut, gauge, dual-axis, stacked, or area choices that obscure the point
   - rainbow palettes, same-temperature palettes, low contrast, or color used decoratively
   - default gridlines, legends, fonts, margins, and tooltips
   - cluttered labels, rotated labels, crowded ticks, or detached axes
   - chartjunk, pictorial metaphors, glossy effects, or decoration that competes with data
   - misleading baselines, truncated axes, uneven bins, or sorted categories with no rationale
   - too many series, categories, or annotations for one view
   - inaccessible color-only encoding or missing keyboard/alt-text equivalents in HTML

4. Choose a cleaner chart strategy.
   Prefer the simplest form that reveals the relationship:
   - ordered bars or dot plots for category comparison
   - slope charts or connected dots for before/after
   - lines or small multiples for time
   - scatterplots for relationships
   - heatmaps or matrices for dense two-way patterns
   - maps only when geography is evidence-bearing
   - tables when exact lookup matters more than visual pattern

   If the existing chart type is defensible, keep it and fix hierarchy, scale, labeling, and interaction before replacing it.

5. Redesign the communication layer.
   Improve:
   - title as the question or restrained takeaway
   - subtitle for scope, source, unit, and caveat
   - axis labels attached to the scale they describe
   - direct labels instead of remote legends when practical
   - annotations only where they explain a meaningful feature
   - color reserved for grouping, emphasis, or state
   - typography, spacing, and contrast for scanability

6. Produce the cleanup.
   Depending on the input, return one of:
   - a concise critique plus redesign prescription
   - patched chart code
   - a replacement chart spec
   - a revised HTML artifact
   - a before/after explanation with exact changes

   When editing files, keep the change scoped to the chart and its immediate supporting styles or data transforms.

7. Verify the result.
   For code or HTML outputs, run available syntax checks and inspect the rendered artifact when possible. Check that labels fit, axes remain attached, colors are readable, and the cleaned chart still supports the same evidence-bounded claim.

## Output Shape

For a diagnosis-only request, return:

- `chart_job`
- `main_defects`
- `recommended_redesign`
- `claim_or_data_risks`
- `next_action`

For an implementation request, return:

- what changed
- why it improves comprehension or honesty
- what was intentionally preserved
- verification performed

## Standards

- Prefer direct labeling over legends that force eye travel.
- Prefer one clear comparison over several weak ones.
- Use color sparingly and consistently.
- Make caveats visible when they affect interpretation.
- Avoid fake precision and decorative certainty.
- Do not turn every cleanup into a dashboard.
- If the best answer is "this should be a table," say so.
