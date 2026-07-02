# Curator Handoff: Bangalore Weather

## Source Files

- `data/bangalore-weather/raw/bangaloreRainfall.RData`
- `data/bangalore-weather/raw/bangaloreTemperature.RData`
- `data/bangalore-weather/raw/bangaloreWind.RData`

## Objects Found

- `blrRain`
- `blrTemp`
- `blrWind`

## Curated Outputs

- `data/bangalore-weather/curated/bangalore_weather_hourly.csv`
- `data/bangalore-weather/curated/bangalore_weather_daily.csv`
- `data/bangalore-weather/curated/bangalore_weather_monthly_climatology.csv`

## Data Dictionary

- `DT`: timestamp
- `Rain`: hourly rainfall
- `Temp`: hourly temperature
- `Wind`: hourly wind speed
- `WindDir`: hourly wind direction
- `Latlong`: constant location field for Bangalore
- `Source`: source label, `era5`
- `Index`: source time index
- `Something`, `SomethingElse`: source-carried numeric fields with unclear semantic naming in the original objects

Derived daily fields:

- `rain_total`
- `rain_hours`
- `temp_mean`
- `temp_min`
- `temp_max`
- `wind_mean`
- `wind_max`

## Transformation Log

1. Installed `pyreadr` into the bundled Python runtime to read `.RData` files locally.
2. Loaded `blrRain`, `blrTemp`, and `blrWind`.
3. Standardized `DT` to timestamps.
4. Kept only the weather variables needed for visualization in the merged table.
5. Outer-joined the three weather tables on `DT`.
6. Added calendar fields: `year`, `month`, `day`, `hour`.
7. Added `rain_flag` for rain-occurrence counting.
8. Materialized hourly, daily, and monthly-climatology CSVs.

## Dataset Fitness

- Strong for long-run seasonality, daily weather extremes, and temperature-rain-wind relationships.
- Strong for both aggregate climate stories and event-focused extreme-rain stories.
- Less suited to neighborhood comparison because all three files describe a single location.

## Caveats

- The original `.RData` objects contain two ambiguous fields, `Something` and `SomethingElse`, which were left out of the curated merged table because the source meaning is unclear.
- `wind` has slightly more rows than `rain` and `temp`, so the merged hourly table includes a small number of timestamps that are not perfectly aligned across all variables.
- `2026` is partial coverage only, ending on `2026-05-24`.
- The dataset is observational and historical; it should not be presented as a forecast.

## Useful Observations For Analyst

- Hourly coverage spans `1981-01-01` to `2026-05-24`.
- `October` is the wettest month by total rainfall in the long-run climatology.
- `April` has the hottest monthly average temperature.
- The strongest daily rain total in the file is `121.99` on `2015-11-16`.
- Average temperature shows a strong upward relationship with time, while heavy-rain days also trend upward more than rainy-day counts do.
