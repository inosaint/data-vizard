# Analyst Story Candidates With Precipitation Context

Curated data used:

- `data/pacific-climate-change-indicators/curated/tourist_arrivals_annual.csv`
- `data/pacific-climate-change-indicators/curated/precipitation_anomalies_annual.csv`
- `data/pacific-climate-change-indicators/curated/tourist_arrivals_with_precipitation_anomalies.csv`

## Evidence Summary

- The precipitation anomalies file contains 1,034 rows across 22 geographies, with annual data from 1979 to 2025.
- Every tourist-arrivals observation has a matching precipitation anomaly, producing a 229-row joined table across 13 geographies.
- Among joined tourist-arrivals rows, precipitation anomalies range from -29.7 mm to +50.3 mm.
- The raw correlation between arrivals and precipitation anomaly across all joined rows is -0.013, which does not support a simple relationship.
- Within-country correlations are mixed and should not be used as causal evidence.
- Among countries with 2019 and 2020 tourist-arrivals data, arrivals fell between 67.8% and 87.8%, while rainfall anomalies moved in different directions across countries.

## Candidate A: Tourism Shock, Climate Backdrop

- Claim or question: The 2020 tourism collapse was shared across reported destinations, while precipitation anomalies provide environmental context rather than a direct explanation.
- Evidence: Arrivals fell 67.8% to 87.8% from 2019 to 2020 where both years exist. Rainfall anomalies varied across the same countries, from dry shifts in some places to wetter years in others.
- Why it matters: This keeps the clearest tourism story while respecting the climate dataset’s limits.
- Caveats and uncertainty: This should not imply precipitation caused the tourism shock.
- Suggested chart forms: Indexed tourism lines with a small precipitation-anomaly heatmap below; 2019 and 2020 annotations.
- Additional data that would strengthen it: Border closure dates, flight capacity, visitor origin markets, or disaster-event data.

## Candidate B: Rainfall Volatility Beside Tourism Recovery

- Claim or question: Tourist-arrivals recovery after 2020 happened against a backdrop of wet and dry anomaly years, but the recovery pattern is not reducible to rainfall.
- Evidence: Fiji recovered to 928,938 arrivals by 2024, about 4.1% below 2019, while 2022 precipitation anomaly was +12.7 mm. Other 2022 recovery positions varied widely, including French Polynesia at 7.3% below 2019 and Northern Mariana Islands at 80.2% below 2019.
- Why it matters: This supports a richer recovery view without overstating a single climate driver.
- Caveats and uncertainty: 2023-2024 tourist-arrivals coverage is sparse, and annual precipitation anomalies may miss tourism-season conditions.
- Suggested chart forms: Recovery slope chart plus precipitation anomaly strips; country small multiples.
- Additional data that would strengthen it: Monthly rainfall, reopening dates, airlift data, or destination-level tourism infrastructure data.

## Candidate C: Climate Context Dashboard

- Claim or question: The most honest enriched artifact is an exploratory view that lets readers compare tourism arrivals and precipitation anomalies side by side.
- Evidence: The join is complete for all 229 tourist-arrivals rows, but the statistical relationship is weak overall. This makes the dataset fit for comparison and context, not a single-cause story.
- Why it matters: This is transparent, flexible, and workshop-friendly: readers can inspect both systems while the visualization prevents overclaiming.
- Caveats and uncertainty: The story may feel less dramatic unless the narrative anchors it around the tourism shock and recovery.
- Suggested chart forms: Coordinated country selector; arrivals line chart; precipitation anomaly heatmap; coverage notes.
- Additional data that would strengthen it: Disaster impacts or tourism revenue for a more outcome-focused climate vulnerability story.

## Candidate D: Keep Rainfall As A Caveat Layer

- Claim or question: The precipitation dataset is useful mainly as a visible caveat: climate context matters, but this particular enrichment does not explain tourist-arrivals changes by itself.
- Evidence: Overall arrivals/rainfall-anomaly correlation is -0.013, and within-country patterns are mixed. The 2020 drop is broad despite varied precipitation anomalies.
- Why it matters: This foregrounds responsible interpretation and could be powerful in a data-literacy setting.
- Caveats and uncertainty: It is more methodological than narrative and may be less engaging for a public-facing artifact.
- Suggested chart forms: Story panels that contrast "what the data shows" with "what it cannot prove"; compact chart pairings.
- Additional data that would strengthen it: A disaster-events dataset or tourism policy timeline.
