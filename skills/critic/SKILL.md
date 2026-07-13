---
name: critic
description: Evaluate data-visualization briefs and HTML artifacts through editorial rigor, visual craft, and anti-default design critique. Use when the user needs a critique pass on language load, narrative restraint, hierarchy, data-art sensitivity, or final visualization quality before signoff.
---

# Critic

## Overview

Evaluate a visualization handoff, option set, brief, or artifact with concrete, decision-useful critique. Critic does not generate the primary story or design direction. It inspects whether the chosen posture, evidence framing, copy load, hierarchy, and interaction choices are earning their place before the work moves to the next stage or reaches the user.

## Core Rule

Do not replace the user's chosen direction with your own preferred concept. Review what exists, name the concrete defects, explain why they matter, and recommend the smallest set of changes needed to strengthen the work.

Use concrete defect classes instead of generic taste notes. Avoid comments like "make it more polished" or "add more punch." Say what is wrong, why it weakens the piece, and what should be cut, clarified, or redesigned.

Critic is an internal review layer by default. Its output should go to the orchestrator and downstream skills, never directly to the user.

When Critic is used inside the full Data Vizard workflow, assume a pre-presentation checkpoint by default: critique the current stage output, send the findings back into the workflow, and let the upstream skill rework the output before the orchestrator presents anything to the user.

## Critique Modes

- `editorial`: claim discipline, caveats, restraint, evidence support, and whether visible text earns its place
- `visual`: focal point, hierarchy, originality, pacing, composition, interaction burden, and whether the visual can speak without explanatory clutter
- `dual`: both lenses, weighted by posture

Default to `dual` unless the user or orchestrator specifies another mode.

## Workflow

1. Confirm what you are reviewing.
   Review a Curator handoff, Analyst candidate set, Narrator handoff, Designer option set, or Designer artifact. If multiple artifacts exist, review them in workflow order.

2. Confirm the posture.
   Respect `explanatory`, `balanced`, and `data-art-led` as different standards. Do not review a data-art-led piece as if it were a conventional explanatory chart.

3. Review the handoff contract.
   Look for:
   - `posture`
   - `language_load`
   - `text_budget`
   - `visible_text_inventory`
   - `must_keep_text`
   - `optional_text`
   - `focal_point`
   - `default_to_avoid`
   - `critique_mode`

   Earlier-stage reviews may not include every field. When reviewing Curator or Analyst work, focus on evidence quality, caveat visibility, option framing, and whether the stage is about to overstep into the next decision.

4. Identify defect classes.
   Use concrete findings such as:
   - evidence not strong enough for the proposed claim
   - caveat hidden, missing, or deferred too late
   - option set biased toward one answer without saying so
   - image option set too similar
   - premature narrowing of plausible directions
   - unnecessary visible text
   - obvious metaphor or decorative framing
   - default dashboard grammar
   - repeated shell grammar
   - default sidebar detail panel
   - relocated dashboard logic
   - remote selected-state dependency
   - generic color drift
   - same-temperature palette drift
   - immersive concept flattened into static shell
   - missing wireframe or fidelity plan
   - rendering approach underpowered for concept
   - rounded-card overuse
   - accent-rail rescue styling
   - weak focal point
   - hierarchy too flat
   - interaction or annotation not earning its place
   - decorative or inert controls
   - incomplete record reachability
   - missing verification evidence
   - missing artifact metadata
   - oversized single-file artifact without justification
   - data-art posture violated by explanatory clutter
   - misaligned-control-placement
   - typographic-noise
   - maximalist-chart-styling
   - rounded-box-slop
   - floating-readout
   - generic-editorial-copy
   - responsive-breakpoint-blindness
   - desktop-composition-collision
   - density overflow
   - caveat missing or too far from the claim
   - image-generated concept work being mistaken for final evidence display
   - selected concept mechanism dropped without approval

5. Return actionable findings.
   For each issue, say:
   - what is wrong
   - why it matters
   - the recommended action

   Keep the tone operational and internal. Critic findings are meant to improve the work, not to appear in the user-facing flow.

   If the review finds issues in option sets, briefs, or artifacts, the receiving skill should revise the work and return the improved version for presentation. Do not ask the user to choose among options that Critic has already judged to be materially weak when those options can be reworked first.

   Treat the following as signoff blockers unless the brief explicitly calls for them:
   - generic dashboard chrome in a non-dashboard piece
   - a narrow option set that keeps the same shell and only swaps chart types
   - an image-generated option set where the options share the same shell, color mood, camera angle, density, or UI pattern and therefore do not represent distinct design directions
   - a selected immersive or scene-led concept being flattened into ordinary DOM layout or app chrome without explicit user-approved simplification
   - missing wireframe, low-fidelity mockup, or fidelity plan before final implementation of a complex spatial/immersive concept
   - missing rendering/library decision for a concept that appears to require D3/SVG, Canvas, WebGL, Three.js, MapLibre, or another richer rendering approach
   - safe default color palettes that erase the intended character of the piece
   - collection-led work collapsing into generic product-browser utility
   - a record-by-record explorer where records are not all reachable through the designed visual system
   - decorative or inert visible controls, including buttons or filters that imply unavailable behavior
   - in any non-dashboard work, visible text surfaces that exceed Narrator's `visible_text_inventory` without strong justification
   - generic shell reuse such as `hero + card block + sidebar detail` without a concept-specific reason
   - detached persistent detail behavior being preserved by relocating it rather than removing or rethinking it
   - visible controls that are functional but visually misplaced, detached from their title row, or floating between unrelated surfaces
   - maximalist chart marks, such as glows, thick halos, gradients, oversized corner radii, or shadows, when they do not encode meaning or improve legibility
   - repeated rounded boxes or nested card stacks used as the default structure for non-dashboard detail content
   - standalone readout text that floats between a chart and a detail section instead of staying local to the selected mark or related content
   - generic editorial copy that sounds like a placeholder, especially titles, readouts, or section headers that could fit any dataset
   - a responsive signoff that verifies only mobile or only the widest desktop state while skipping cramped desktop/tablet widths
   - desktop or tablet compositions where a hero title, chart card, control, label, or panel crosses a gutter, clips, overlaps, visually competes with another region, or is vertically stranded by centering against a much taller sibling
   - text overflow or density mismatch in repeated small components
   - missing browser/render verification for a final HTML artifact, unless the status is explicitly `draft built` or `blocked`
   - missing `SIGNOFF.md` or equivalent verification notes when final signoff is claimed

6. Conclude with a pass state.
   Return one of:
   - `pass`
   - `pass with cuts`
   - `revise before signoff`

## Review Standards

### Editorial Lens

- Every visible line must orient, evidence, qualify, or instruct.
- Decorative metaphor is a defect unless it adds analytic clarity.
- Claims must stay inside the evidence.
- Caveats should sit near the claims they qualify.
- If the visual already does the job, reduce the copy load.
- In any non-dashboard work, any first-load text surface missing from `visible_text_inventory` should be presumed unnecessary until defended.

### Visual Lens

- One focal point should clearly lead the reading path.
- Hierarchy should be visible at a glance, not evenly flattened.
- Default dashboard grammar should be treated as a defect when the piece is narrative or data-art-led.
- Repeated shell grammar should be treated as a defect when the structure feels borrowed from a generic app rather than the chosen concept.
- Generic color drift should be treated as a defect when the brief, source material, or chosen aesthetic family implies a more specific palette attitude.
- Same-temperature palette drift should be treated as a defect when the page never establishes meaningful tension between surface, accent, and emphasis colors.
- Conventional right-rail detail panels should be challenged in any non-dashboard work unless they are clearly the strongest focus device.
- Relocated dashboard logic should be treated as a defect when the same detached detail behavior survives in a bottom band, top strip, floating drawer, or other remote persistent surface.
- Remote selected-state dependency should be treated as a defect when understanding a hovered or selected mark requires a long eye-jump to a separate panel instead of a local reveal.
- Rounded-card overuse should be treated as a defect when most major surfaces share the same softened component treatment without conceptual justification.
- Accent-rail rescue styling should be treated as a defect when a generic box is being “saved” by a colored left edge or stripe instead of a concept-specific form.
- Controls, cards, panels, and labels must earn their place.
- For collection-led work, search, filters, rails, footers, and action buttons should support the composition rather than replace it as the main discovery mechanism.
- Every visible control should be functional, disabled with explanation, or removed.
- For record-by-record explorers, visible counts should match reachable records.
- For immersive or scene-led work, the final artifact should preserve the selected concept's core mechanism, such as landscape layering, clipped specimens, parallax depth, custom spatial clustering, map behavior, or animated reveal.
- When a concept requires custom rendering, ordinary DOM layout is acceptable only if the implementation plan explains how it will still deliver the intended experience.
- Density overflow is a defect, not a CSS cleanup note. If a component footprint cannot hold its text comfortably, the component contract is wrong.
- Responsive breakpoint blindness is a defect when verification proves mobile but ignores the desktop/tablet widths where multi-column compositions usually fail.
- Desktop composition collision is a defect when large type, chart cards, labels, controls, or panels intrude across columns, clip, overlap, sit implausibly low because a short column is centered against a tall one, or depend on `overflow-x: hidden` to hide a layout mistake.
- Composition, rhythm, motion, and atmosphere may carry meaning, but not at the cost of data faithfulness.
- Before passing an HTML artifact, explicitly state why these common defects are not present: `misaligned-control-placement`, `typographic-noise`, `maximalist-chart-styling`, `rounded-box-slop`, `floating-readout`, `generic-editorial-copy`, `responsive-breakpoint-blindness`, and `desktop-composition-collision`.

### Artifact Evidence Lens

- Nontrivial HTML artifacts should have a reviewable file structure, usually `index.html`, `styles.css`, `script.js`, data files, assets, favicon, and metadata.
- A monolithic HTML artifact is acceptable only when it is tiny, disposable, or explicitly justified.
- Final HTML signoff should include verification evidence: visible-text audit, shell audit, interaction-locality audit, density audit, data completeness audit, control honesty audit, metadata audit, and responsive/browser notes.
- Complex spatial or immersive artifacts should also include wireframe/fidelity notes and a rendering/library decision.
- Broken images, missing essential source fields, mojibake, malformed labels, and broken asset paths are content defects, not polish notes.

## Handoff Output

Return a concise critique note that includes:

- what was reviewed
- `critique_mode`
- `critique_findings`
- what to keep
- what to cut
- what to redesign
- signoff state

Do not present this note directly to the user. The orchestrator should instead apply the critique by requesting revisions, then present only the revised output or the resulting user-facing decision gate.

## Reference

Read `references/critique-lenses.md` before critiquing a handoff or final artifact.
