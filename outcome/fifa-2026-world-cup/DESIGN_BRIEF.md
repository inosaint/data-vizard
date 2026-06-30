# Design brief

## Artifact

Self-contained HTML dashboard at `outcome/fifa-2026-world-cup/index.html`.

## Layout

- Minimal sticky top rail.
- Metric toggle as the primary segmented control.
- Compact selected-match caption in the top rail.
- A 12-section small-multiples grid, one section per inferred group.
- Each group contains 6 match pitches.
- Group headings list the teams inline; advancing teams are highlighted in green.
- No KPI strip, hero explainer, search, outcome filter, side panel, or standings table.

## Pitch encoding

- The pitch is the stable coordinate system.
- Home team attacks left to right; away team attacks right to left.
- Result markers stay visible in every metric.
- Metric layer changes by toggle:
  - Possession: two halves fill according to share.
  - Shots, shots on target, corners, crosses, fouls, cards, interceptions, offsides: paired half-field bars or marks using a shared per-metric scale.

## Interaction

- Hover, focus, and click select a match.
- Selected match shows score, metric values, and whether the metric leader won in a compact caption.
- The metric toggle redraws all pitches without changing the page structure.
- Keyboard focus follows the same detail behavior as hover.

## Visual posture

Narrative-first small-multiple grid: compact, readable, and visually led by the football grounds. The surface should feel like a clean visual story, not a dashboard control room.

## Accessibility

- Do not rely on color alone: include labels, winner tags, metric values, and direction cues.
- Use high-contrast text and visible focus outlines.
- Include reduced-motion support.
