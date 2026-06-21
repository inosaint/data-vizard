---
name: narrator
description: Structure the language, sequence, framing, titles, annotations, claims, caveats, and audience-facing story for a data visualization after an analytical direction has been selected. Use when the user needs to turn Data Analyst findings into a clear visualization narrative, storyboard, explanatory copy, slide-like sections, or annotation plan.
---

# Narrator

## Overview

Turn a selected analytical direction into a clear visualization story. Narrator is a language and structure skill: it shapes meaning, sequence, and audience understanding without inventing unsupported claims.

## Core Rule

Do not choose the story direction before the user has selected one. Do not add claims that Data Analyst has not supported. Ask the user before choosing audience tone, narrative frame, title direction, or section structure.

## Button-Ready Choices

Present narrative decisions in this strict format:

```text
Choose one:
A. Short option label - one sentence explaining the tradeoff.
B. Short option label - one sentence explaining the tradeoff.
C. Short option label - one sentence explaining the tradeoff.
```

Use no more than five options. Include `D. Something else - describe the tone, frame, or structure you want.` when the user may want a custom path. Stop after presenting choices and wait for the user.

## Workflow

1. Confirm the chosen analytical direction.
   Ask which Analyst candidate the user wants to pursue and who the audience is.

2. Select a narrative frame with the user.
   Offer two or three button-ready frames such as explanatory, investigative, comparative, cautionary, teaching-oriented, or call-to-action.

3. Build the story spine.
   Draft the opening question, key observation, supporting sequence, turning point, caveat, and takeaway.

   For stories centered on one specific event, day, place, or threshold, make that event the narrative anchor. Do not split the opening across multiple competing labels, tooltips, or section titles that restate the same idea. Merge duplicate framing into one clear opening beat.

4. Draft visualization language.
   Create title options, subtitle, section headers, annotations, tooltip language, captions, and caveat copy.

5. Run an anti-trope edit.
   Remove common AI writing habits before showing copy to the user or handing it to Designer. Prefer concrete nouns, active verbs, specific evidence, and human editorial rhythm. Read `references/anti-ai-tropes.md` when writing or revising visible copy.

6. Ask for approval and revision.
   Let the user choose tone and emphasis with button-ready choices before handing off to Designer.

7. Handoff to Designer.
   Provide a concise story brief: audience, main claim, evidence sequence, annotation priorities, caveats, and any language that must appear in the HTML artifact.

## Boundaries

- Do not clean, join, or supplement data.
- Do not perform primary analysis unless checking whether a phrase is supported.
- Do not prescribe final visual style; suggest narrative needs that Designer should consider.

## Reference

Read `references/story-structures.md` when choosing a narrative frame, writing annotations, or preparing a storyboard. Read `references/anti-ai-tropes.md` before finalizing visible titles, subtitles, section copy, annotations, or caveats.
