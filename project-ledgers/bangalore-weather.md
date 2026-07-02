| Stage | Skill | Status | Decisions / Evidence | Outputs |
| --- | --- | --- | --- | --- |
| Intake | Data Vizard | Completed | User provided three Bangalore weather `.RData` files for rainfall, temperature, and wind. | Project slug: `bangalore-weather` |
| Brief | Data Vizard | Completed | Assumed a public-facing historical-weather artifact rather than a forecast tool. | `outcome/bangalore-weather/PRODUCT.md` |
| Curation | Data Curator | Completed | Installed `pyreadr`, loaded `blrRain`, `blrTemp`, `blrWind`, merged hourly weather, and materialized daily and monthly summaries. | `data/bangalore-weather/curated/bangalore_weather_hourly.csv`, `bangalore_weather_daily.csv`, `bangalore_weather_monthly_climatology.csv`, `curator_handoff.md` |
| Analysis | Data Analyst | Completed | Strongest directions: warming without simple drying, dual rain peaks, or extreme rain days. | `outcome/bangalore-weather/analyst-story-candidates.md` |
| Decision Gate | Data Vizard | Completed | User selected story direction `A` = Dual Rain Peaks. | Dual-rain-peaks path chosen |
| Narrative | Narrator | Completed | User selected posture `A` = Explanatory. Story brief emphasizes a two-peak annual rainfall cycle rather than a single monsoon hump. | `outcome/bangalore-weather/story_brief.md` |
| Design | Designer | Completed | User selected design direction `A` = Seasonal Arc. Built a single-scene climatology view, tightened chart geometry after browser review, and verified local month detail interaction plus notes modal behavior in the in-app browser. | `outcome/bangalore-weather/options.html`, `outcome/bangalore-weather/index.html`, `styles.css`, `script.js`, `favicon.svg` |
