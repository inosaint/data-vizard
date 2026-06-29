# Curator Handoff

## Dataset

- Raw source snapshot: `data/pacific-climate-change-indicators/raw/spc_df_climate_change_tourist_arrivals_filtered_2026-06-29.csv`
- Curated analysis table: `data/pacific-climate-change-indicators/curated/tourist_arrivals_annual.csv`
- Data dictionary: `data/pacific-climate-change-indicators/curated/data_dictionary.md`

## Fitness

The dataset can support a visualization of annual tourist arrivals by Pacific country or territory, including time trends, pandemic-era disruption and recovery where coverage exists, and differences in raw arrival scale.

## Caveats

- Coverage is uneven across countries and years. New Caledonia has a complete 1995-2024 series, while several places have short or sparse coverage.
- Missing years are missing data, not zero arrivals.
- Raw arrivals are not population-adjusted or capacity-adjusted, so direct country rankings can favor larger or more connected destinations.
- The supplied file does not include population, resident counts, accommodation capacity, flights, cruise arrivals, revenue, or visitor origin.
- The user listed possible contextual datasets but explicitly instructed not to fetch them. Treat those sources as user-supplied-only future enrichments.

## Suggested Analyst Questions

- Which countries or territories show the clearest long-run growth before 2020?
- How visible is the 2020 tourism shock, and which places show recovery by 2024?
- Which series have enough coverage for responsible country-to-country comparison?
- Does Fiji dominate the raw-arrivals scale enough to require faceting, indexing, or separate views?
- Would a per-capita or indexed-to-baseline view tell a fairer story than raw totals alone?

## Potential User-Supplied Enrichment Options

- Population growth: could help contextualize arrivals against demographic scale, but is not the same as population totals.
- Mean surface or sea-surface temperature anomalies, rainfall anomalies, sea-level anomalies, or disaster impacts: could shift the project toward climate exposure and tourism vulnerability.
- Environmental taxes, greenhouse-gas emissions per capita, renewable-energy share, power generation, or fisheries measures: could support a policy or sustainability context.
- Crop yield, livestock yield, Red List Index, water services, health, coastline, or meteorological network data: likely useful only if the story broadens beyond tourist arrivals.
