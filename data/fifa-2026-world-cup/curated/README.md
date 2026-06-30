# FIFA 2026 World Cup group-stage data

## Source files

- Raw source snapshot: `data/fifa-2026-world-cup/raw/matches.csv`
- Group-stage match table: `data/fifa-2026-world-cup/curated/matches_group_stage.csv`
- Group-stage match table with inferred groups: `data/fifa-2026-world-cup/curated/matches_group_stage_with_groups.csv`
- Group-stage team summary: `data/fifa-2026-world-cup/curated/group_stage_team_summary.csv`
- Group-stage standings: `data/fifa-2026-world-cup/curated/group_stage_standings.csv`

## Curator handoff

The working dataset is filtered to group-stage matches only. The source file contained 73 match rows: 72 group-stage rows and 1 Round of 32 row. The Round of 32 row was excluded from the curated group-stage table.

### Data profile

- Granularity: one row per match in `matches_group_stage.csv`.
- Coverage: June 11, 2026 through June 27, 2026.
- Scope: 48 teams, 72 group-stage matches, 17 venue labels.
- Gameweek coverage: 24 matches in each of gameweeks 1, 2, and 3.
- Main fields: teams, score, venue, referee, formations, managers, captains, possession, shots, saves, cards, fouls, corners, crosses, interceptions, offsides.
- Groups are inferred from the match graph because the source file has no explicit group column. Each connected component contains 4 teams and 6 matches, matching the group-stage structure.

### Data quality notes

- `notes` is blank for all 72 group-stage rows.
- `home_offsides` and `away_offsides` are missing in 3 group-stage matches.
- Possession sometimes sums to 101 because values appear rounded to whole percentages.
- Venue labels include both `Estadio BBVA, Guadalupe` and `Estadio BBVA Bancomer, Guadalupe`; this may need normalization before venue-level analysis.
- This file can support descriptive analysis of the group stage, but not full-tournament claims.

### Inferred groups

- Group A: Mexico, South Africa, Czechia, Korea Republic
- Group B: Canada, Bosnia & Herz., Switzerland, Qatar
- Group C: United States, Paraguay, Türkiye, Australia
- Group D: Brazil, Morocco, Haiti, Scotland
- Group E: Germany, Curaçao, Côte d'Ivoire, Ecuador
- Group F: Netherlands, Japan, Sweden, Tunisia
- Group G: Belgium, Egypt, New Zealand, IR Iran
- Group H: Spain, Cabo Verde, Uruguay, Saudi Arabia
- Group I: France, Senegal, Norway, Iraq
- Group J: Argentina, Algeria, Austria, Jordan
- Group K: Portugal, Congo DR, Colombia, Uzbekistan
- Group L: England, Croatia, Ghana, Panama

### Metric-to-outcome scan

For matches where the two teams did not tie on the metric:

- More shots on target: 41 wins, 19 draws, 6 losses.
- Higher possession: 39 wins, 20 draws, 13 losses.
- More total shots: 38 wins, 19 draws, 13 losses.
- More corners: 32 wins, 19 draws, 16 losses.
- More crosses: 23 wins, 20 draws, 26 losses.
- More fouls: 18 wins, 18 draws, 31 losses.
- More yellow cards: 9 wins, 14 draws, 23 losses.
- More red cards: 1 win, 1 draw, 5 losses.

### Suggested first questions

- Which teams dominated by points, goal difference, goals, shots, or possession?
- Which teams were efficient, converting relatively few shots into points or goals?
- Which matches were statistical outliers for goals, cards, shots, crosses, or attendance?
- Which venues hosted the highest-attendance or highest-scoring matches?
