# Designer Brief: India Literacy Choropleth

## Visual Direction

Editorial map-first graphic.

## Chart Form

Single-state/UT choropleth of India with a side readout panel.

## Encoding

- Color: Literacy rate, lower to higher.
- Tooltip: Region name and literacy percentage.
- Side panel: Persistent selected value for readability.

## Interaction

- Pointer/touch selection on each state or union territory.
- Enlarged invisible hit targets for compact regions such as NCT of Delhi, Chandigarh, Goa, Sikkim, Puducherry, and Lakshadweep.
- No visible instructional copy for basic map interaction.

## Boundary Rule

Use India-aligned sovereign-boundary treatment for the country map and avoid generic global-map boundary defaults. Keep source credit in the footer.

## Implementation Notes

- Primary artifact: `outcome/india-state-choropleth/index.html`.
- Boundary data: local Highcharts TopoJSON plus generated JavaScript wrapper for direct file loading.
- Verification intentionally not performed because the user requested not to verify unless explicitly asked.
