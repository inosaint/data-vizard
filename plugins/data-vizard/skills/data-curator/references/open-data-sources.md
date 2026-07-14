# Open API Resources

Use this file as a living shortlist of public APIs and open-data catalogs that Data Curator can evaluate for future visualization projects. Add to it over time. Do not treat every source here as automatically recommended; check fit, licensing, schema quality, and stability for each brief.

## Evaluation Rubric

Before recommending any source from this list, check all five:

| Criterion | Questions to ask |
|---|---|
| **Fit** | Does the data shape match what this brief actually needs? |
| **License** | Is commercial or derivative use permitted? Attribution required? |
| **Schema quality** | Are key fields consistently populated, typed, and documented? |
| **Stability** | Is this API actively maintained? Are there known sunset or rate-limit risks? |
| **Rate limits** | Can the project's data volume stay within free-tier limits? |

## Sunset Tracking

Public APIs change. If an entry in this file has a `⚠ Status:` note, treat it as uncertain until re-verified. When adding new sources, include a `Last verified:` line with the date checked. If a source goes dark or terms change, update the entry with a status note rather than silently removing it — the history is useful.

## Collection And Archive APIs

- Metropolitan Museum of Art Collection API
  URL: [metmuseum.github.io](https://metmuseum.github.io/)
  Good for: object collections, artist and medium exploration, timelines, geography of origin, collection browsing
  Notes: strong example of an official institution-backed collection API

- Art Institute of Chicago API
  URL: [api.artic.edu/docs](https://api.artic.edu/docs/)
  Good for: artwork browsing, color analysis, tombstone metadata, image-rich collection interfaces
  Notes: useful when a project needs strong image support and object-level metadata

- Smithsonian Open Access
  URL: [si.edu/openaccess/devtools](https://www.si.edu/openaccess/devtools)
  Good for: large cross-disciplinary museum and culture collections, image-led exploration, historical artifacts
  Notes: requires a key

- Europeana APIs
  URL: [apis.europeana.eu](https://apis.europeana.eu/)
  Good for: multi-institution heritage collections, cross-country archive exploration, library and museum joins
  Notes: requires a key

- Chronicling America API
  URL: [chroniclingamerica.loc.gov/about/api](https://chroniclingamerica.loc.gov/about/api/)
  Good for: historic newspapers, archive browsing, timeline and topic exploration
  Notes: strong fit for journalism, media history, and record-by-record archive artifacts

- Internet Archive Advanced Search API
  URL: [archive.org/services/docs/api/advancedsearch.html](https://archive.org/services/docs/api/advancedsearch.html)
  Good for: books, films, audio, and software archive exploration
  Notes: useful for specimen-level browsing and large public-domain collections

- The Pudding reference example
  URL: [pudding.cool/2026/06/menu-collection](https://pudding.cool/2026/06/menu-collection/)
  Good for: a model of collection-backed, record-by-record exploratory visualization
  Notes: use as a design and workflow reference for shaping archive-style datasets, not as a raw API source

## Knowledge, Research, And Media

- Wikidata SPARQL
  URL: [query.wikidata.org](https://query.wikidata.org/)
  Good for: biographies, entity relationships, timelines, knowledge graphs, and semantic joins
  Notes: especially strong as an enrichment layer

- OpenAlex
  URL: [docs.openalex.org](https://docs.openalex.org/)
  Good for: scholarly works, citation exploration, institution and topic mapping
  Notes: strong fit for research landscapes and paper collections

- Crossref REST API
  URL: [crossref.org documentation](https://www.crossref.org/documentation/retrieve-metadata/rest-api/)
  Good for: publication metadata, DOI-linked corpora, research discovery
  Notes: complements OpenAlex for scholarly metadata work

- Openverse API
  URL: [api.openverse.org/v1](https://api.openverse.org/v1/)
  Good for: Creative Commons images and audio, media discovery, illustration sourcing for concept boards
  Notes: useful both as a dataset source and as supporting asset discovery

## Civic And Public Data

- Data.gov CKAN API
  URL: [catalog.data.gov](https://catalog.data.gov/)
  Good for: discovering U.S. federal datasets and API-backed public data
  Notes: a good first stop when the topic is governmental or public-service related

- data.gov.in
  URL: [data.gov.in](https://www.data.gov.in/)
  Good for: Indian government datasets, ministry-level public data, national and state-facing civic stories
  Notes: especially useful for India-focused projects; evaluate API/export availability per dataset

- Socrata Discovery API
  URL: [dev.socrata.com](https://dev.socrata.com/)
  Good for: discovering city and state open-data portals and live civic endpoints
  Notes: especially useful for finding local issue datasets quickly

- OpenCity
  URL: [opencity.in](https://opencity.in/)
  Good for: Indian city and urban governance datasets, civic issue tracking, local infrastructure and planning topics
  Notes: useful when the brief is city-focused in India; verify freshness and underlying source provenance per dataset

- NYC Open Data 311
  URL: [opendata.cityofnewyork.us](https://opendata.cityofnewyork.us/)
  Good for: service requests, noise complaints, neighborhood issue mapping, urban operations stories
  Notes: direct example of a high-value civic endpoint

- U.S. Census Bureau API
  URL: [census.gov/data/developers.html](https://www.census.gov/data/developers.html)
  Good for: demographics, tract-level comparisons, denominators, and civic normalization
  Notes: requires a key; especially useful as enrichment

- SEC EDGAR data APIs
  URL: [sec.gov EDGAR API documentation](https://www.sec.gov/edgar/sec-api-documentation)
  Good for: public company filings, financial-document exploration, market and corporate accountability stories
  Notes: better for filing/document interfaces than simple stock charts

## Weather, Maps, And Infrastructure

- Open-Meteo
  URL: [open-meteo.com docs](https://open-meteo.com/en/docs)
  Good for: weather forecasts, climate time series, environmental comparison views
  Notes: easy to prototype against

- NOAA / NWS Weather API
  URL: [weather.gov services web API](https://www.weather.gov/documentation/services-web-api)
  Good for: official U.S. forecasts, alerts, and observations
  Notes: strong fit when source authority matters

- Open Charge Map API
  URL: [openchargemap.org API docs](https://openchargemap.org/site/develop/api)
  Good for: EV infrastructure maps, station availability landscapes, connector/network comparisons
  Notes: requires a key

## General Discovery And Research Platforms

- Kaggle
  URL: [kaggle.com/datasets](https://www.kaggle.com/datasets)
  Good for: finding community-published datasets across many domains, especially when an official API or portal is hard to locate
  Notes: treat as a discovery and acquisition platform, not a default source of truth; prefer official provenance when available and review licensing carefully

## Maintenance Rules

- Prefer official or institution-backed APIs over unofficial mirrors.
- Record the actual chosen endpoint, parameters, and license in project handoff notes.
- If a source from this list proves unstable, low quality, or poorly licensed, leave it in the file only with a caution note or remove it in a future release.
- Keep this file additive and practical: include only sources that are plausibly useful for future Data Vizard projects.
