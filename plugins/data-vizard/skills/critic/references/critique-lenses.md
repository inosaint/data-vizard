# Critique Lenses

## Dual-Lens Principle

Use the chosen posture to weight the critique:

- `Explanatory`: editorial rigor leads, visual craft still matters
- `Balanced`: editorial and visual concerns should be close to even
- `Data-art-led`: visual craft and restraint lead, but data faithfulness and caveats still matter

## Default-Rejection Pass

Before praising a piece, ask whether it fell into an obvious AI-ish default:

- dashboard chrome for a visual story
- filler annotation copy
- decorative metaphor
- generic card-first layout
- controls that exist because interfaces usually have controls
- atmospheric language that adds no meaning

## Concrete Defect Classes

- `unnecessary-visible-text`
- `decorative-framing`
- `default-dashboard-grammar`
- `chart-grammar-collapse` (a `data-art-led` piece or option that resolves to axis-plus-marks chart grammar; the fix is a different form or decode support, not converting the piece back into a chart)
- `generic-color-drift`
- `utility-ui-collapse`
- `option-set-too-narrow`
- `image-option-similarity`
- `weak-focal-point`
- `flat-hierarchy`
- `interaction-not-earned`
- `decorative-or-inert-controls`
- `incomplete-record-reachability`
- `missing-verification-evidence`
- `oversized-single-file-artifact`
- `immersive-concept-flattened`
- `missing-wireframe-fidelity-plan`
- `underpowered-rendering-choice`
- `posture-mismatch`
- `missing-caveat`
- `data-art-clutter`
- `illustration-confused-with-evidence`
- `misaligned-control-placement`
- `typographic-noise`
- `maximalist-chart-styling`
- `rounded-box-slop`
- `floating-readout`
- `generic-editorial-copy`
- `responsive-breakpoint-blindness`
- `desktop-composition-collision`

Use these labels when useful to keep critique sharp and comparable across projects.

Use `generic-color-drift` when the piece falls back to safe corporate blues, dull gradients, or low-character neutrals even though the brief, source material, or selected aesthetic family called for a more intentional palette.

Use `utility-ui-collapse` when a collection, archive, shelf, or exploratory piece had room for a stronger visual or data-art-led posture but was prematurely narrowed into a generic product browser, table, grid, or filter panel.

Use `option-set-too-narrow` when the user is being shown superficial variants of the same concept, such as multiple chart-type swaps inside the same layout, instead of genuinely different experiential directions.

Use `image-option-similarity` when generated or mocked visual options share the same shell, palette temperature, camera angle, density, typographic mood, or interaction metaphor and therefore do not give the user a real design choice.

Use `decorative-or-inert-controls` when visible buttons, filters, tabs, map triggers, share actions, or other interface elements imply functionality that is not implemented or does not materially support interpretation.

Use `incomplete-record-reachability` when a record-by-record explorer claims a collection size but only exposes a subset of records through the designed visual system.

Use `missing-verification-evidence` when a final artifact is marked complete without browser/render checks, visible-text audit, shell audit, interaction-locality audit, density audit, data completeness audit, control honesty audit, metadata audit, or equivalent signoff notes.

Use `oversized-single-file-artifact` when a nontrivial HTML artifact keeps substantial CSS, JavaScript, data handling, and markup in one file without a clear portability or reviewability reason.

Use `immersive-concept-flattened` when a selected scene-led, spatial, map-led, animated, or data-art concept is reduced to a static app shell or ordinary DOM layout without user-approved simplification.

Use `missing-wireframe-fidelity-plan` when a complex selected direction moves directly from concept image or prose into final implementation without a low-fidelity wireframe, spatial outline, or explicit list of concept mechanisms to preserve.

Use `underpowered-rendering-choice` when the concept implies D3/SVG, Canvas, WebGL, Three.js, MapLibre, or another richer rendering approach but the implementation defaults to plain DOM layout without explaining how it will still deliver the intended experience.

Use `misaligned-control-placement` when a real control works but is visually detached from the title row, edge, rail, mark, or section it controls. Functional placement can still be a design defect.

Use `typographic-noise` when all-caps labels, sudden font changes, heavy weights, or competing display styles appear without a clear hierarchy or concept-specific reason.

Use `maximalist-chart-styling` when glows, gradients, thick halos, oversized radii, shadows, or animated emphasis make simple chart marks feel more decorative than informative.

Use `rounded-box-slop` when repeated rounded containers, nested cards, pill labels, or soft panels become the default layout grammar instead of a concept-specific choice.

Use `floating-readout` when selected-state text sits as a detached sentence between chart and detail instead of appearing near the selected mark, inside the detail surface, or only in an assistive live region.

Use `generic-editorial-copy` when titles, section headers, readouts, or helper lines could fit almost any dataset. Common signs include placeholder phrases such as "high point", "prominent", "quieter months", "what this shows", or "the pattern is clear" unless those are demonstrably the most precise terms.

Use `responsive-breakpoint-blindness` when an artifact is marked responsive after checking only mobile, only full-width desktop, or only the author's current viewport. Cramped desktop and tablet widths must be inspected because multi-column compositions often fail there first.

Use `desktop-composition-collision` when a large title, chart card, panel, label, control, or media region crosses a gutter, clips, overlaps, visually competes with another region, or sits implausibly low because a short column is centered against a much taller sibling at desktop or tablet widths. Hidden horizontal overflow does not count as a fix.

## User-Facing Rule

Critique output is normally internal. The orchestrator may summarize the consequence of the critique for the user, but it should not dump the raw critique note into the conversation unless a real user decision is blocked on it.
