# PRODUCT.md — The Field

Project: `fifa-2026-tournament`

- **Audience:** general / design-literate. No football expertise assumed; the piece reads as a poster first, a chart second.
- **What they should take away:** possession usually wins (the ringed quarterfinalists all sit high); Paraguay's five marks survive far below that field.
- **Posture:** data-art-led. One composed object — a dot field, a constellation, a footnote. Composition carries the argument; copy is limited to STORY.md's inventory.
- **How it should feel:** minimal brutalist. Bone-white ground, off-black ink, a single blood-red accent on the Germany match. Condensed grotesk poster type (Oswald display / Archivo small text).
- **Focal point:** the Germany mark — 25% possession, a draw won on penalties, never styled as a win; the caveat footnote shares its viewport.
- **Anti-references (deliberately avoided):** dashboards (no cards, panels, KPI strips, filters, buttons); scrollytelling with paragraph beats per match — the STORY.md default_to_avoid. Interaction is limited to hover/focus assistive labels; otherwise the piece is a still object.
- **Rendering:** hand-rolled static SVG, no JS libraries — works at `file://`, reduced-motion safe by construction. Webfonts (Oswald/Archivo) load from Google Fonts and degrade to the condensed/system fallback stacks when offline.
