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
- option diversity or similarity-check notes
- wireframe or low-fidelity mockup path for complex selected directions
- fidelity plan comparing the selected concept to the intended implementation
- rendering/library decision, especially for immersive, map-led, animated, dense, or spatial concepts
- selected implementation plan
- `focal_point`
- `default_to_avoid`
- option image set or HTML option board path
- HTML artifact path
- verification notes
- `SIGNOFF.md` path when final signoff is claimed

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
- after Designer options, image comps, or plan, before the user chooses a direction
- after the final HTML artifact, before signoff

At each checkpoint, the orchestrator should use Critic findings to revise the work before presenting anything user-facing. The user should see the improved options, brief, or artifact rather than the raw critique note.

For image-led optioning, Critic or the orchestrator should reject a set before user choice if the options share the same layout shell, palette temperature, typography mood, control placement, image treatment, density, spatial metaphor, or interaction model beyond two shared traits. Option images should represent different directions, not small stylistic variations of one prompt.

For immersive, scene-led, map-led, animated, dense, or spatial concepts, require a pre-build wireframe or low-fidelity mockup. The plan should name which visual mechanisms from the selected option must survive into implementation, such as clipped specimens in a landscape, layered transects, parallax depth, custom clustering, map behavior, or animated reveal. If those mechanisms are simplified away, ask the user to approve the simpler direction before building.

For any non-dashboard piece, add one extra internal checkpoint before final signoff:

- audit final file structure; nontrivial artifacts should normally use `index.html`, `styles.css`, `script.js`, data files, assets, favicon, and metadata rather than one oversized HTML file
- compare the final artifact against the selected option image, wireframe, and fidelity plan
- audit the rendering/library decision; plain DOM layout should be justified when the concept called for D3/SVG, Canvas, WebGL, Three.js, MapLibre, or another richer renderer
- compare the artifact's first-load visible text surfaces against Narrator's `visible_text_inventory`
- cut any extra helper copy, hero explanation, section copy, or detail prose that was added during implementation drift
- do not treat "it improves clarity" as sufficient justification on its own; the text must still earn a place under the chosen posture
- run a shell audit against common fallback structures such as `hero + card stack`, `hero + sidebar detail`, and softened dashboard chrome
- run a control honesty audit; every visible control must be functional, disabled with explanation, or removed
- run a data completeness audit for missing or broken images, missing essential copy or credits, broken paths, malformed labels, and mojibake
- run an interaction locality audit; if selection or hover sends the eye to a detached remote panel, strip, drawer, or summary surface, redesign unless the brief explicitly calls for that behavior
- run a density audit on the smallest repeated component so metadata is cut before overflow appears
- for record-by-record explorers, confirm every record is reachable through the designed visual system and visible counts match reachable records
- create or review `outcome/<project-name>/SIGNOFF.md` before marking the final HTML artifact complete

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
- image option sets that share the same generated style, camera angle, shell, or mood
- immersive concepts flattened into static app shells
- missing pre-build wireframe or fidelity plan
- underpowered rendering choices for spatial, animated, map-led, or scene-led concepts
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
- Store final HTML, option images, and public-facing supporting assets under `outcome/<project-name>/`.
- Store progress and handoff ledgers under `project-ledgers/<project-name>.md`.
- Store final artifact signoff notes under `outcome/<project-name>/SIGNOFF.md` when an HTML artifact is claimed as complete.

Use ledger status precisely:

- `Proposed`: options, plans, or direction briefs exist but the user has not chosen.
- `Draft built`: an artifact exists but verification or critique is incomplete.
- `Needs revision`: a required audit or critique found material defects.
- `Blocked`: workflow progress needs user input, missing data, rendering support, or another external condition.
- `Verified`: Designer audits passed and verification notes or `SIGNOFF.md` exist.
- `Completed`: the stage is verified where required, Critic has passed it when applicable, and no required revision remains.

## Workshop Facilitation Tone

Be collaborative and explicit. Explain why the current decision matters, offer a small set of options for that one decision, and help the participant make the choice. Avoid turning the workflow into a hidden autopilot or a long intake form.
