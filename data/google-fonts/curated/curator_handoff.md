# Google Fonts Curator Handoff

## Source

- Source repository: `https://github.com/hasinhayder/google-fonts`
- Local raw snapshot: `data/google-fonts/raw/google-fonts-main.zip`
- Source README snapshot: `data/google-fonts/raw/source-README.md`
- Repository update timestamp from `updated.json`: `2026-04-10T17:53:56Z`
- Observed license in source repo: MIT

## Dataset Shape

- Artifact mode recommendation: `hybrid`
- Primary curated table: `data/google-fonts/curated/font_catalog.csv`
- Supporting summaries:
  - `data/google-fonts/curated/category_summary.csv`
  - `data/google-fonts/curated/subset_summary.csv`
  - `data/google-fonts/curated/variant_distribution.csv`
  - `data/google-fonts/curated/source_snapshot.json`
- Row count: 1,938 font families
- Category count: 5
- Subset count: 181
- Grain: one row per font family

## Compact Data Dictionary

- `family`: display name of the font family
- `slug`: lowercase file-safe identifier from the source repo
- `category`: one of `display`, `handwriting`, `monospace`, `sans-serif`, `serif`
- `subset_count`: number of supported script/language subsets
- `variant_count`: number of listed variants such as weights and italics
- `subsets`: pipe-delimited subset list
- `variants`: pipe-delimited variant list
- `version`: source version string
- `last_modified`: date string from the source metadata

## Transformation Log

1. Downloaded the source repository zip and preserved it under `data/google-fonts/raw/`.
2. Flattened the per-font JSON files in `fonts/` into one analysis-ready CSV with one row per family.
3. Derived `subset_count` and `variant_count` to support ranking, distribution, and complexity comparisons.
4. Built category and subset summary tables for faster analytical and visual prototyping.

## Fitness Summary

This dataset is strong for showing the structure of the Google Fonts catalog: category balance, script coverage, breadth versus specialization, and font-family complexity. It is weaker for anything about real-world usage, popularity, download behavior, or designer adoption because the source is a catalog index, not behavioral data.

## Caveats

- The dataset is a structural index, not a usage dataset.
- Category labels are source-provided and appear mutually exclusive per family in this snapshot.
- `variant_count` reflects listed variants, not variable-font axis richness.
- Script coverage is best interpreted as support presence, not linguistic quality or market importance.
- A strong aggregate story should avoid implying Google Fonts strategy or user demand without external evidence.

## Good Analytical Questions

- Which categories dominate the catalog, and which categories carry the most weight/italic complexity?
- Which subsets have broad support across categories, and which reveal a thin long tail?
- Which font families act as multilingual workhorses versus single-script specialists?
- Does the catalog feel more like a broad global system or a Latin-first library with selected multilingual depth?
