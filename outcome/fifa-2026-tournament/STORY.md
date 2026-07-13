# STORY.md — Paraguay's Anti-Possession Run

Project: `fifa-2026-tournament`
Story: Paraguay reached the FIFA 2026 Round of 16 averaging 30% possession — the lowest of all 48 teams — across five matches.
Posture: **data-art-led**
Language load: **minimal copy** (a title, tiny match labels, one visible caveat line — nothing else)

## Why minimal copy, not silent

The composition can carry the arc (five matches, shrinking possession share, results that refuse to correlate). But two things cannot be inferred from shape alone: (1) that 30% is the *lowest of 48 teams*, which is the entire point, and (2) the shootout/rounding caveats, which are accuracy obligations. So: one orienting title, one qualifying footnote, match labels as evidence. Everything else is deleted.

## The shape of the story (framing for Designer — not visible copy)

Five matches, told as possession shares. The arc:

1. **USA 1–4** — 35% possession, and it fails. The plan looks broken on day one.
2. **Türkiye 1–0** — 22% possession, out-shot heavily, wins on 2 shots on target. The inversion.
3. **Australia 0–0** — 44%, the quietest match, and it is enough to advance.
4. **Germany 1–1 (4–3 pens)** — 25%, out-shot 21–7, 13 interceptions. The peak of the method.
5. **France 0–1** — 24%, zero shots on target. The method runs out.

Focal point: **the Germany match** — the most extreme survival (out-shot 21–7, 25% possession) and the moment the anti-possession run becomes a thesis rather than luck. If the piece has one visual crescendo, it is here.

Counterpoint that should live in the composition, not in prose: the rest of the tournament rewarded possession (possession-dominant teams 53W-24D-19L; all 8 quarterfinalists average ≥53%). Paraguay is the visible exception against that field — ideally rendered as Paraguay's five marks against a quiet background of the other 47 teams, so the outlier reads without a sentence explaining it. The counterpoint must be legible, not just present: distinguish the 8 quarterfinalists within the background field visually (weight, position, or tone — no added copy), so "possession usually wins" is readable from the field itself rather than trusted offstage.

## Visible text inventory (exact, complete — anything not listed is unauthorized)

**Title (must keep):**
> Paraguay held less possession than any of the 48 teams at the 2026 World Cup — and outlasted 32 of them.

**Subtitle / orientation line (must keep — carries the rank claim):**
> 30% of the ball. Five matches. The last 16.

**Match labels (must keep, evidencing — one per match, exactly these):**
> USA 1–4 · 35%
> Türkiye 1–0 · 22%
> Australia 0–0 · 44%
> Germany 1–1, 4–3 pens · 25%
> France 0–1 · 24%

**Single annotation (optional — only if the Germany focal moment needs a nudge):**
> Out-shot 21–7. 13 interceptions. Through on penalties.

**Caveat footnote (must keep, small, persistent — bottom of the piece, exactly this):**
> Possession pairs may sum to 100–101 due to rounding. The Germany match is a draw decided on penalties, not a win. Data ends at the Round of 16.

**Source line (must keep, may share the footnote row):**
> FIFA 2026 group stage and knockout match data.

## Must keep vs optional

- **must_keep_text:** title, subtitle, five match labels, caveat footnote, source line.
- **optional_text:** Germany annotation; a tiny axis/legend mark for "possession %" if the encoding is not self-evident; hover detail labels (assistive-only — shots, SOT, interceptions per match) with no persistent copy.

## Annotation priorities

1. Germany match (25%, out-shot 21–7) — the crescendo; the only match that may carry an annotation.
2. Türkiye match (22%, won) — if a second emphasis is affordable, mark it visually (weight, color), not with words.
3. Do **not** annotate the France exit; the 0–1 · 24% label and terminal position say it.

## Caveat placement

All three caveats travel together in one footnote line, small but persistent (not tooltip-hidden, not collapsed by default). The shootout caveat is the most load-bearing — if the Germany mark is styled as a "win," the footnote must be visible in the same viewport.

## Forbidden phrases

"against all odds", "defied expectations", "a story of resilience", "the beautiful game", "David vs Goliath", "possession is nine-tenths", "clear pattern", "remarkable journey", "what this shows", "underdog fairy tale". Also banned: any sentence restating that Paraguay had low possession — the numbers already say it five times.

## Default to avoid

An explanatory scrolly with paragraph beats per match. This piece should read as one composed object: five marks, one outlier field, one footnote. If Designer feels the urge to add a sentence, the fix is compositional, not verbal — send it back, don't write around it.

- Axis captions (orientation cues): "48 teams, ranked by average possession" (rank 1 → 48) and "Paraguay's five matches, in order" (1st → 5th) — two labeled baselines that make the two x-grammars explicit.
- Compact screens only: satellite marks show numerals 1–5, decoded by a small list under the match-order axis using the exact match-label strings.
