# Curator Handoff: Anime Streaming Landscape

## Source

- Local CSV supplied by user: `/Users/trine/Downloads/anime_dataset.csv`
- Raw snapshot stored at `data/anime-streaming-landscape/raw/anime_dataset.csv`

## Dataset Profile

- Format: CSV
- Rows: 206
- Columns: 24 source columns, plus 5 derived columns in the curated file
- Time coverage: 1986 to 2026 in the `year` field
- Artifact mode: `hybrid`
  A ranked overview works, but the title-level records are also useful for browsing.

## Curated Output

- Curated table: `data/anime-streaming-landscape/curated/anime_catalog_curated.csv`
- Added fields:
  - `decade`
  - `primary_genre`
  - `platform_list`
  - `platform_count_verified`
  - `is_currently_airing`

## Compact Data Dictionary

- `anime_id`: unique row identifier in this file
- `title`: title string
- `anime_type`: broad franchise or format label
- `episodes`: episode count
- `status`: release status
- `year`: release year used for time grouping
- `rating`: title rating score when present
- `popularity`: popularity figure supplied by source
- `genres`: pipe-delimited genre list
- `streaming_platforms_count`: source-provided platform count
- `platform_count_verified`: count recomputed from non-empty platform URL columns
- `platform_list`: human-readable list of available platforms
- `poster_url`: poster image URL

## Missingness And Quality Notes

- `rating` is missing for 2 rows.
- `aired_end` is blank for 10 rows, mostly ongoing or currently airing series.
- `disney_plus`, `pokemon_tv`, `hbo_max`, `hidive`, and `amazon_prime` are sparse.
- `anime_id` is unique across all 206 rows.
- There is 1 repeated title across adjacent years: `Berserk` appears for both 2016 and 2017 as separate entries.

## Important Caveats

- The `anime_type` field mixes true formats with audience labels and broad tags such as `Shonen`, `Seinen`, `Movie`, and `Original`, so it should be treated as a loose grouping field rather than a strict taxonomy.
- The `popularity` field appears heavily rounded or synthetic. Only 55 distinct values appear across 206 rows, and many values repeat often. It is usable for rough tiers, not precise rank claims.
- The `rating` field is also heavily bucketed. It supports broad comparison, but ties and tiny differences should not be framed as meaningful.
- The dataset is not a complete anime market census. It looks more like a curated catalog of recognizable titles and seasons.
- Several rows are season-level entries rather than franchise-level entries, so franchise comparisons can overcount long-running series with many seasons.

## Transformation Log

1. Copied the source CSV into the project raw folder without altering source fields.
2. Derived `decade` from `year`.
3. Derived `primary_genre` from the first genre token.
4. Recomputed platform count from non-empty platform URL fields as `platform_count_verified`.
5. Built readable `platform_list` and `is_currently_airing` helper fields for analysis and design.

## What This Data Can Support

- How platform coverage differs across title types and eras
- Which genres and title groups dominate the catalog
- Which highly rated titles are also broadly distributed
- How the catalog skews toward recent decades and multi-season franchises

## What It Cannot Support Safely

- Market share claims for any streaming platform
- Definitive all-time anime rankings
- Audience demand over time
- Causal claims about why a title is on more or fewer services

## Questions Worth Exploring First

1. Does the catalog tell a platform-distribution story, a genre-and-era story, or a best-rated cross-platform recommendation story?
2. Are newer titles spread across fewer services than older canon titles?
3. Which high-rated titles are easiest to watch because they appear on multiple platforms?
