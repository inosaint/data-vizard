# Google Fonts Analyst Story Candidates

## Dataset Readout

- 1,938 font families across 5 categories and 181 subsets
- `sans-serif` is the largest category with 710 families
- `latin` appears in 1,923 families and `latin-ext` in 1,508
- Only 15 families in this snapshot do not include `latin`
- 1,036 families have only 1 listed variant
- The most multilingual family in this snapshot is `Google Sans` with 25 subsets
- Several large workhorse families reach 18 variants, including `Roboto`, `Noto Sans`, `Noto Serif`, and `Inter`

## Candidate A

- Working title: The Catalog Is Global, But Still Latin-First
- Claim or question: How much of Google Fonts is truly multilingual breadth versus a catalog anchored around Latin support?
- Evidence from the data: `latin` appears in 1,923 of 1,938 families, while the next most common subset, `latin-ext`, appears in 1,508 and the next non-Latin subset, `vietnamese`, appears in 511. Only 15 families omit `latin`.
- Why it matters: This gives us a clear structural view of how inclusive the catalog feels at first glance versus where the long-tail script coverage actually thins out.
- Caveats and uncertainty: This is support presence, not a measure of design quality, usage, or completeness for each script.
- Suggested chart forms: subset skyline, ranked bars, radial long-tail field, or a script-coverage wall with highlighted breakpoints.
- Additional data that would strengthen it: usage/download data, release timelines, or foundry/designer metadata.

## Candidate B

- Working title: The Workhorses And The Showpieces
- Claim or question: Which font categories are built for flexible production use, and which are mostly stylistic specialists?
- Evidence from the data: `sans-serif` averages 5.73 variants and 3.28 subsets, `monospace` averages 5.93 variants and 3.73 subsets, while `display` averages 2.04 variants and `handwriting` 1.88. Category size is also uneven: 710 sans-serif families versus 59 monospace families.
- Why it matters: This supports a clean story about the catalog splitting between practical systems fonts and expressive, narrower-use families.
- Caveats and uncertainty: Variant count is not the same as design quality, and category labels come from the source repo rather than an independent typographic taxonomy.
- Suggested chart forms: category comparison bands, scatterplot of subset breadth versus variant richness, or a poster-like quadrant explorer.
- Additional data that would strengthen it: variable-font axis metadata, popularity, or usage context.

## Candidate C

- Working title: A Typographic Atlas Of Specialists And Generalists
- Claim or question: What happens when each font family is treated as a specimen in a field, letting people browse from multilingual giants to single-script outliers?
- Evidence from the data: 327 families support only one subset, while a small set of families stretch across 10 or more subsets. `Google Sans` reaches 25 subsets, and families like `Roboto`, `Noto Sans`, and `Inter` stack broad coverage with many variants.
- Why it matters: This is a good fit for a record-led exploratory piece, which also tests whether the local plugin handles catalog-like datasets instead of only classic chart stories.
- Caveats and uncertainty: The piece would emphasize structural browsing more than one headline claim, so it needs careful restraint to avoid collapsing into a generic font picker UI.
- Suggested chart forms: constellation field, specimen wall, or clustered archive explorer with focus detail.
- Additional data that would strengthen it: preview imagery, variable-font metadata, or script-group taxonomy.
