# Analyst Story Candidates: Bangalore Weather

## Candidate A: Bangalore's Rain Has Two Peaks, Not One

- claim:
  - Bangalore's rainfall structure is not just a simple monsoon hump; the city builds to wet mid-year months and then peaks again in October.
- evidence:
  - `October` has the highest long-run monthly rainfall total: `6276.40`.
  - `July`, `August`, and `September` are all very wet, but each stays below October in the aggregate climatology.
  - `May` is also materially rainy, creating a more complex pre-monsoon build than a single-season story suggests.
- uncertainty:
  - The monthly climatology compresses many years together, so it explains seasonal shape better than year-to-year variability.
- likely chart forms:
  - radial or seasonal cycle chart
  - month-by-month rainfall field
  - layered climate wheel

## Candidate B: Bangalore Is Getting Hotter, But Not Simply Drier

- claim:
  - The long record suggests warming more clearly than drying: mean temperatures trend upward while rainfall becomes more concentrated into heavier days rather than disappearing outright.
- evidence:
  - Average temperature has a strong positive correlation with time: `0.666`.
  - Heavy-rain days rise with time more than rainy-day counts do: heavy-rain-day correlation `0.282`, rainy-day correlation `-0.21`.
  - `2024` has the highest hottest-day reading in the file at `37.66`.
  - High-rainfall years still appear in recent decades, including `2021`, `2022`, and `2024`.
- uncertainty:
  - Correlation is not a formal climate attribution model, and `2026` is incomplete.
- likely chart forms:
  - warming-versus-concentration comparison
  - decade ribbons
  - dual-axis climate caution piece

## Candidate C: The City's Most Violent Rain Days Break The Seasonal Calm

- claim:
  - The daily record shows a city that is often moderate, but occasionally punctured by very concentrated rain days.
- evidence:
  - The wettest day in the file is `2015-11-16` with `121.99`.
  - Multiple top rain days deliver nearly full-day rainfall, with `20` to `24` rainy hours.
  - Extreme rain days cluster in the late wet season, especially around `September` to `November`.
- uncertainty:
  - This direction centers extremes, so it needs careful framing to avoid implying they define every year equally.
- likely chart forms:
  - event strip
  - ranked storm-day field
  - calendar scatter of extremes

## Analyst Recommendation

- strongest immediate options:
  - `Bangalore Is Getting Hotter, But Not Simply Drier`
  - `Bangalore's Rain Has Two Peaks, Not One`

- why:
  - both use the long time span well
  - both can be visually distinctive without becoming a forecast dashboard
  - both stay inside what the dataset supports without overclaiming
