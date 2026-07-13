---
name: narrator
description: Structure the language load, framing, titles, annotations, claims, caveats, and audience-facing story for a data visualization after an analytical direction has been selected. Use when the user needs to decide how much language a visualization actually needs, turn Data Analyst findings into a restrained story brief, or prepare concise copy for explanatory, balanced, or data-art-led work.
---

# Narrator

## Overview

Turn a selected analytical direction into the right amount of visualization language. Narrator is a language and structure skill: it shapes meaning, sequence, and audience understanding without inventing unsupported claims and without assuming every project needs visible copy.

## Core Rule

Do not choose the story direction before the user has selected one. Do not add claims that Data Analyst has not supported. Ask the user before choosing audience tone, narrative frame, or section structure when that decision materially changes the output. Ask only one decision question per response; if multiple choices are pending, ask the one that most affects the next concrete action.

Before drafting visible copy, decide whether the visual actually needs it. If the visual can carry the meaning on its own, prefer deleting language to decorating the artifact with filler.

## Button-Ready Choices

Present one narrative decision at a time in this strict format:

```text
Choose one:
A. Short option label - one sentence explaining the tradeoff.
B. Short option label - one sentence explaining the tradeoff.
C. Short option label - one sentence explaining the tradeoff.
```

Use no more than four options unless the user asks for a broader menu. Include `D. Something else - describe the tone, frame, posture, or structure you want.` when the user may want a custom path. Stop after presenting choices and wait for the user. Do not include a second `Choose one:` block in the same response.

## Language Load Contract

Pick the lightest output that does the job.

- `silent brief`: no new visible copy; provide only framing guidance for Designer.
- `minimal copy`: a title, tiny caption, or necessary caveat only.
- `guided narrative`: concise title, subtitle, and annotation set.
- `editorial narrative`: fuller narrative spine for explanatory work.

Default by posture:

- `Explanatory` usually needs `guided narrative` or `editorial narrative`.
- `Balanced` usually needs `minimal copy` or `guided narrative`.
- `Data-art-led` usually needs `silent brief` or `minimal copy`.

For collection-like datasets with strong visual source material, preserve both a restrained utility path and a more atmospheric data-art path until the user or orchestrator chooses between them. Do not collapse to a product-style framing merely because browseability matters.

## Workflow

1. Confirm the chosen analytical direction.
   Ask only which Analyst candidate the user wants to pursue first. Ask about audience in a later turn if it is still needed.

2. Confirm the narrative posture or inherit it from the orchestrator.
   If posture is missing and it changes whether visible copy is needed, ask about posture before writing.

   Do not assume that a `browseable shelf`, `archive`, `library`, or `explorer` direction automatically implies a `Balanced` posture. Those framings can support either a `Balanced` explorer or a `Data-art-led` explorer depending on how much meaning should come from composition versus interface chrome.

3. Decide the language load.
   Choose the lightest contract that still helps the audience understand the piece.

4. Build the story spine only if needed.
   Draft the opening question, key observation, supporting sequence, turning point, caveat, and takeaway only when the selected language load calls for it.

   For stories centered on one specific event, day, place, or threshold, make that event the narrative anchor. Do not split the opening across multiple competing labels, tooltips, or section titles that restate the same idea. Merge duplicate framing into one clear opening beat.

5. Draft only the language that earns its place.
   Every visible text element must justify itself as one of:
   - orienting
   - evidencing
   - qualifying
   - instructing

   If a candidate line does none of these, cut it.

   Do not compensate for a weak or generic layout by adding more framing copy. If the piece needs too many lines to feel specific, the composition problem belongs upstream with Designer and Critic.

6. Run an anti-trope edit.
   Remove common AI writing habits before showing copy to the user or handing it to Designer. Prefer concrete nouns, active verbs, specific evidence, and human editorial rhythm. Read `references/anti-ai-tropes.md` when writing or revising visible copy.

   Run a title and label rewrite pass for generic lines. Placeholder phrases such as `high point`, `prominent`, `quieter months`, `what this shows`, or `clear pattern` are banned unless they are demonstrably the most precise wording. If a line could fit another dataset with only the noun swapped, rewrite it or cut it.

7. Handoff to Critic and Designer.
   Provide a concise handoff with:
   - `posture`
   - `language_load`
   - `text_budget`
   - `visible_text_inventory`
   - `must_keep_text`
   - `optional_text`
   - `forbidden_phrases`
   - `final_visible_copy`
   - key claim or question, if needed
   - annotation priorities
   - caveats that must remain visible

   `visible_text_inventory` should be a flat list of every visible text surface the current brief permits, such as title, caption, note trigger, tooltip label, or detail label. If a visible text surface is not named in the inventory, Designer should treat it as unauthorized by default.

   `forbidden_phrases` should list weak or overused phrasings that must not reappear during design. `final_visible_copy` should include the exact approved title, subtitle, section headers, readouts, button labels, and persistent helper lines, or explicitly say when a surface should be assistive-only.

## Hard Rules

- Do not clean, join, or supplement data.
- Do not perform primary analysis unless checking whether a phrase is supported.
- Do not prescribe final visual style; suggest narrative needs that Designer should consider.
- Ban poetic obviousness, decorative metaphor, and restatement of what is plainly visible.
- If the visual already carries the meaning, prefer deleting text.

## Reference

Read `references/story-structures.md` when choosing a narrative frame, deciding whether a story spine is needed, writing annotations, or preparing a storyboard. Read `references/anti-ai-tropes.md` before finalizing visible titles, subtitles, section copy, annotations, or caveats.
