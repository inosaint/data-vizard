# Enriched Curator Handoff

## Datasets

- Tourist arrivals raw source: `data/pacific-climate-change-indicators/raw/spc_df_climate_change_tourist_arrivals_filtered_2026-06-29.csv`
- Tourist arrivals curated table: `data/pacific-climate-change-indicators/curated/tourist_arrivals_annual.csv`
- Precipitation anomalies raw source: `data/pacific-climate-change-indicators/raw/spc_df_climate_change_precipitation_anomalies_filtered_2026-06-29.csv`
- Precipitation anomalies curated table: `data/pacific-climate-change-indicators/curated/precipitation_anomalies_annual.csv`
- Joined analysis table: `data/pacific-climate-change-indicators/curated/tourist_arrivals_with_precipitation_anomalies.csv`
- Precipitation data dictionary: `data/pacific-climate-change-indicators/curated/precipitation_anomalies_data_dictionary.md`

## Fitness

The precipitation anomalies dataset is a strong context layer for the tourist-arrivals data because every tourist-arrivals country-year has a matching precipitation anomaly. It supports co-visualization of tourism trends with annual rainfall anomaly context.

## Caveats

- The precipitation data is annual and national, so it cannot explain specific storm events, travel restrictions, local destination impacts, or monthly/seasonal tourism behavior.
- The joined data should not be framed causally. It can show co-occurrence and context, not proof that precipitation anomalies drove tourist-arrival changes.
- The 2020 tourism collapse is broad across destinations while precipitation anomalies vary by country, so the rainfall layer is better as environmental context than as an explanation for the pandemic-era shock.
- Tourist-arrivals coverage remains uneven by country even though precipitation coverage is complete for the tourist-arrivals rows.

## Suggested Analyst Questions

- Does the rainfall-anomaly context change the best story direction, or mainly add a responsible environmental backdrop?
- Are the strongest tourist-arrivals changes aligned with especially wet or dry years?
- Should the final visualization show precipitation anomalies as a heatmap or line layer beneath tourism trends?
- Which claims must explicitly say "context" rather than "cause"?
