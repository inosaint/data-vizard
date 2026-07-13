# Migration Pulse Research

## Selected Direction

`Child Reed Pond + Bird Photos`, revised from the earlier map/pulse direction after visual review and a child-audience critic pass.

## Claim Boundary

The piece can say:

- For these 10 selected wetland, migrant, winter-visitor, or seasonal species, January is the busiest month in the source records and June is the quietest.
- A 10-point child-facing scale can compare months without exposing raw record counts.
- Selecting a month can show which species are closest to their own monthly high.
- The current chart shows a seasonal observation pattern, not measured migration traffic.

The piece should not say:

- Birds are flying along routes shown on the map.
- Pulse size equals actual abundance.
- Areas without pulses lack migrant birds.
- The layer is live, radar-derived, or equivalent to BirdCast migration traffic rate.

## Evidence Summary

Curated evidence file: `data/wetland-birds-bengaluru/curated/migration-pulse-evidence.json`

GBIF occurrence query:

- Country: India
- Geometry: Bengaluru-area bounding box, `77.35-77.90 E`, `12.75-13.25 N`
- Years: `2014-2026`
- Basis of record: `HUMAN_OBSERVATION`
- Coordinate filters: `hasCoordinate=true`, `hasGeospatialIssue=false`
- Species: 10 selected checklist species with migrant, winter-visitor, or seasonal-wetland rationale

Aggregate GBIF occurrence records for selected species: `148,920`

Monthly totals:

| Month | Records |
| --- | ---: |
| Jan | 20,335 |
| Feb | 18,371 |
| Mar | 12,727 |
| Apr | 8,546 |
| May | 6,933 |
| Jun | 6,620 |
| Jul | 7,595 |
| Aug | 8,826 |
| Sep | 10,683 |
| Oct | 15,455 |
| Nov | 16,504 |
| Dec | 16,325 |

## Top Wetland / Habitat Areas

Representative coordinates come from one matching GBIF occurrence per locality, not official lake boundary centroids.

| Area | Records | Representative lat | Representative lon |
| --- | ---: | ---: | ---: |
| Saul Kere / Sowl Kere | 14,297 | 12.91838 | 77.68036 |
| Hoskote / Hosakote Kere | 11,593 | 13.06802 | 77.76926 |
| Hessaraghatta Kere | 7,140 | 13.14865 | 77.48790 |
| Doddanekundi Kere | 5,384 | 12.97562 | 77.68783 |
| Jakkur Kere | 5,204 | 13.08422 | 77.61144 |
| GKVK Campus | 4,962 | 13.08573 | 77.57133 |
| Muthanallur Kere | 4,945 | 12.81984 | 77.72672 |
| Varthur Kere | 3,815 | 12.94887 | 77.73798 |

## Sources

- BirdCast Live Maps: `https://birdcast.org/migration-tools/live-migration-maps/`
- User-provided `boundary.geojson`, copied into `data/wetland-birds-bengaluru/curated/bengaluru-local-area-boundary.geojson` during map exploration. It is retained but not rendered in the current chart.
- OpenStreetMap Bengaluru administrative boundary relation: `https://www.openstreetmap.org/relation/7902476`
- OpenStreetMap/Nominatim boundary response used to materialize the project-local GeoJSON: `https://nominatim.openstreetmap.org/search?format=jsonv2&city=Bengaluru&state=Karnataka&country=India&polygon_geojson=1&addressdetails=1&limit=10`
- geoBoundaries India ADM2 boundary metadata and downloads, retained as a rejected district-boundary reference: `https://www.geoboundaries.org/api/current/gbOpen/IND/ADM2/`
- GBIF EOD - eBird Observation Dataset: `https://www.gbif.org/dataset/4fa7b334-ce0d-4e88-aaae-2e0c138d049e`
- GBIF iNaturalist Research-grade Observations: `https://www.gbif.org/dataset/50c9509d-22c7-4a22-a47d-8c48425ef4a7`
- GBIF India Biodiversity Portal publication grade dataset: `https://www.gbif.org/dataset/c6b86c40-ff71-4e5e-902c-111f400d0d56`
- List of birds of Bengaluru: `https://en.wikipedia.org/wiki/List_of_birds_of_Bengaluru`
- Madiwala Lake context: `https://en.wikipedia.org/wiki/Madiwala_Lake`
- Bengaluru lakes context and cited urban-lake bird literature: `https://en.wikipedia.org/wiki/Lakes_in_Bengaluru`

## Design Implications

- Use a relative monthly bar chart instead of the map; the repeated locality set makes timing clearer than geography.
- Use the aggregate monthly evidence internally and present bars relative to January rather than raw totals.
- Highlight the seasonal shape: January carries the highest selected-record total, while June carries the lowest.
- Use Wikipedia/Wikimedia bird photos and Wikipedia links from `species-wikipedia.json` for recognition and follow-up reading.
- Keep caveats in the source/method disclosure: source-linked observations are not bird population counts, radar, routes, or abundance.
- Use no arrows, tracks, or directional flow lines.
- Let BirdCast inspire luminous nocturnal pacing, not its literal MTR, radar, or flight-direction semantics.
