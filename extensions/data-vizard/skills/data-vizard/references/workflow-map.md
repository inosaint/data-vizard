# Data Vizard Workflow Map

## Decision Gates

Pause for user input at these moments:

- Dataset source or enrichment source selection
- Cleaning rules that change meaning
- Analytical story direction selection
- Narrative posture selection
- Narrative frame or language-load selection when it materially affects the output
- Visual style family, chart form, and motion behavior selection
- Final implementation approach for the HTML artifact

Ask only one decision gate per assistant turn. If several gates are pending, choose the one that most affects the next concrete action, then wait for the user's answer before presenting the next gate.

## Recommended Handoffs

Curator and Analyst are the default core stages for real data work. Narrator may stay light. Critic is required before final signoff and should review each major stage before its output is presented to the user.

Curator to Analyst:

- Dataset location and format, using `data/<project-name>/raw/` or `data/<project-name>/curated/`
- Data dictionary
- Transformation log
- Known caveats
- Suggested analytical questions

Curator to Critic:

- dataset fitness summary
- transformation log
- known caveats
- risky claims to avoid
- artifact mode recommendation

Analyst to Narrator:

- Selected or candidate story directions
- Main evidence
- Counter-evidence or uncertainty
- Caveats that must remain visible
- Possible chart forms

Analyst to Critic:

- candidate directions
- supporting evidence
- caveats and counter-evidence
- options that were considered but rejected

Narrator to Critic and Designer:

- `posture`
- `language_load`
- `text_budget`
- `visible_text_inventory`
- `must_keep_text`
- `optional_text`
- main claim or question when one is necessary
- annotation priorities
- caveat language that must remain visible

Critic to Designer or orchestrator:

- what was reviewed
- `critique_mode`
- `critique_findings`
- concrete defect classes
- what to keep
- what to cut
- what still needs justification
- signoff state

These critique notes are internal-only. They should trigger revision work, not be shown to the user.

Designer to Critic and user:

- visual direction options
- selected implementation plan
- `focal_point`
- `default_to_avoid`
- HTML artifact path
- verification notes

## Narrative Postures

- `Explanatory`: language and annotation carry clear teaching or argumentative weight.
- `Balanced`: the visual leads, with selective language support.
- `Data-art-led`: the visual carries the reading path; language is minimal unless required for orientation or caveat visibility.

Narrator should not be treated as incomplete for returning a `silent brief` or `minimal copy brief` when the posture calls for restraint.

## Critique Rules

Critic should default to `dual` mode unless the user or project specifically favors `editorial` or `visual`.

Critic should run at these checkpoints in the full workflow:

- after Curator, before the curation readout is presented upstream
- after Analyst, before story options are shown to the user
- after Narrator, before Designer implements
- after Designer options or plan, before the user chooses a direction
- after the final HTML artifact, before signoff

At each checkpoint, the orchestrator should use Critic findings to revise the work before presenting anything user-facing. The user should see the improved options, brief, or artifact rather than the raw critique note.

For any non-dashboard piece, add one extra internal checkpoint before final signoff:

- compare the artifact's first-load visible text surfaces against Narrator's `visible_text_inventory`
- cut any extra helper copy, hero explanation, section copy, or detail prose that was added during implementation drift
- do not treat "it improves clarity" as sufficient justification on its own; the text must still earn a place under the chosen posture
- run a shell audit against common fallback structures such as `hero + card stack`, `hero + sidebar detail`, and softened dashboard chrome
- run an interaction locality audit; if selection or hover sends the eye to a detached remote panel, strip, drawer, or summary surface, redesign unless the brief explicitly calls for that behavior
- run a density audit on the smallest repeated component so metadata is cut before overflow appears

Typical defect classes include:

- unnecessary visible text
- obvious metaphor or decorative framing
- default dashboard grammar
- repeated shell grammar
- default sidebar detail panel
- relocated dashboard logic
- remote selected-state dependency
- utility UI collapse for collection-like exploratory pieces
- option sets that differ only by chart type instead of posture, composition, or interaction model
- same-temperature palette drift
- rounded-card overuse
- accent-rail rescue styling
- weak focal point
- hierarchy too flat
- interaction or annotation not earning its place
- data-art posture violated by explanatory clutter
- density overflow

## Delegation Model

When the user invokes `$data-vizard` for a multi-stage project, treat role skills as delegated subagent work whenever the environment supports it. The orchestrator owns sequencing, synthesis, and decision gates. Direct role invocations can stay standalone.

## Project Files

- Store project-specific product context at `outcome/<project-name>/PRODUCT.md`.
- Store raw and curated datasets under `data/<project-name>/`.
- Store final HTML and public-facing supporting assets under `outcome/<project-name>/`.
- Store progress and handoff ledgers under `project-ledgers/<project-name>.md`.

## Workshop Facilitation Tone

Be collaborative and explicit. Explain why the current decision matters, offer a small set of options for that one decision, and help the participant make the choice. Avoid turning the workflow into a hidden autopilot or a long intake form.
