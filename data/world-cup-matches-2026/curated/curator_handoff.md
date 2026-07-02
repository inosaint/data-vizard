# Curator Handoff: World Cup Matches 2026

## Dataset

- Source file: `data/world-cup-matches-2026/raw/matches.csv`
- Clean table: `data/world-cup-matches-2026/curated/matches_clean.csv`
- Supporting summaries:
  - `data/world-cup-matches-2026/curated/team_summary.csv`
  - `data/world-cup-matches-2026/curated/venue_summary.csv`

## Data Dictionary

- One row per match.
- Coverage includes match metadata, scoreline, attendance, venue, referee, formations, managers, captains, possession, shots, saves, cards, fouls, corners, crosses, interceptions, offsides, and notes.
- Added curator-derived fields in `matches_clean.csv`:
  - `total_goals`
  - `goal_margin`

## Transformation Log

1. Copied the source CSV into the project raw folder.
2. Parsed numeric text fields into integers where possible.
3. Normalized `attendance` by removing commas and converting to integer.
4. Added `total_goals` and `goal_margin`.
5. Built team-level and venue-level summary tables for downstream analysis.

## Dataset Fitness Summary

- The file is strong for match-level analysis, group-stage comparison, team efficiency, and venue/attendance patterns.
- The file is weaker for full-tournament bracket stories because knockout-stage coverage is incomplete.
- The file can support both aggregate analysis and record-level exploration.

## Known Caveats

- Coverage is almost entirely group-stage:
  - `72` matches are `Group stage`
  - `1` match is `Round of 32`
- `notes` is empty for all rows.
- `home_offsides` and `away_offsides` are missing in `3` matches each.
- `gameweek` is missing in `1` row.
- Source provenance is not documented inside the CSV, so any public-facing artifact should describe the file as a local match dataset snapshot rather than claiming official federation sourcing unless verified separately.

## Risky Claims To Avoid

- Do not frame this as a complete tournament story.
- Do not infer team quality beyond the covered matches.
- Do not treat attendance as a proxy for national support without venue and schedule context.
- Do not overclaim tactical causality from formations alone.

## Recommended Analytical Questions

- Which teams converted possession and shooting volume into results most efficiently?
- Which venues concentrated the most attendance?
- Where did high-possession teams fail to turn control into wins?
- How did common formations differ in scoring and win rate across the covered matches?

## Artifact Mode Recommendation

- `hybrid`
  - The dataset supports aggregate comparison well.
  - It also supports specimen-level match browsing because each row is rich.
