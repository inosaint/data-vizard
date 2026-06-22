# Data Curator Handoff: India Literacy Choropleth

## Source

- Metric: Literacy rate by Indian state and union territory.
- Data source: NSO 2017-18 household social consumption survey, as compiled in the public literacy-rate table for Indian states and union territories.
- Map source: Highcharts Maps `countries/in/custom/in-all-disputed.topo.json`.
- Artifact data format: Inline JavaScript object keyed to the map's `hc-key` values.

## Data Dictionary

| Field | Type | Unit | Notes |
| --- | --- | --- | --- |
| `hc-key` | string | none | Region key from Highcharts map geometry. |
| `name` | string | none | State or union territory display name from map geometry. |
| `literacyRate` | number | percent | Estimated literacy rate for people aged seven and older. |

## Transformations

- Replaced synthetic access-index values with NSO 2017-18 literacy-rate estimates.
- Matched source region names to Highcharts geometry keys.
- Used NSO 2017-18 instead of PLFS 2024 because this map geometry keeps Dadra and Nagar Haveli and Daman and Diu separate and does not expose Ladakh as a separate feature.
- Kept Jammu and Kashmir as one mapped feature to match the available geometry.

## Caveats

- Values are estimates, not Census 2011 counts.
- Current administrative boundaries have changed since some map/data conventions, especially for Jammu and Kashmir, Ladakh, and Dadra and Nagar Haveli and Daman and Diu.
- The map supports comparison of literacy rates; it should not be read as showing causes of literacy differences.

## Handoff To Analyst

Explore regional variation, outliers, and whether the map should emphasize highest/lowest literacy rates or broad spatial gradients.
