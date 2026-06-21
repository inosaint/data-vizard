# NYC Taxi + Weather Hourly Dataset

## Scope

- Yellow Taxi trip records: January 2026
- Weather source: Open-Meteo Historical Weather API for NYC coordinates
- Grain: one row per local NYC pickup hour
- Rows: 744

## Sources

- Taxi: https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page
- Weather: https://open-meteo.com/en/docs/historical-weather-api

## Curator Notes

- `raw_trip_count` counts all rows with pickup timestamps inside January 2026.
- `valid_trip_count` applies transparent quality filters: trip duration 1-180 minutes, trip distance 0-100 miles, and total amount 0-1000 USD.
- Weather values are reanalysis/model-derived Open-Meteo estimates for the requested NYC coordinate, not station observations.
- The current weather file uses one NYC coordinate only (`40.738136, -74.04254`), so it cannot support neighborhood-level snowfall differences.
- Payment tips can understate true tips because cash tips are not always captured the same way as card tips.

## Additional Comparison Outputs

- `jan25_vs_other_january_sundays_borough_impact.csv`: compares January 25 against the other January Sundays by pickup borough.
- `jan25_vs_other_january_sundays_zone_impact.csv`: compares January 25 against the other January Sundays by pickup zone.

## Basic Counts

- Raw January pickup rows: 3724882
- Valid-trip rows: 3603774
- Hours covered: 2026-01-01 00:00:00 to 2026-01-31 23:00:00
