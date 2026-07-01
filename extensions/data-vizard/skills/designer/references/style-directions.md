# Style Directions

## Editorial

Use for public-facing stories, reports, and explanatory pieces. Favor strong hierarchy, careful typography, whitespace, direct labels, and annotations.

## Dashboard

Use for comparison, monitoring, filtering, or repeated use. Favor compact controls, consistent scales, scannable summaries, and clear empty/loading/error states.

Dense dashboard marks need explicit hover and selected states. Sparklines, heatmap cells, tiny bars, and map marks should expose a visible tooltip or detail readout with entity, period, value, unit, and any relevant caveat. Use forgiving hit targets so small marks are not frustrating to inspect.

Axis labels, year ticks, legends, and units must stay visibly attached to the chart area or matrix cell they describe. In sparkline tables, small multiples, and dense rows, prefer per-cell mini axes, directly labeled endpoints, or column/header guides that align with the marks. Avoid detached footer labels that could feel random or apply to multiple unrelated charts.

## Scrollytelling

Use when the story benefits from a guided sequence. Favor sections, progressive reveal, sticky charts, and restrained transitions.

When a sticky chart compares two states, let scroll progress drive the visual interpolation whenever possible. The chart should show the prior state before the card arrives, the new state when the card is fully in view, and valid in-between geometry during the scroll. This is especially important for bars, columns, stacked segments, map extrusions, and other area/height encodings where a sudden color swap can misstate the relationship.

## Studio

Use when the brief allows expressive form. Favor memorable composition, richer interaction, and bespoke layout while preserving legibility.

## Teaching

Use for workshop explanation. Favor simple encodings, visible steps, annotations, and language that names the design reasoning.

## Motion

Motion should support:

- Change over time
- Focus transitions
- Step-by-step reveal
- Comparison between states

Always include a reduced-motion path and avoid loops that compete with reading.

Animate chart marks according to their semantic change: heights change by changing height, stacked segments change by moving the segment boundary, and focus changes by filtering or dimming marks without changing the underlying quantity. Avoid using opacity alone to force visibility when the real issue is stacking order, footprint, baseline, or scale.
