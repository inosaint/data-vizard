# Public Visualization Inspiration

## Sources Reviewed

- Audubon Bird Migration Explorer: https://explorer.audubon.org/home
- BirdCast Live Migration Maps: https://birdcast.org/migration-tools/live-migration-maps/
- eBird Status and Trends: https://science.ebird.org/en/status-and-trends
- Macaulay Library: https://www.macaulaylibrary.org/
- Macaulay/eBird Media Search: https://search.macaulaylibrary.org/catalog
- OneZoom Tree of Life Explorer: https://www.onezoom.org/life.html
- Biodiversity Heritage Library: https://www.biodiversitylibrary.org/
- Science Museum Group Never Been Seen: https://thesciencemuseum.github.io/never-been-seen/

## What Carries Over

- Audubon and BirdCast show that motion can be beautiful when the data actually supports movement. For this checklist, motion should feel like focus, drift, or reveal, not migration.
- After the user selected a BirdCast-adjacent direction, GBIF/eBird occurrence data was added so the motion layer can encode seasonal sightings by month and locality. This still should not copy BirdCast's radar semantics, arrows, migration traffic rate, or live-data claim.
- eBird Status and Trends is a useful anti-reference: abundance maps, trends, and weekly animations are powerful, but our dataset does not contain the fields needed for those claims.
- Macaulay Library and its media search support the idea of a generous image-first archive where browsing can happen before filtering.
- OneZoom suggests zoomable nested navigation as an expressive structure, but we should not imply a phylogenetic tree unless taxonomy data is added.
- Biodiversity Heritage Library suggests a field-plate, historic natural-history, and open-archive mood: public knowledge with sparse, respectful framing.
- Never Been Seen suggests discovery as an interaction model: partial concealment, reveal, and the pleasure of noticing one record at a time.

## Revised Direction Ideas

### Candidate A: Generous Wetland Archive

Inspired by Macaulay Library and generous collection interfaces. All 50 species appear immediately as an uneven image field, grouped by checklist category with very light labels. Interaction is local focus and attribution reveal.

### Candidate B: Hidden Plate Reveal

Inspired by Never Been Seen. The first view is a quiet plate of softened or masked bird image apertures. Hover, tap, or keyboard focus reveals one species sharply with name, category, Wikipedia link, and Commons attribution.

### Candidate C: Checklist Canopy

Inspired by OneZoom, but not presented as taxonomy. The five checklist categories become branching paths or ribs; each species is a leaf-like image node. The interaction is pan/zoom or staged focus through branches.

### Candidate D: Public Field Book

Inspired by Biodiversity Heritage Library. The piece feels like a contemporary natural-history spread: image fragments, source links, tiny license marks, and category marginalia. It foregrounds public-image provenance without becoming a database UI.

### Candidate E: Radar Without Routes

Inspired by BirdCast's luminous, nocturnal map language, but adapted carefully. Species become equal-weight pulses in category clusters; movement is ambient and non-directional so it does not imply real migration paths or counts.

## Critique Notes Applied

- Do not borrow eBird or BirdCast's abundance, trend, weekly animation, or movement semantics.
- Avoid a search-first media catalog shell unless the final concept explicitly chooses utility over data-art.
- Keep every species reachable through the primary visual field.
- Keep source and license information available, but not first-load dominant.
