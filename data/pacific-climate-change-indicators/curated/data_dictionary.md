# Data Dictionary: Tourist Arrivals Annual

Curated file: `data/pacific-climate-change-indicators/curated/tourist_arrivals_annual.csv`

| Column | Type | Description |
| --- | --- | --- |
| `indicator_code` | string | SPC indicator code; all rows are `TRSM_ARR`. |
| `indicator` | string | Indicator label; all rows are `Tourism Arrivals`. |
| `geo_code` | string | SPC geography code for the Pacific country or territory. |
| `country_territory` | string | Pacific Island country or territory name. |
| `year` | integer | Annual observation year. |
| `arrivals` | integer | Number of tourist arrivals reported for the country or territory in that year. |
| `unit_code` | string | Unit code from source; `N` in this dataset. |
| `unit_label` | string | Unit label from source; `units` in this dataset. |
| `frequency_code` | string | Frequency code from source; `A` for annual. |
| `frequency_label` | string | Frequency label from source; `Annual`. |
| `source_dataflow` | string | Source dataflow identifier: `SPC:DF_CLIMATE_CHANGE(1.0)`. |

## Coverage

- Rows: 229.
- Geographies: 13 Pacific Island countries and territories.
- Time range: 1995-2024 overall.
- Complete 1995-2024 series: New Caledonia only.
- Near-complete long series: Fiji, Northern Mariana Islands, Tonga, Vanuatu.
- Short or sparse series: American Samoa, Guam, Marshall Islands, Niue, and several others.

## Transformation Log

- Copied the supplied CSV into `data/pacific-climate-change-indicators/raw/` as a source snapshot.
- Confirmed all 229 data rows are the Tourism Arrivals indicator.
- Selected meaning-bearing fields and renamed them to analysis-friendly snake_case names.
- Converted `TIME_PERIOD` to integer `year`.
- Converted `OBS_VALUE` to integer `arrivals`.
- Removed empty status, error, reporting, and comment columns from the curated table.
- Did not impute missing years.
- Did not aggregate, normalize, or enrich the dataset.
