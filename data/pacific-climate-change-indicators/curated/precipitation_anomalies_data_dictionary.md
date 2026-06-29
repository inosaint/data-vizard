# Data Dictionary: Precipitation Anomalies Annual

Curated file: `data/pacific-climate-change-indicators/curated/precipitation_anomalies_annual.csv`

Joined file: `data/pacific-climate-change-indicators/curated/tourist_arrivals_with_precipitation_anomalies.csv`

## Precipitation Anomalies Columns

| Column | Type | Description |
| --- | --- | --- |
| `indicator_code` | string | SPC indicator code; all rows are `RAIN_ANOM`. |
| `indicator` | string | Indicator label; all rows are `Precipitation anomalies`. |
| `geo_code` | string | SPC geography code for the Pacific country or territory. |
| `country_territory` | string | Pacific Island country or territory name. |
| `year` | integer | Annual observation year. |
| `precipitation_anomaly_mm` | number | Annual precipitation anomaly in millimetres. |
| `standard_error_mm` | number | Standard error in millimetres. |
| `unit_code` | string | Unit code from source; `MM`. |
| `unit_label` | string | Unit label from source; `Millimetre`. |
| `frequency_code` | string | Frequency code from source; `A` for annual. |
| `frequency_label` | string | Frequency label from source; `Annual`. |
| `reporting_type_code` | string | Reporting type code from source; `N`. |
| `reporting_type_label` | string | Reporting type label from source; `National`. |
| `source_dataflow` | string | Source dataflow identifier: `SPC:DF_CLIMATE_CHANGE(1.0)`. |

## Joined File Columns

| Column | Type | Description |
| --- | --- | --- |
| `geo_code` | string | SPC geography code shared by both datasets. |
| `country_territory` | string | Pacific Island country or territory name from the tourist-arrivals file. |
| `year` | integer | Annual observation year. |
| `arrivals` | integer | Tourist arrivals. |
| `precipitation_anomaly_mm` | number | Matching annual precipitation anomaly in millimetres. |
| `standard_error_mm` | number | Matching standard error in millimetres. |
| `arrivals_indicator` | string | Tourist arrivals indicator label. |
| `precipitation_indicator` | string | Precipitation anomalies indicator label. |

## Coverage

- Precipitation rows: 1,034.
- Precipitation geographies: 22 Pacific countries and territories.
- Precipitation time range: 1979-2025, with 47 observations per geography.
- Joined rows: 229, matching every tourist-arrivals observation.
- Joined geographies: 13, matching every tourist-arrivals geography.

## Transformation Log

- Copied the user-supplied precipitation anomalies CSV into `data/pacific-climate-change-indicators/raw/`.
- Confirmed all 1,034 rows are the `Precipitation anomalies` indicator.
- Selected meaning-bearing fields and renamed them to analysis-friendly snake_case names.
- Converted `TIME_PERIOD` to integer `year`.
- Converted `OBS_VALUE` to numeric `precipitation_anomaly_mm`.
- Converted `ERROR_VAL` to numeric `standard_error_mm`.
- Removed empty status, comment, and label-only source columns from the curated table.
- Joined precipitation anomalies to tourist arrivals by `geo_code` and `year`.
- Did not impute, smooth, aggregate, or normalize either dataset.
