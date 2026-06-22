# Data Vizard Workflow Map

## Decision Gates

Pause for user input at these moments:

- Dataset source or enrichment source selection
- Cleaning rules that change meaning
- Analytical story direction selection
- Narrative frame and audience tone selection
- Visual style family, chart form, and motion behavior selection
- Final implementation approach for the HTML artifact

Ask only one decision gate per assistant turn. If several gates are pending, choose the one that most affects the next concrete action, then wait for the user's answer before presenting the next gate.

## Recommended Handoffs

All four role handoffs are required for a completed visualization artifact. The process may be lightweight, but it must not jump directly from dataset choice to final HTML.

Curator to Analyst:

- Dataset location and format, using `data/<project-name>/raw/` or `data/<project-name>/curated/`
- Data dictionary
- Transformation log
- Known caveats
- Suggested analytical questions

Analyst to Narrator:

- Selected or candidate story directions
- Main evidence
- Counter-evidence or uncertainty
- Caveats that must remain visible
- Possible chart forms

Narrator to Designer:

- Audience and tone
- Main claim or question
- Section sequence
- Annotation priorities
- Required caveat language

Designer to user:

- Visual direction options
- Selected implementation plan
- HTML artifact path
- Verification notes

## Project Files

- Store project-specific product context at `outcome/<project-name>/PRODUCT.md`.
- Store raw and curated datasets under `data/<project-name>/`.
- Store final HTML and public-facing supporting assets under `outcome/<project-name>/`.
- Store progress and handoff ledgers under `project-ledgers/<project-name>.md`.

## Workshop Facilitation Tone

Be collaborative and explicit. Explain why the current decision matters, offer a small set of options for that one decision, and help the participant make the choice. Avoid turning the workflow into a hidden autopilot or a long intake form.
