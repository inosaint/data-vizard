# Wireframe And Fidelity Plan

## Revised Direction

`Editorial Monthly Plate + Field-Guide List`: a general-audience monthly chart for selected Bengaluru wetland birds. Month bars and the Play/Pause icon switch an open bird-photo list.

## Spatial Regions

- Left introduction: quiet dataset label, editorial title, and one-sentence seasonal reading.
- Main monthly plate: 12 stable solid month bars, quiet axis guide, and a compact Play/Pause icon aligned to the right of `Observation activity`.
- Responsive boundary: use the side-by-side editorial/title and chart-plate layout only when the title can stay inside its column; collapse to a single-column stack before the title and chart collide.
- Vertical rhythm: on desktop, the intro and chart plate start from the same top edge so the title reads as the page title, not a mid-page sidebar note.
- Assistive status: selected-month meaning stays in an `aria-live` region, not as a floating visible sentence.
- Bird-photo list: four species for the active month, ranked by closeness to each species' own monthly high, with Wikipedia links and hairline separators.
- Sources and method: one collapsed disclosure for how to read, GBIF/eBird basis, photo metadata, and observation-data caveats.

## Concept Mechanisms To Preserve

- Show seasonality without implying abundance, routes, live radar, or absence.
- Use bar height to carry the main comparison.
- Use bird photos and links to make the monthly switch tangible.
- Keep labels stable during selection and playback.
- Keep the Play/Pause control functional, modest, and aligned with the title row.
- Preserve a calm desktop composition at intermediate widths, not only at mobile and full-wide desktop.
- Keep the first-screen title anchored near the top unless a deliberately offset poster composition is chosen.
- Avoid nested rounded boxes, decorative chart glows, and standalone readout copy.
- Do not reintroduce the boundary map unless the story becomes spatial again.

## Rendering Decision

Use vanilla HTML, CSS, and JavaScript. The chart is small enough that a bespoke chart library is unnecessary; the important work is hierarchy, copy restraint, stable interaction, and responsive layout.

## Required Interactions

- Load the curated evidence JSON.
- Load the project-local Wikipedia/Wikimedia photo metadata.
- Render all 12 months.
- Click and keyboard focus select a month and update the bird-photo list.
- Play/Pause advances across months and can be stopped.
- Source/method disclosure remains available.

## Material Departure

It would be a material departure to restore the dense map, hotspot ranking, highlighted commentary cards, route-like marks, raw-count ranking as the main bird panel, scientific names in cards, visible 10-point scores, black radar styling, child worksheet styling, floating visible readouts, nested rounded-card UI, or unexplained qualitative labels such as `leading signal`.
