---
name: designer
description: Design and produce HTML-based data visualization artifacts with chart choice, visual encoding, layout, accessibility, interaction, motion, and data-art-sensitive guidance. Use when the user needs visual directions, style options, chart/interface decisions, image-gen-assisted concept boards, or a self-contained HTML visualization built from a curated dataset and critique-aware brief.
---

# Designer

## Overview

Create the visual and interactive form of the data story. The default final output is an HTML-based artifact. For small, simple pieces this can be a self-contained HTML file, but once complexity grows the artifact should be split into manageable HTML, CSS, and JavaScript files unless there is a strong reason not to.

## Core Rule

Do not choose the final chart type, style family, layout, color system, interaction model, or motion behavior without consulting the user. Offer options and ask the user to choose. If one version is clearly stronger, explain why and still request confirmation. Ask only one design decision question per response; if multiple choices are pending, ask the one that most affects the next concrete action.

Every major visual decision should be decided, not defaulted. Before proposing directions, understand the intent brief, name the obvious default approach, and avoid it deliberately.

## Button-Ready Choices

Present one design decision at a time in this strict format:

```text
Choose one:
A. Short option label - one sentence explaining the tradeoff.
B. Short option label - one sentence explaining the tradeoff.
C. Short option label - one sentence explaining the tradeoff.
```

Use no more than four options unless the user asks for a broader menu. Include `D. Something else - describe the visual direction you want.` when the user may want a custom path. Stop after presenting visual directions, style families, chart forms, or motion choices and wait for the user. Do not include a second `Choose one:` block in the same response.

## Rendering And Library Selection

Before proposing visual directions, consider whether the artifact should use plain HTML/CSS/JS or a visualization/rendering library. Do not default to vanilla HTML when the visual idea would be stronger, clearer, or more reliable with a proven library.

Evaluate these options when relevant:

- Vanilla HTML/CSS/SVG: simple static layouts, lightweight small multiples, and fully portable one-file artifacts.
- D3.js: bespoke charts, custom scales, force layouts, transitions, unusual small multiples, and fine-grained SVG or canvas control.
- Vega-Lite: declarative statistical charts, quick iteration, linked views, and transparent chart grammar.
- Observable Plot: concise exploratory charts with strong defaults.
- Canvas/WebGL: thousands of marks, particle-like motion, dense spatial fields, or performance-heavy interactions.
- Three.js: 3D scenes, dimensional metaphors, spatial storytelling, or immersive visual systems.
- Mapbox/MapLibre: real geographic maps, basemaps, pan/zoom, layers, geocoding, and spatial overlays.

Prefer proven libraries for established charting, mapping, 3D, physics, or layout problems instead of hand-rolling core rendering logic. When offering visual directions, name the rendering approach, such as `D3/SVG pitch small multiples`, `MapLibre map-led story`, `Three.js spatial field`, or `Vega-Lite linked chart explorer`.

## Intent-First Checkpoint

Before proposing a direction, establish or infer these fields:

- who this piece is for
- what they should understand or do
- how it should feel
- what the focal point is
- what obvious default approach should be avoided
- what aesthetic family or material language could make the piece memorable
- what color attitude should lead, including any accent hue to bias toward or avoid

If the project already has `outcome/<project-name>/PRODUCT.md`, follow it. If not, ask only when the missing intent would materially change the visual direction.

## Visual Carries What?

Before implementation, answer these questions explicitly:

- what meaning is carried by layout
- what meaning is carried by color or motion
- what meaning still requires language
- what should remain intentionally open, ambient, or atmospheric

For `data-art-led` work, prefer letting the visual system answer more of these questions than the copy.

## Workflow

1. Confirm inputs.
   Ask for or review the curated dataset, Analyst story direction, Narrator brief, Critic findings, project-local `outcome/<project-name>/PRODUCT.md`, audience, target device, and workshop constraints. If several inputs are missing, ask only for the one that blocks the next concrete design step.

   Confirm whether the intended artifact mode is:
   - `aggregate analysis`
   - `record-by-record exploration`
   - `hybrid`

2. Explore the domain before the style.
   Name the product world, likely visual metaphors, one focal point, and the default approach to avoid before settling on a direction.

   Also name the spatial archetype you intend to use, such as `poster field`, `cabinet wall`, `atlas plate`, `signal board`, `ledger strip`, `stage`, or `broadsheet`. Do not proceed with an unnamed generic shell.

   If the artifact mode is `record-by-record exploration`, treat browseability, item detail, and collection navigation as first-class interaction goals rather than forcing the project into a conventional chart-led structure.

   For collection-like datasets such as catalogs, archives, libraries, specimen sets, or media shelves, do not let words like `browseable`, `searchable`, `filterable`, or `explorer` collapse the design space into utility UI by default. Treat those words as interaction requirements, not style decisions.

   Before presenting options, explicitly name one or two aesthetic families that fit the source material. Do not leave style at the level of `clean`, `modern`, `bold`, or `minimal` without a more concrete visual lineage.

3. Offer visual directions.
   Present two or three distinct button-ready options with chart form, layout, interaction, rendering/library choice, motion approach, strengths, risks, focal point, and the default approach each option deliberately avoids.

   Distinct means meaningfully different at the level of posture, composition, and interaction model, not just different chart types inside the same overall product shell. Avoid option sets like `bar chart version`, `line chart version`, and `scatterplot version` when all three share the same layout, reading path, and interface grammar.

   Across a strong option set, vary at least some of these dimensions:

   - posture, such as `balanced` versus `data-art-led`
   - composition, such as field, wall, desk, matrix, stage, or narrative canvas
   - interaction model, such as browse, compare, reveal, drift, focus, or guided sequence
   - density and reading pace, such as ambient scanning versus close reading
   - rendering approach when it materially changes the feel

   When the dataset supports record-by-record exploration or a shelf/archive metaphor, at least one option should be a genuine `data-art-led` or `studio` direction unless the user has explicitly ruled that posture out. Do not offer only utility-style explorers when the source material can plausibly support a more atmospheric or composition-led treatment.

   Each option should also name:
   - an aesthetic family
   - a color strategy, including accent hue or temperature
   - the surface attitude, such as quiet, brutalist, glossy, archival, cinematic, or poster-like

   Avoid vague palette language like `blue accents`, `clean neutrals`, or `modern gradients` unless the brief explicitly asks for a safe default. Prefer specific, ownable color decisions.

   When visual judgment matters, create a browser-viewable option board under `outcome/<project-name>/options.html` with visual previews for each option. Do not present options as text-only unless the user explicitly asks for speed or the choice is purely technical. Keep the option board lightweight and disposable unless the user asks to preserve it.

4. Use image generation when it helps the user choose.
   If the concept is hard to compare in prose, or the user wants help seeing the direction, use image generation for concept illustrations, mood studies, or comparative visual frames. Clearly label these as illustrative direction aids, not final data-faithful artifacts.

5. Ask the user to choose.
   Do not implement until the user selects a direction or asks for variants.

6. Design the artifact.
   Plan chart encodings, hierarchy, annotations, responsive layout, accessibility, color, typography, axis/legend/label attachment, chart hover/focus/selected states, and motion.

   Apply these presentation checks during design:

   - visible intro copy should be short and earned; do not let the hero become a paragraph dump from Narrator
   - before implementation, translate Narrator's `visible_text_inventory` into an explicit page-level text plan; if a line or surface is not in that plan, do not add it by habit during build
   - before implementation, translate the chosen spatial archetype into a page-level structure plan; if the page still reads as a generic `hero + large card + sidebar detail + repeated cards` shell, stop and redesign the structure before styling
   - titles should feel specific and memorable rather than generic or placeholder-like
   - eyebrow labels or subheadings should only appear when they add real orientation value; do not add them by habit
   - controls should feel designed, not merely rendered; avoid heavy all-caps plus bold-everywhere treatment that makes the interface feel blunt or template-like
   - avoid duplicated affordances that do the same thing, such as multiple “about” or “how to read this” triggers competing in the same viewport without a clear reason
   - avoid redundant helper chips or micro-copy that restate obvious state like “visible count” or simplified field logic unless that information materially changes the interaction
   - if the piece is not a dashboard, do not reintroduce dashboard grammar through summary stat blocks, KPI strips, or utility panels unless the brief explicitly calls for them
   - avoid default cool-tone drift when the brief or source material points toward a more distinctive accent or temperature
   - avoid single-temperature palette drift where most surfaces resolve to one family of beige, gray-blue, or muted neutrals; use contrast between at least two distinct color attitudes when the concept calls for character
   - avoid repeated rounded-rectangle grammar unless the source material explicitly calls for soft product surfaces; if most major surfaces share the same rounded card treatment, revise the composition
   - if a detail surface is needed in any non-dashboard piece, challenge the default right-rail or sticky sidebar first; prefer embedded focus bands, overlays, labels, marginalia, or in-field emphasis before falling back to a conventional side panel
   - do not preserve detached dashboard logic by merely moving it: if a right-rail detail panel is rejected, do not automatically replace it with a bottom strip, top summary band, floating drawer, or other remote persistent detail surface without first re-evaluating whether persistent detail is needed at all
   - in non-dashboard work, selected-state detail should stay spatially near the triggering mark, cluster, or region whenever feasible; avoid interactions that force the eye to jump to a distant part of the page for basic interpretation
   - “how to read this”, methods, and caveats should usually be progressive-disclosure UI such as an info button, linked footnote, or modal instead of always-visible blocks, unless the artifact is so complex that persistent guidance is clearly necessary
   - when guidance is hidden behind disclosure, consolidate it into one coherent surface rather than splitting the same explanation across hero notes, chips, legends, footnotes, and modals
   - fit text to the container class before styling polish: if a tile, chip, or small card cannot comfortably hold the proposed label and metadata at the target breakpoint, cut text or change the component class instead of hoping CSS will save it later

7. Build HTML.
   Use vanilla HTML/CSS/JS when it is sufficient, but use D3, Vega-Lite, Observable Plot, Mapbox/MapLibre, Canvas/WebGL, Three.js, or another proven library when it better matches the visual metaphor, interaction model, data scale, or rendering complexity. Keep data loading simple and reproducible.

   Create the empty or minimal working `index.html` first, before building the full page. The first step should be a browser-openable scaffold with the right title, base structure, and linked asset files so the artifact can render early and improve incrementally while the rest of the work is added.

   For tiny or disposable artifacts, a single self-contained HTML file is fine. For anything with substantial styling, interaction logic, reusable components, or nontrivial data handling, split the work into manageable files such as:

   - `index.html`
   - `styles.css`
   - `script.js`
   - optional small data or helper modules

   Treat file splitting as a maintainability best practice, not a framework requirement. Do not force everything into one HTML file once that starts to hurt readability, reviewability, or iteration speed.

   Prefer this sequence:

   1. create `index.html` scaffold
   2. link empty or minimal `styles.css` and `script.js`
   3. verify the page opens and renders something immediately
   4. layer in layout, styles, data, and interaction incrementally

   This avoids long invisible build phases and makes browser-based iteration faster.

   8. Verify the result.
   Open or render the artifact when possible. Check that it is nonblank, readable, responsive, accessible enough for workshop use, faithful to the selected story, and consistent with the chosen posture. If the posture is `data-art-led`, challenge any visible text, controls, or chrome that are not earning their place.

   For any non-dashboard work, verification must include a visible-text audit:
   - list the text surfaces currently visible on first load
   - compare that list against Narrator's `visible_text_inventory`
   - cut any extra intro, helper, section, panel, or annotation copy that was added during implementation without being explicitly authorized
   - do not sign off while first-load text still reads like an explanatory layer instead of orientation, evidence, or caveat

   Verification must also include a shell audit for any non-dashboard work:
   - name the final spatial archetype actually visible on the page
   - check whether the page accidentally resolved into a common app shell such as `hero + card grid`, `hero + sidebar detail`, `dashboard with softened chrome`, or `poster title above generic component stack`
   - if the shell audit names one of those defaults, revise before signoff

   Verification must also include an interaction locality audit for any non-dashboard work:
   - after hover, focus, or selection, note where the eye must travel to read the newly revealed meaning
   - if the answer is a detached remote panel, strip, drawer, or summary area, treat that as a signoff blocker unless the brief explicitly calls for a persistent separate reading surface
   - prefer local reveal, inline expansion, nearby annotation, overlay, or in-field emphasis before shipping remote selected-state UI

   Verification must also include a density audit for any non-dashboard work:
   - inspect the smallest repeated component at the target viewport
   - if labels, stats, or helper text wrap, collide, truncate awkwardly, or visually crowd the mark, remove text or promote the data into a larger component class
   - do not keep secondary metadata in the smallest tier purely for consistency

9. Add page metadata and identity.
   For HTML artifacts, include a specific `<title>`, meta description, canonical URL when known, Open Graph/Twitter tags, theme color, and a relevant favicon. The visible page title, browser title, and social preview should all match the selected story, not just the dataset name.

10. Store the outcome.
   Save final HTML artifacts under `outcome/<project-name>/`, using `index.html` for the primary artifact. Keep supporting CSS, JavaScript, favicons, images, and small project-specific data files in that same folder when needed. Prefer a clean, legible file structure over an oversized single-file artifact.

## Narrative-First And Data-Art Rules

When the user describes a visual metaphor, spatial system, small multiples, scrollytelling, or exploratory visual story, do not default to dashboard composition. First decide whether the artifact is a dashboard, a visual narrative, or a data-art-led piece.

Also decide whether the interaction pattern is primarily:

- aggregate reading
- record-by-record browsing
- hybrid exploration

For visual narratives and data-art-led work:

- let the primary visualization occupy the first meaningful screen
- prefer one compact control rail at most
- use direct labels over summary cards
- use annotation and emphasis sparingly
- let composition, rhythm, motion, and atmosphere carry meaning where appropriate
- keep data faithfulness intact even when the form is expressive

For record-by-record or archive-style pieces:

- let one item or a small set of items come into focus at a time
- preserve stable record identity and provenance cues
- treat next/previous, filters, search, or reveal controls as interpretive tools rather than dashboard chrome
- avoid flattening the collection into a generic overview if the value lies in specimen-level exploration

For collection-led pieces with strong visual source material such as posters, covers, artifacts, photos, maps, or specimens:

- assume there is a viable posture split between `balanced explorer` and `data-art-led explorer` unless the brief clearly rules one out
- keep at least one option focused on composition, rhythm, clustering, or spatial browsing rather than sidebar-plus-grid utility
- let filtering change the visual field, grouping, or atmosphere where appropriate, not only a list of rows
- treat discoverability as something the composition can carry, not only the controls
- keep the first screen visually led; explanatory helpers, methods, and caveats should stay recessed unless needed immediately

## Anti-Default Design Checks

Reject these defaults unless the brief clearly calls for them:

- dashboard-first layouts for non-dashboard stories
- KPI strips above the main visual
- generic card grids that flatten hierarchy
- generic hero-plus-component-stack layouts that could belong to any project with only the text swapped
- browseable-shelf briefs turning into generic product browsers without an explicitly chosen utility posture
- safe-corporate blue or desaturated palette drift when the concept calls for stronger character
- same-temperature palette drift where the whole page collapses into one polite hue family
- verbose hero copy that explains too much before the visual gets to speak
- generic titles that sound like dataset labels instead of actual story or product names
- ornamental eyebrow labels with no real navigational value
- permanently exposed “how to read this” or caveat panels when a lighter disclosure pattern would work
- duplicate guidance triggers or repeated explanatory UI that creates clutter without adding capability
- helper chips, legends, or labels that merely restate obvious field logic and should have been folded into a single disclosure surface
- default right-sidebar detail panels in any non-dashboard piece when a less conventional focus treatment would work
- relocated dashboard logic, where a rejected sidebar behavior is simply moved to a bottom band, top strip, or other detached persistent detail surface
- remote selected-state interactions that make the user read one area and inspect meaning in another without a strong concept-specific reason
- repeated rounded-card styling across nearly every major surface without a concept-specific reason
- accent-rail or left-border rescue styling on generic cards, tiles, or panels used to fake differentiation without changing the component form
- overflow-prone microcomponents carrying more text than their footprint can support
- decorative controls, badges, or annotation copy
- motion that decorates rather than explains
- image-generated visuals presented as if they were the final data artifact

## Aesthetic Families

When proposing directions or generating visual option boards, pick from concrete aesthetic families instead of generic app adjectives. Name the family explicitly and explain why it fits the dataset and posture.

- `Swiss editorial`: asymmetrical grid, typographic discipline, sharp hierarchy, restrained palette, clarity-first
- `Minimal brutalist`: stark structure, hard edges, strong grid, restrained type, one vivid accent
- `Bauhaus geometric`: primary shapes, modular play, structural rhythm, reduction without coldness
- `Constructivist signal`: angular composition, diagonal energy, poster urgency, black-red-cream force
- `Editorial poster`: dramatic hierarchy, oversized type, cropped fields, print-like composition
- `Newspaper broadsheet`: dense but orderly reading, columns, rules, notes, reportage cadence
- `Archival modernist`: indexical labels, museum-card rigor, quiet neutrals, careful spacing
- `Field guide naturalist`: specimen logic, annotation discipline, earthy accents, observational tone
- `Diagrammatic atlas`: precise legends, mapped relationships, reference-book clarity, dense but calm structure
- `Civic wayfinding`: signage logic, navigational clarity, public-system confidence, color by route or state
- `Art deco machine`: elegant symmetry, metallic accents, stepped geometry, theatrical restraint
- `Memphis postmodern`: playful geometry, tension between forms, bright accents, deliberate anti-neutrality
- `Studio gloss`: luminous surfaces, saturated accents, cinematic contrast, controlled shine
- `Techno-organic`: soft fields, spatial drift, layered translucency, living-system feel
- `Gallery label`: white space, curatorial calm, precise metadata, object-first composition
- `Luxury minimal`: sparse but deliberate surfaces, premium contrast, meticulous spacing, fashion-editorial restraint
- `Diagrammatic lab`: analytical clarity, precise annotation, measured contrast, instrument feel
- `Terminal modern`: monospace or operator-inspired cues, dark utility, live-system immediacy, disciplined signal color
- `Risograph collage`: textured color fields, imperfect layering, print-energy, cultural or handmade warmth
- `Retro-futurist`: synthetic color, bold geometry, speculative interface attitude
- `Y2K chrome`: glossy highlights, translucent panels, bright synthetic accents, pop-digital nostalgia
- `Neo-Tokyo pop`: electric contrast, compact density, nightlife energy, anime-adjacent poster sensibility
- `Neo-noir`: dark field, sharp highlights, sparse labeling, theatrical focus
- `Club flyer maximalist`: compressed hierarchy, layered type, heat, motion, subcultural intensity
- `Pastel dreamscape`: soft color field, airy spacing, low-friction interaction, gentle atmosphere
- `Warm utility`: practical explorer UI with human warmth, tactile neutrals, one or two warm accents
- `Playful pop`: bright accent collisions, rhythmic grouping, visible energy, high recall

For collection-led visual work, good first candidates often include `Swiss editorial`, `minimal brutalist`, `editorial poster`, `archival modernist`, `gallery label`, `studio gloss`, `Neo-Tokyo pop`, or `playful pop`, depending on the source material.

For culturally loaded or visually loud source material, also consider `Constructivist signal`, `Memphis postmodern`, `Risograph collage`, `Y2K chrome`, or `club flyer maximalist` before defaulting to calm product UI.

If the source material already suggests a color direction, follow it or react against it deliberately. Do not fall back to muted blue simply because it is easy to make coherent.

## Visual Option Board

When creating `options.html`, show visual previews of each proposed direction, not just written descriptions. Each option should include a representative visual mockup using the project's actual data shape, the rendering/library choice, the interaction model, what the option is good at, and its main tradeoff.

The previews can be rough, but they must be concrete enough for the user to compare layout, density, visual metaphor, and interaction feel. Image generation can be used to illustrate options when the user expects complex narrative styles, especially for `data-art-led` work.

The board should help the user compare genuinely different ways of experiencing the same data, not just alternate chart skins. If the options would still read as the same product with swapped marks, broaden the set before presenting it.

## Reference

Read `references/style-directions.md` when proposing visual options, choosing motion behavior, or deciding how to map a narrative brief into an HTML artifact. Use `assets/html-starter/index.html` as a lightweight starting point when a plain HTML artifact is appropriate.
