# Dataset Intake Checklist

## Profile

- Source and license
- API base URL and endpoint shape when applicable
- Rows, columns, file format, encoding
- Column names, inferred types, units
- Time coverage and frequency
- Geographic coverage and granularity
- Category definitions
- Missing values and placeholder codes
- Duplicates and unique keys
- Outliers and impossible values
- Join keys and likely enrichment fields
- Pagination, rate limits, or batch constraints when applicable
- Nested objects, arrays, and fields that need flattening

## Fitness Questions

- What questions can this data answer?
- What questions can it not answer?
- What normalization is needed for fair comparison?
- What external context would make patterns more meaningful?
- What API constraints or missing fields will shape the visualization?
- Is this better suited to aggregate analysis, record-by-record exploration, or a hybrid artifact?
- What claims would be misleading?
- What caveats must travel with the data?

## Handoff Format

Give Analyst:

- A compact data dictionary
- Cleaned or recommended schema
- Acquisition notes, including endpoint choices and query parameters when relevant
- Transformation log
- Likely artifact mode: aggregate analysis, record-by-record exploration, or hybrid
- Enrichment options
- Risks and caveats
- Questions worth exploring first
