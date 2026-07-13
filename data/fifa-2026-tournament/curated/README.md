# FIFA 2026 World Cup — Curated Data (`fifa-2026-tournament`)

Source: `data/fifa-2026-tournament/raw/matches.csv` (96 matches: 72 Group Stage, 16 Round of 32, 8 Round of 16). No duplicate rows; unique on (date, home_team, away_team).

## Files

### `matches.csv` (96 rows, 1 per match)

| Column | Type | Notes |
|---|---|---|
| match_id | int | Curator-assigned, source row order |
| stage | text | Normalized: `Group Stage`, `Round of 32`, `Round of 16` |
| gameweek | int/blank | Only populated for Group Stage (1–3); blank for 24 knockout rows |
| date, dayofweek, start_time | text | ISO date; local kickoff time |
| home_team, away_team | text | 48 distinct teams |
| home_score, away_score | int | Parsed from en-dash `score`; includes extra-time goals, excludes penalty shootout |
| home_pens, away_pens | int/blank | Shootout tallies, only for the 4 shootout matches |
| went_to_extra_time | 0/1 | 6 matches (4 shootouts + 2 decided in ET) |
| decided_on_penalties | 0/1 | 4 matches |
| result | text | `home_win` / `away_win` / `draw` / `penalties` |
| winner | text | Team name; blank for group-stage draws. For `penalties`, the shootout winner |
| attendance | int | Comma separators stripped |
| venue, referee, formations, managers, captains | text | Passed through |
| home/away possession, sot, total_shots, saves, cards_yellow, cards_red, fouls, corners, crosses, interceptions, offsides | int | Cast from float-ish/text to int; offsides blank in 4 matches |
| notes | text | Populated for 6 ET/shootout matches only |

### `team_summary.csv` (48 rows, 1 per team)

Per-team totals across all stages played: matches, wins/draws/losses (90'/ET result; shootout matches are counted only in `pen_shootout_wins/losses`, not in `draws`), goals for/against/diff, `furthest_stage`, avg possession, shots, SOT, corners, fouls, cards, offsides (with `offside_matches_covered` since 4 matches lack offside data).

## Transformation log

1. Copied raw file verbatim to `raw/matches.csv`.
2. Parsed `score` (en-dash `–`): pattern `(pens)H–A(pens)`. The 4 shootout rows had blank `home_score`/`away_score` in the raw file; goals recovered from the score string. Parsed values cross-checked against raw numeric score columns where present (all matched).
3. Stripped commas/quotes from `attendance`; cast all stat columns to int.
4. Normalized stage labels; derived `result`, `winner`, `went_to_extra_time` (from `notes`), `decided_on_penalties`, `home_pens`/`away_pens`.
5. Aggregated `team_summary.csv` from curated matches.

## Known caveats

- Offsides missing in 4 matches (Côte d'Ivoire–Ecuador, Ecuador–Germany, Paraguay–Australia, Paraguay–France); team offside totals are undercounts for Ecuador, Germany, Paraguay, Australia, France, Côte d'Ivoire.
- "home"/"away" are draw designations, not true home advantage (all matches in North America); avoid home-advantage claims.
- Possession pairs sum to 100–101 (rounding in source).
- Goals include extra time, so per-90-minute rates are slightly inflated for the 6 ET matches.
- Tournament incomplete: no QF/SF/Final; `furthest_stage` = furthest so far, not final finish.
- Group labels are not in the source; group standings cannot be derived without a group mapping.

## Suggested analytical questions

- Does possession dominance predict winning, and does the relationship weaken in knockout rounds?
- Shot conversion efficiency (goals per SOT) by team — who over/under-performs?
- Attendance patterns by venue, stage, and kickoff time.
- Formation matchups: which shapes win most often?
- Discipline (fouls/cards) vs. progression: do surviving teams foul more or less?
- Knockout drama: profile of the 6 extra-time matches vs. regulation matches.
