# SIGNOFF.md — The Field (`fifa-2026-tournament`)

Critic final artifact pass · critique_mode: `dual` · posture: `data-art-led`
Date: 2026-07-10

## Verification status

**Verified.** Rendered-pixel verification completed by the orchestrator via headless Chrome
screenshots at 1440×900 and true 380px width (iframe harness — note: headless Chrome
enforces a ~462px minimum window width, so narrow checks must use an iframe). Desktop and
mobile renders inspected: composition fills the frame, labels legible, no clipping, no
collisions, footnote shares the viewport with the Germany mark.

## File structure

`index.html` + `styles.css` + `script.js` + `PRODUCT.md` + `STORY.md` + this file.
No monolith; inline SVG favicon; no external assets beyond Google Fonts (graceful fallback,
`display=swap`). All files UTF-8, no mojibake (`Türkiye`, `Curaçao`, `–`, `·` verified).

## Wireframe / fidelity

Skipped per user decision. Concept is a single static poster (~53 marks, one polyline) —
low spatial complexity; skipping is acceptable here.

## Rendering / library decision

Hand-rolled static SVG, no D3. Rationale documented at top of `script.js`: one linear scale,
~53 marks, no transitions, no data joins. D3 would add a dependency for zero leverage.
**Judged appropriate.**

## Visible text audit (vs STORY.md inventory)

First-load text, exhaustively: title, subtitle, five match labels (character-exact to
STORY.md), Germany annotation (authorized optional), caveat footnote (exact), source line
(exact), and three axis ticks `60% 40% 20%` (authorized as the optional axis mark).
Hover/focus-only: team name+% per dot, shots/SOT/interceptions per match mark
(authorized assistive-only). **No drift; no unauthorized text.**
Forbidden-phrase scan: clean.

## Shell audit

No hero+card fallback, no dashboard chrome: zero cards, panels, KPI strips, buttons,
filters, sidebars, drawers. Structure is masthead → figure → colophon: a poster, not an app.
Defect-class check: no misaligned-control-placement (no controls), no typographic-noise
(two families, three sizes of SVG text), no maximalist-chart-styling (flat fills, 1px strokes,
no glows/gradients/shadows), no rounded-box-slop (no boxes), no floating-readout (details
reveal at the mark), no generic-editorial-copy (all copy is STORY.md-specific).

## Interaction locality

All detail is local: `<title>` native tooltips plus hover/focus assist labels rendered at the
mark itself with a bone-white knockout rect. No remote panel, no selected-state readout.
Fixed this pass: France assist label previously overflowed the viewBox (start-anchored at
x≈984, ~258px wide vs viewBox 1160) — now flips to end-anchor near the right edge; Germany
hover assist previously landed on top of its persistent annotation (~y827 vs ~y827) — now
placed above the mark.

## Density

48 faint dots + 8 rings + 5 marks + 5 labels + 1 annotation in 1160×940: sparse by design.
Golden-ratio x-spread pushes near-equal possession values apart horizontally. Residual risk
(unverified): incidental overlap between a background dot and a match label; harmless to
reading order but should be eyeballed once.

## Data completeness

- 48 team dots (counted in `TEAMS`), including Paraguay's own 30.0% average — the lowest
  dot, which visually anchors the subtitle's rank claim. STORY.md said "other 47 teams";
  including the 48th is a deliberate strengthening, noted here.
- 8 quarterfinalists flagged (Argentina, Belgium, England, France, Morocco, Norway, Spain,
  Switzerland), all ≥53% — matches STORY.md's counterpoint. Rendered ringed + heavier.
- 5 Paraguay match marks, labels exact: `USA 1–4 · 35%`, `Türkiye 1–0 · 22%`,
  `Australia 0–0 · 44%`, `Germany 1–1, 4–3 pens · 25%`, `France 0–1 · 24%`.
- Exactly 1 red element group (Germany mark + its label), `#a31621`. The label says
  "1–1, 4–3 pens" and the caveat states it is not a win — red reads as emphasis, not victory.
- Labels clean, no mojibake.

## Control honesty

No visible controls exist, so none can be inert. Every interactive element (48 dots,
5 marks, `tabindex="0"`) does something: reveals its assist label on hover/focus and exposes
an `aria-label` + native `<title>`. Nothing implies unavailable behavior.

## Metadata

Title, description, og:title/description/type, twitter:card, theme-color, favicon, `lang="en"`,
viewport — present. Figure has a descriptive `aria-label` (corrected this pass: "at or above
53 percent", since Norway sits at exactly 53.0).

## Accessibility

Focus reachable on all 53 marks; custom focus style (1.6px stroke) replaces the removed
outline; `prefers-reduced-motion` honored (no animation exists anyway); assist labels shown
on `:focus` as well as `:hover`; SVG marks carry `role="img"` + `aria-label`.

## Responsive rendering

Fixed this pass: poster is now a one-screen object (`height: 100svh`, SVG flexes to fit),
which structurally guarantees the shootout caveat shares the viewport with the Germany
mark — STORY.md's load-bearing placement rule. ≤640px the poster reverts to natural flow
(footnote directly below the field, still adjacent). **Not pixel-verified** at cramped
desktop/tablet widths (768–1100px) — flagged under verification status; SVG text scales
down with the viewBox at those widths and may get small, which is the main thing to check.

## Reviewed hook finding

An automated design hook flagged `single-font` on `index.html` line 16. False positive:
that line loads two families (Oswald + Archivo), used as display/body per PRODUCT.md.
No change made.

## Fixes applied this pass

1. France hover assist clipped outside viewBox → edge-aware anchor flip (`script.js`).
2. Germany hover assist overlapped persistent annotation → moved above the mark (`script.js`).
3. Figure aria-label "above 53" → "at or above 53" (Norway = 53.0) (`index.html`).
4. Caveat/Germany-mark viewport co-presence made structural: `100svh` poster (`styles.css`).
5. PRODUCT.md offline claim qualified (webfonts are network-loaded, degrade gracefully).

## Post-critique revisions (orchestrator pass, same date)

Rendered verification exposed two structural layout defects, fixed in `script.js`/`styles.css`:

1. **Fixed 1160×940 viewBox never matched the container** — height-limited flex layout
   rendered the field as a small centered block with ~8px effective label text on desktop.
   The viewBox now matches the container 1:1 (rebuilt on resize), so SVG text renders at
   its declared pixel size at every viewport; `.poster` max-width raised 1240→1500.
2. **Compact mode added** (<560px container): tighter margins, smaller SVG type, France
   label repositioned, axis gutter widened, and the optional Germany annotation demoted to
   hover/focus-only (it collided with the Türkiye label; it is optional text per STORY.md).
3. **Orientation key (user feedback):** readers could not decode faint dot vs ringed dot vs
   labeled mark, or that "%" meant possession. Added a one-line key under the subtitle using
   the actual mark glyphs — an essential orientation cue, permitted by the data-art-led
   posture. STORY.md inventory updated. Verified rendered at 1440px and 380px.
4. **Title swap (user decision):** h1 is now "Paraguay held less possession than any of the
   48 teams at the 2026 World Cup — and outlasted 32 of them."; the former title became the
   support line. STORY.md, `<title>`, and og: metadata updated to match. Text inventory
   otherwise unchanged.

## Composition revision (user-directed, same date)

The strewn-field composition was replaced by a **rank-order curve** after the user flagged
that the three mark types were unreadable and the legend was a patch, not a fix: all 48
teams sorted by average possession (x = rank, y = possession), Paraguay at rank 48, its five
matches extending right as satellites (x = match order, y = possession). The legend was
removed; two in-chart annotations replaced it. The two x-grammars are now explicit via two
labeled baselines: "48 teams, ranked by average possession" (rank 1 → 48) and "Paraguay's
five matches, in order" (1st → 5th). On compact screens the satellite marks carry numerals
1–5 decoded by a list under the match-order axis (full match labels move there; the Germany
note is hover-only). Verified by rendered screenshots at 1440px and true-380px after each
change. Related process change: the Designer skill gained a Data-Art Exploration Mandate and
the Critic a `chart-grammar-collapse` defect class (see repo skills), acknowledging that this
piece resolved to chart grammar despite its data-art-led posture — kept as-is at the user's
direction to iterate on the existing chart.

## Remaining caveats

- Paraguay appears both as its 30% average dot and as the five-match constellation;
  intentional, but a reader could momentarily double-count — the hover label disambiguates.
- Webfonts require network; fallback stacks are condensed-appropriate.

## Pass state

`pass with cuts applied` (Critic static review) + rendered-pixel verification at 1440px and
380px (orchestrator) — overall artifact state: **Verified.**
