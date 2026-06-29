# Analyst Story Candidates

Curated data used: `data/pacific-climate-change-indicators/curated/tourist_arrivals_annual.csv`

## Candidate A: The Tourism Shock

- Claim or question: Tourist arrivals across reported Pacific destinations fell sharply in 2020, with the depth and speed of recovery varying by place.
- Evidence: Among countries with both 2019 and 2020 data, arrivals fell between 67.8% and 87.8%. Tonga, Samoa, New Caledonia, Fiji, Northern Mariana Islands, and Papua New Guinea all fell more than 80%. French Polynesia and Vanuatu also fell about two-thirds.
- Why it matters: This creates a clear before-after story and a natural structure for showing disruption and recovery.
- Caveats and uncertainty: 2023-2024 coverage is sparse, so late recovery can only be shown for a small subset.
- Suggested chart forms: Indexed line chart with 2019 as baseline; small multiples by country; annotated 2020 collapse.
- Additional data that would strengthen it: Border reopening dates, visitor origin markets, airline capacity, or tourism revenue.

## Candidate B: Fiji's Visible Recovery

- Claim or question: Fiji dominates the raw-arrivals scale and is one of the clearest recovery stories in the supplied data.
- Evidence: Fiji peaked at 1,058,000 arrivals in 2018, fell from 969,000 in 2019 to 168,200 in 2020, then returned to 928,938 by 2024, about 4.1% below its 2019 level.
- Why it matters: Fiji gives the visualization a strong, legible anchor and a complete enough recent series to show recovery.
- Caveats and uncertainty: Raw totals favor larger or more connected destinations; this should not be framed as tourism intensity without denominators.
- Suggested chart forms: Focus-plus-context line chart; highlighted Fiji series against muted regional series; before/after callouts.
- Additional data that would strengthen it: Population, accommodation capacity, aviation seats, or visitor-spend data.

## Candidate C: Patchwork Recovery Evidence

- Claim or question: The data itself is uneven, so responsible comparison requires showing where evidence is strong and where it thins out.
- Evidence: New Caledonia has a complete 1995-2024 series; Fiji has 29 annual observations; several countries have short or sparse series, including Niue with one observation and Marshall Islands with three.
- Why it matters: This is useful for an honest workshop visualization: it teaches the audience how to read gaps rather than mistaking missing years for low arrivals.
- Caveats and uncertainty: This is more methodological and less emotionally direct than a shock-and-recovery narrative.
- Suggested chart forms: Coverage heatmap plus selected trend lines; country-year matrix; missingness-aware small multiples.
- Additional data that would strengthen it: Source metadata explaining why coverage differs by country and year.

## Candidate D: Long Arc Before The Shock

- Claim or question: Before 2020, some destinations expanded strongly while others had flatter or declining long-run paths.
- Evidence: Fiji grew from 476,000 arrivals in 1995 to 969,000 in 2019, while New Caledonia rose from 122,000 in 1995 to a 2016-2017 peak above 625,000 before falling to 474,000 in 2019. Northern Mariana Islands began high in the mid-1990s, reaching 736,000 in 1996 and 487,000 in 2019.
- Why it matters: This gives the story historical depth and avoids making the visualization only about 2020.
- Caveats and uncertainty: Long-run comparisons are strongest for countries with long series; countries with sparse data should be excluded or visually separated.
- Suggested chart forms: Long-run line chart; indexed-to-first-observed small multiples; pre-2020 slope comparison.
- Additional data that would strengthen it: Tourism policy milestones, air route changes, natural disaster disruptions, or source methodology notes.

## Analyst Recommendation For Next Gate

Ask the user to choose one story direction before Narrator shapes the public-facing narrative. Candidate A is the broadest and clearest from the supplied data; Candidate C is the most transparent about data limitations; Candidate B is the strongest if the user wants a destination-centered story.

## Enrichment Note

The user offered a list of possible contextual datasets and explicitly instructed not to fetch them. Current story candidates remain based only on the curated tourist-arrivals dataset. If the user supplies additional files, the strongest enrichments would likely be population context for fairer comparison or disaster/climate anomaly data for a broader climate-and-tourism vulnerability story.
