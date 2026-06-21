# Skill Token Ledger

## Visualization

NYC Yellow Taxi Trips + NYC Weather, January 2026

## Purpose

Track approximate effort per Data Vizard skill for one visualization. Exact token attribution by skill depends on host/runtime telemetry; when unavailable, use this ledger to record skill boundaries, major context loaded, tool calls, and outputs produced.

## Ledger

| Step | Skill | Start Trigger | Stop Condition | Exact Tokens | Approx Notes |
| --- | --- | --- | --- | --- | --- |
| 1 | data-vizard | User selects workflow or slash command | Next role skill is selected | Not available | Orchestrates scope and decision gates |
| 2 | data-curator | Dataset/source selection begins | Curated dataset and handoff notes exist | Not available | Found taxi + weather sources, downloaded raw data, built hourly dataset |
| 3 | data-analyst | Curated hourly taxi-weather dataset is ready | Story candidates are presented | Not available | Loaded analyst skill/playbook and curated CSV; ran one Python EDA pass over 744 hourly rows; produced story candidates for user selection |
| 4 | narrator | User selects story candidate | Story brief is approved | Pending | To be measured during next phase |
| 5 | designer | Story brief is approved | HTML artifact is verified | Pending | To be measured during next phase |

## Measurement Method

When exact token usage is available, record:

- Input tokens
- Output tokens
- Tool/result tokens if reported separately
- Total tokens

When exact usage is unavailable, record:

- Skill name invoked
- Files or references loaded
- Number of tool calls
- Large artifacts read or generated
- User decision gates
- Output files produced

## Current Limitation

This Codex thread did not expose per-skill token telemetry for the work already completed, so the Curator token count is marked as unavailable rather than guessed.
