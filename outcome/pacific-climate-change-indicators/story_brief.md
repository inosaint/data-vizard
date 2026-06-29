# Story Brief: Pacific Tourism And Rainfall Context

## Selected Direction

- Analyst direction: Climate Context Dashboard.
- Narrative frame: Comparative.
- Working audience: general workshop or public-interest audience.
- Core posture: side-by-side comparison, with rainfall anomalies treated as context rather than cause.

## Opening Question

How do tourist arrivals and rainfall anomalies vary across Pacific destinations, and where does the comparison change what we should say?

## Main Observation

The tourism data shows a sharp regional disruption around 2020, while the rainfall-anomaly layer varies by country and year. The joined data is useful for comparison, but it does not support a simple claim that rainfall anomalies explain tourist-arrival changes.

## Evidence Sequence

1. Start with country coverage: 13 tourist-arrivals geographies and 229 tourist-arrivals observations.
2. Show the complete join: every tourist-arrivals observation has a matching precipitation anomaly.
3. Let readers compare countries: arrivals move on different scales, while rainfall anomalies swing between wet and dry years.
4. Anchor the tourism shock: among countries with 2019 and 2020 data, arrivals fell between 67.8% and 87.8%.
5. Place the caveat beside the comparison: the overall arrivals/rainfall-anomaly correlation across joined rows is -0.013, so the rainfall layer should be read as climate context.

## Title Options

1. Pacific Tourism, Seen Beside Rainfall
2. Tourist Arrivals And Rainfall Anomalies Across The Pacific
3. Compare The Tourism Shock With A Wetter-Or-Drier Backdrop

## Subtitle

Annual tourist arrivals are paired with precipitation anomalies for 13 Pacific countries and territories. The rainfall layer adds climate context, not a causal explanation.

## Section Sequence

1. Coverage: which places and years can be compared.
2. Tourism: how arrivals changed by country, with the 2020 drop visible.
3. Rainfall: where annual precipitation anomalies were wetter or drier than the baseline.
4. Joined view: country-by-country comparison of arrivals and rainfall context.
5. Caveat: similar timing does not prove rainfall drove tourism change.

## Annotation Priorities

- Label the 2019-2020 arrival drop for countries where both years exist.
- Mark Fiji as a high-volume recovery example without making it the only story.
- Keep sparse tourist-arrivals coverage visible for countries with short series.
- Show the rainfall-anomaly unit as millimetres and include standard error in detail text if space allows.

## Required Caveat Language

Annual precipitation anomalies are shown as climate context. They do not prove why tourist arrivals rose or fell.

## Tooltip Language

- Tourist arrivals: `{country}, {year}: {arrivals} arrivals`.
- Rainfall anomaly: `{country}, {year}: {precipitation_anomaly_mm} mm precipitation anomaly; standard error {standard_error_mm} mm`.
- Joined detail: `In {year}, {country} recorded {arrivals} tourist arrivals and a {precipitation_anomaly_mm} mm precipitation anomaly.`

## Designer Handoff

Design should make comparison easy before making interpretation dramatic. Prioritize country selection, aligned timelines, visible missingness, and careful caveat placement. A dashboard or comparison-heavy editorial layout fits the chosen frame better than a pure scrollytelling sequence.
