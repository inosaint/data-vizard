# Fidelity Plan

## Must Survive From Selected Direction

- Pack-to-breakaway behavior should read as a race replay, not a static line chart.
- Exactly nine selected roles should occupy clear lanes.
- The sticky scene should read as a side-on retro broadcast, not an abstract diagram.
- NES-like pixel compression should remain visible in the HUD, lane striping, and runner drawing style.
- The sticky composition should prioritize `HUD + track`, with only minimal crowd or stadium scenery.
- Each role should appear as a tiny runner sprite in its own lane, with the role name outside the track rather than embedded as a lane placard.
- The top HUD should function as a live ranking board, showing current order, role names, and salaries for the active step.
- All nine role names should remain permanently readable down the left margin of the track.
- Hover states must expose role, year, salary, and gain.
- The source link must remain visibly linked to the public Welcome to the Jungle salaries page.

## Illustrative Mood Only

- Sports-photo energy from the reference image is inspirational, not literal evidence.
- Literal game timing and score semantics are inspirational, not factual evidence.

## Rendering Approach

- `D3 + SVG` for pixel-faithful lane geometry, runner motion, HUD updates, callout updates, and hover interactions.
- DOM for story steps, source link, hero copy, and legend.

## Required Interactions

- Scroll changes the replay year and reorders the feel of the race.
- Hover on any runner shows a local tooltip with exact values.
- Active callouts update by step and stay close to the marks they describe.

## Material Departures To Avoid

- Reverting to “4 boxes and a chart” instead of a replay.
- Smoothing the piece back into rounded editorial athletics styling.
- Letting crowd or stadium scenery take space away from the data-bearing lanes.
- Replacing runners with abstract dots, pills, or smooth chart markers.
- Reducing the HUD to a static title bar with no changing race information.
- Hiding role names inside transient hover only or forcing readers to rely on the HUD alone.
- Showing all roles again and losing the nine-lane clarity.
- Hiding the source in non-linked footer text.
- Shipping runners without hover tooltips.
