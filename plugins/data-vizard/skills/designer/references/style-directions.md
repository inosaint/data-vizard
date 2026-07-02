# Style Directions

## Editorial

Use for public-facing stories, reports, and explanatory pieces. Favor strong hierarchy, careful typography, whitespace, direct labels, and annotations.

Keep titles sharp and ownable. Avoid dataset-name headlines, placeholder phrasing, and long subtitle paragraphs that front-load too much explanation before the reader sees the visual.

## Dashboard

Use for comparison, monitoring, filtering, or repeated use. Favor compact controls, consistent scales, scannable summaries, and clear empty/loading/error states.

Dense dashboard marks need explicit hover and selected states. Sparklines, heatmap cells, tiny bars, and map marks should expose a visible tooltip or detail readout with entity, period, value, unit, and any relevant caveat. Use forgiving hit targets so small marks are not frustrating to inspect.

Axis labels, year ticks, legends, and units must stay visibly attached to the chart area or matrix cell they describe. In sparkline tables, small multiples, and dense rows, prefer per-cell mini axes, directly labeled endpoints, or column/header guides that align with the marks. Avoid detached footer labels that could feel random or apply to multiple unrelated charts.

Do not borrow dashboard features for non-dashboard pieces by reflex. Summary stats, heavy control rails, and always-visible methods panels should be treated as optional utilities, not baseline structure.

Do not scatter explanation across multiple small UI fragments when one good disclosure surface would do. If an info modal, footnote, or “how to read this” pattern exists, let it carry the guidance instead of duplicating the same message in chips, legends, or secondary buttons.

## Scrollytelling

Use when the story benefits from a guided sequence. Favor sections, progressive reveal, sticky charts, and restrained transitions.

When a sticky chart compares two states, let scroll progress drive the visual interpolation whenever possible. The chart should show the prior state before the card arrives, the new state when the card is fully in view, and valid in-between geometry during the scroll. This is especially important for bars, columns, stacked segments, map extrusions, and other area/height encodings where a sudden color swap can misstate the relationship.

## Studio

Use when the brief allows expressive form. Favor memorable composition, richer interaction, and bespoke layout while preserving legibility.

For archives, catalogs, shelves, and collection-style datasets, Studio can mean a browseable visual field rather than a static art poster. Let grouping, density, clustering, and reveal behavior carry some of the navigation burden so the piece does not default to sidebar-plus-grid utility UI.

For studio or data-art-led pieces, tuck “how to read this” guidance, methods, and caveats behind light disclosure patterns by default. Use inline exposition only when immediate comprehension would otherwise break.

Prefer one well-placed disclosure entry point over several competing ones. Repeated info buttons, helper chips, and duplicated explainer labels usually make the composition feel less intentional.

## Aesthetic Cues

Use these as concrete starting points when optioning style direction. Treat them as compositional and material cues, not as skin-deep themes.

### Swiss Editorial

Use for information-dense work that should feel exacting, composed, and highly legible without becoming corporate-generic.

Color cue: black, paper white, one disciplined accent, and strong tonal hierarchy over decorative color.

### Minimal Brutalist

Use for strong hierarchy, sharp grids, sparse copy, and one intense accent. Good for explorers that should feel decisive rather than decorative.

Color cue: off-black, paper white, concrete gray, and one vivid accent such as signal orange, acid yellow, or saturated red.

### Bauhaus Geometric

Use for modular compositions that should feel playful, structural, and confident while still staying ordered.

Color cue: primary-color accents against creamless neutrals or a dark field.

### Constructivist Signal

Use for confrontational or high-energy narratives where diagonals, urgency, and poster logic can carry momentum.

Color cue: black, red, cream, and occasional industrial orange.

### Editorial Poster

Use for narrative-first pieces, cultural datasets, and situations where scale, cropping, and typography should do a lot of the emotional work.

Color cue: high-contrast neutrals plus one or two print-like accents that feel chosen, not automated.

### Newspaper Broadsheet

Use for explanatory reporting, timelines, and evidence-heavy stories that benefit from columns, notes, and an investigative rhythm.

Color cue: ink-heavy neutrals, muted supporting color, and small emphatic highlights.

### Archival Modernist

Use for catalog, library, specimen, and collection interfaces that should feel curated, meticulous, and calm rather than productized.

Color cue: warm neutrals, index-card whites, muted olive or rust, and disciplined highlight colors.

### Field Guide Naturalist

Use for specimen sets, geography, ecology, or cultural catalogs where close looking and observational annotation matter.

Color cue: bark, moss, mineral, bone, and one brighter species-marker accent.

### Diagrammatic Atlas

Use when relationships, routes, taxonomies, or systems matter more than dramatic mood.

Color cue: quiet base tones with route-like or category-like accents that stay systematic.

### Civic Wayfinding

Use for public-data explorers and orientation-heavy experiences that need confidence and navigational clarity.

Color cue: transit-inspired route colors, high-contrast neutrals, and obvious state coding.

### Art Deco Machine

Use for glamour, symmetry, and machine-age polish without drifting into gaudy luxury UI.

Color cue: black, cream, brass, deep green, burgundy, or cobalt used sparingly.

### Studio Gloss

Use when the work should feel lush, cinematic, or digitally polished without becoming a generic startup dashboard.

Color cue: deep fields, luminous highlight color, and a small number of saturated interactive states.

### Gallery Label

Use when the object, image, or record itself should dominate and the interface should behave like a careful exhibition frame.

Color cue: gallery whites, charcoal, soft mineral grays, and a restrained accent if needed.

### Luxury Minimal

Use for fashion, cultural, or premium-feeling collections where restraint, spacing, and material contrast need to do the heavy lifting.

Color cue: near-black, stone, ivory, oxblood, bronze, or one couture-like accent.

### Diagrammatic Lab

Use for scientific, analytical, or method-forward work where measurement and annotation must feel precise.

Color cue: graphite, cool whites, lab greens, instrument blues, or warning orange used with discipline.

### Terminal Modern

Use for live systems, logs, rankings, or machine-adjacent datasets where operator energy helps the piece.

Color cue: dark field with restrained signal tones such as amber, green, red, or icy white.

### Risograph Collage

Use for cultural, human, or community-driven stories that benefit from print warmth, layering, and a less sterile surface.

Color cue: punchy ink-like combinations such as fluorescent orange, ultramarine, sunflower, and black.

### Y2K Chrome

Use for pop-digital, entertainment, or nostalgia-rich work that can support gloss, translucency, and bright synthetic color.

Color cue: chrome silver, translucent white, hot pink, electric blue, lime, or orange in high contrast.

### Neo-Tokyo Pop

Use for media-rich, anime-adjacent, or nightlife-coded datasets that should feel electric, compact, and urban.

Color cue: black, neon orange, magenta, acid green, or bright cyan with poster-like intensity.

### Playful Pop

Use when the source material is energetic, youth-oriented, or visually loud. Let grouping, color blocks, and rhythm carry the experience.

Color cue: bright accents with real tension, such as orange against charcoal or coral against cream, instead of default cool blues.

### Club Flyer Maximalist

Use when the piece should feel subcultural, loud, compressed, and full of momentum rather than orderly and polite.

Color cue: hot contrasts, dark grounds, metallic notes, and selective overprinting energy.

### Pastel Dreamscape

Use when softness, fantasy, or emotional atmosphere matters more than hard-edged authority.

Color cue: misty lavenders, peach, cloud blue, pale mint, and one clearer anchor hue to prevent washout.

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
