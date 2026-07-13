# Wetland Birds Bengaluru Curated Data

## Files

- `species-wikipedia.json`: 50 bird species records grouped by checklist category and enriched with Wikipedia/Wikimedia Commons page image metadata.
- `migration-pulse-evidence.json`: GBIF-backed seasonal sighting evidence for selected migrant, winter-visitor, or seasonal wetland species in a Bengaluru-area bounding box.
- `bengaluru-local-area-boundary.geojson`: user-provided Bengaluru-area boundary layer with 101 local-area polygons, retained as a source artifact. It is not rendered by the current chart.
- `bengaluru-city-boundary-osm.geojson`: OpenStreetMap `Bengaluru` city administrative boundary retained as a superseded reference. It is not used by the current artifact.
- `bengaluru-boundary-geoboundaries.geojson`: geoBoundaries `Bangalore` ADM2 district boundary retained as a superseded reference. It is not used by the current artifact.
- `bengaluru-osm-map.geojson`: Project-local OpenStreetMap display extract kept for reference. It is not used by the current artifact.

## Source Boundary

This curated project output does not read from, copy from, or link to files inside `/Users/trine/Documents/Codex/wetland birds blr/`. It also ignores local image paths that appeared in earlier JSON metadata. Bird images are sourced from Wikipedia page images and Wikimedia Commons file metadata.

## Shape

Each record includes:

- `id`: project-local slug.
- `category`: one of `Aquatic Birds`, `Wading Birds`, `Rail Birds`, `Birds of Prey`, or `Other Common Birds`.
- `common_name`: display name used by the artifact.
- `wikipedia`: page URL, page title, image URL, Commons file page, author, credit, and license fields.

## Data Fitness

The data supports a record-by-record species explorer, a category composition view, and image-led comparison across the 50 listed species.

The checklist data alone does not support abundance, population trend, seasonality, site-by-site comparison, migration timing, habitat preference by lake, or conservation-status claims.

The added `migration-pulse-evidence.json` supports a narrower claim: public seasonal sighting records for selected species peak around particular Bengaluru wetland and habitat localities. It still does not support live migration, flight routes, radar-derived traffic, true abundance, or absence claims.

## Curation Notes

- Wikipedia/Wikimedia image metadata was resolved through public API calls.
- All 50 records currently have a usable remote image URL and a resolved license string.
- Category counts are: Wading Birds 16, Other Common Birds 12, Aquatic Birds 11, Birds of Prey 7, Rail Birds 4.
- Image choices reflect Wikipedia page images, not a locally curated photographic standard.
- Seasonal evidence uses GBIF occurrence facets accessed on 2026-07-07, with most records sourced from the EOD - eBird Observation Dataset.
- The current visualization does not render a map. It uses `migration-pulse-evidence.json` to build a relative monthly bar chart and `species-wikipedia.json` to show Wikipedia/Wikimedia bird photos in the month panel.
