# Curator Handoff

## Dataset

- Source file: `data/anime-streaming-landscape/raw/anime_dataset.csv`
- Curated file: `data/anime-streaming-landscape/curated/anime_dataset_curated.csv`
- Rows: 206
- Columns: 23

## Cleaning Summary

- Dropped `anime_type` from the curated dataset because the values mix different semantic ideas and would weaken a data-art reading.
- Preserved all other columns and original values as-is.
- Retained platform URL columns because their presence is analytically useful as availability flags.

## Compact Data Dictionary

- `anime_id`: unique row identifier
- `title`: anime title
- `synopsis`: description text
- `episodes`: episode count
- `status`: release status
- `aired_start`, `aired_end`: original air dates as strings
- `year`: start year
- `rating`: numeric audience-style rating with 2 missing values
- `popularity`: raw popularity measure
- `genres`: pipe-delimited genre tags
- `genres_count`: number of listed genres
- Platform columns: `netflix`, `crunchyroll`, `amazon_prime`, `hulu`, `funimation`, `disney_plus`, `hbo_max`, `hidive`, `pokemon_tv`
- `streaming_platforms_count`: count of non-empty platform columns
- `poster_url`: artwork reference URL

## Caveats

- Platform fields appear to represent title presence, not standardized region-specific licensing rights.
- `popularity` is not normalized, so it is best used comparatively within this dataset rather than as a market-share claim.
- The dataset spans 1986 to 2026 but is heavily concentrated in the 2010s and 2020s.
- There are 3 duplicate titles, but no duplicate `anime_id` values.
- `aired_end` is blank for 10 entries, which likely corresponds to titles still airing.

## Questions Worth Exploring

- How does streaming overlap change across release years?
- Do higher-rated titles cluster around higher platform availability or certain genre densities?
- Can popularity, rating, and genre density form a more expressive visual field than platform-by-platform comparison?
