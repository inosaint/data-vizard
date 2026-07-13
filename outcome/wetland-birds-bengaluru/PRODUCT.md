# Wetland Birds Bengaluru Product Context

## Audience

General public, workshop participants, educators, and curious families. The piece should be welcoming without becoming childish, dashboard-like, or decorative for its own sake.

## Purpose

Show the monthly rhythm in source-linked wetland-bird observation records for 10 selected Bengaluru species, then let a reader use each month as a switch to see which species are closest to their own monthly high. It must not imply true abundance, live radar, flight routes, population trend, or absence.

## Narrative Posture

`General-audience editorial field-guide chart`

## Intent Brief

Create a restrained monthly chart with field-guide clarity: simple solid bars, quiet labels, a Play/Pause control aligned with the chart title, Wikipedia-linked bird photos, and one tucked-away source/method note. The visual should feel disciplined and observational, not maximalist, gloomy, toy-like, or made of generic rounded cards.

## Source Boundary

Do not use JSON-linked local image paths or files inside `/Users/trine/Documents/Codex/wetland birds blr/`. The project-local curated image source is Wikipedia/Wikimedia Commons metadata in `data/wetland-birds-bengaluru/curated/species-wikipedia.json`.

## Personality

Precise, spacious, and quietly warm. The mood should sit between `field guide naturalist` and `editorial chart plate`: enough craft to feel intentional, enough restraint that the data stays obvious.

## Default Approach To Avoid

Avoid the overloaded map, filter sidebar, KPI strip, right-rail detail panel, black radar mood, child worksheet styling, 10-point visible scores, generic rounded-card stacks, floating readouts, all-caps/bold labels, scientific names in cards, and unexplained labels such as `leading signal`.

## Design Principles

- Let bar height carry the main monthly comparison; avoid extra decorative encodings.
- Keep the two-column desktop layout honest: the hero title must not cross the gutter or compete with the chart plate at intermediate desktop widths.
- Keep the desktop title anchored near the top of the first screen; do not vertically center the intro beside a taller chart plate.
- Keep bars solid and restrained: no glow, thick halo, oversized rounding, or decorative shadow.
- Keep month labels stable across selection and playback.
- Align the Play/Pause icon with `Observation activity` at the top-right of the chart title row.
- Use an assistive-only live status for selected-month state instead of a floating visible readout.
- Bird rows should emphasize photo, common name, Wikipedia link, concise monthly status, and highest month.
- Bird ranking should be framed relative to each species' own monthly high, not as a census or popularity score.
- Use open list structure and hairline separators before rounded boxes or card chrome.
- Image attribution, license information, and caveats should remain available without dominating the first read.
- Do not render the detailed boundary layer unless the story becomes spatial again.

## Accessibility Goals

Use semantic HTML, keyboard-reachable month controls, visible focus states, reduced-motion support, large enough touch targets, useful image alt text, stable labels, assistive selected-month status, and enough contrast for chart labels.
