# Analyst Story Candidates: World Cup Matches 2026

## Candidate A: Possession Without Payoff

- claim:
  - Control did not reliably produce results in this group-stage-heavy snapshot.
- evidence:
  - Paraguay beat Türkiye `1–0` despite a `57` point possession deficit.
  - Australia beat Türkiye `2–0` despite a `44` point possession deficit.
  - South Africa beat Korea Republic `1–0` despite a `37` point possession deficit.
  - Türkiye averaged `66.3` possession across three matches but converted only `3` goals from `71` shots, a `0.042` goals-per-shot rate.
- uncertainty:
  - Possession alone does not encode shot quality or game state.
- likely chart forms:
  - scatter of possession share vs result
  - annotated upset cards
  - team efficiency strip

## Candidate B: The Most Efficient Attacks Were Not Always The Biggest Favorites

- claim:
  - Several teams turned relatively modest shot volume into very high scoring efficiency.
- evidence:
  - Netherlands scored `10` goals from `40` shots, `0.25` goals per shot.
  - Japan scored `7` goals from `29` shots, `0.241` goals per shot.
  - Argentina scored `8` goals from `34` shots, `0.235` goals per shot.
  - France, Argentina, and Mexico all finished on `9` points, but they reached it through different shot and scoring profiles.
- uncertainty:
  - The dataset covers only a few matches per team, so efficiency rates are volatile.
- likely chart forms:
  - ranked team efficiency field
  - scatter of shots vs goals
  - small-multiple team cards

## Candidate C: North American Stadiums Carried The Tournament’s Scale

- claim:
  - The event’s scale is legible through venue concentration as much as through teams.
- evidence:
  - SoFi Stadium hosted `6` matches and drew `420,672` total attendance.
  - MetLife Stadium drew `403,197` across `5` matches.
  - Average attendance across the whole file was `64,572`.
  - The heaviest-attended day in the file was `2026-06-25`, with `426,834` across `6` matches.
- uncertainty:
  - Venue capacity and scheduling shape attendance, so this is about concentration, not pure demand.
- likely chart forms:
  - venue atlas
  - attendance ladder
  - date-by-venue rhythm chart

## Analyst Recommendation

- strongest immediate options:
  - `Possession Without Payoff`
  - `The Most Efficient Attacks Were Not Always The Biggest Favorites`

- why:
  - both are well supported by the covered rows
  - both respect the group-stage-heavy limitation
  - both can lead to either a balanced explainer or a more composition-led sports artifact
