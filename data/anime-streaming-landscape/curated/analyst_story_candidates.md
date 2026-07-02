# Analyst Story Candidates: Anime Streaming Landscape

## Evidence Snapshot

- 206 titles covering 1986 to 2026
- 92 titles from the 2010s and 62 from the 2020s
- Crunchyroll appears on 169 titles, Hulu on 72, Netflix on 65, and Funimation on 79
- Median platform coverage is 2 services per title
- Top multi-platform high-rated titles include `Fullmetal Alchemist: Brotherhood`, `Hunter x Hunter (2011)`, `Steins;Gate`, and multiple `Attack on Titan` seasons
- Average verified platform count declines from 2.28 in the 2000s to 1.79 in the 2020s

## Candidate A

- Working title: `Where The Anime Catalog Lives`
- Claim or question: Which streaming services carry the center of this anime catalog, and how much of that dominance comes from library depth versus overlap?
- Evidence from the data: Crunchyroll appears on about 82% of titles in the file, while Netflix and Hulu are much more selective. The most common platform combinations are Crunchyroll-only, Crunchyroll plus Funimation, and Crunchyroll plus Hulu plus Funimation.
- Why it matters: This gives the clearest read on the platform landscape and would make a strong first local prototype.
- Caveats and uncertainty: This is a catalog snapshot, not a licensed-market inventory. It supports relative presence inside this file, not true catalog share.
- Suggested chart forms: platform overlap matrix, combination bars, ranked platform strips, searchable title browser
- Additional data that would strengthen it: a fuller and source-documented catalog, regional availability, and update dates

## Candidate B

- Working title: `Prestige Versus Reach`
- Claim or question: Which highly rated anime are easiest to watch because they are available on multiple services?
- Evidence from the data: Several 9.0+ titles appear on 3 or 4 services, while other highly rated titles are locked to 1 or 2. The top reachable group includes `Fullmetal Alchemist: Brotherhood`, `Hunter x Hunter (2011)`, `Steins;Gate`, and `Code Geass: Lelouch of the Rebellion R2`.
- Why it matters: This becomes a practical recommendation-style piece with a clear audience payoff.
- Caveats and uncertainty: Ratings are bucketed and season-level rows can crowd out franchise-level interpretation.
- Suggested chart forms: rating-by-platform-count scatter, top-title dot plot, card browser with filters
- Additional data that would strengthen it: review counts, franchise grouping, and per-region platform availability

## Candidate C

- Working title: `The Canon Gets Wider, The New Stuff Gets Narrower`
- Claim or question: Do older titles in this catalog show broader cross-platform spread than newer titles?
- Evidence from the data: Average verified platform coverage is higher in the 2000s than in the 2020s, even though the dataset is dominated by recent titles. Many current-decade entries appear on only one or two services.
- Why it matters: This turns the file into a story about library consolidation and selective licensing.
- Caveats and uncertainty: Without acquisition dates or regional rights data, the pattern is descriptive rather than explanatory.
- Suggested chart forms: decade small multiples, slope or interval plots, era-by-platform heatmap
- Additional data that would strengthen it: title acquisition dates, territory metadata, and historical availability snapshots

## Candidate D

- Working title: `A Browseable Anime Shelf`
- Claim or question: Is this dataset strongest as a local finder tool rather than a single headline chart?
- Evidence from the data: The file contains title-level synopsis, poster, genre, year, rating, and platform URLs, which makes it especially useful for exploration. The metadata supports filtering by platform, decade, genre, and status.
- Why it matters: This would stress-test the new local HTML flow with a richer interactive artifact instead of a static comparison.
- Caveats and uncertainty: It is less editorial and more exploratory, so the insight depends on the interface quality.
- Suggested chart forms: searchable shelf, poster-led explorer, table-plus-detail hybrid, filterable timeline
- Additional data that would strengthen it: franchise grouping, season numbers, runtime, and clearer source provenance
