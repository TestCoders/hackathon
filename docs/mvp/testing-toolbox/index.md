---
title: Testing toolbox
description: Hackathon-onderwerpen die concreet gereedschap opleveren voor testers en developers.
---

# Testing toolbox

Deze categorie draait om **gereedschap dat je de dag erna al gebruikt**. Geen demo's die in een repo verdwijnen, maar tooling die het werk van testers en developers meetbaar sneller of beter maakt.

| Onderwerp | Waar het over gaat | Hoofdtechniek |
|-----------|--------------------|---------------|
| [Coding guidelines voor AI](./coding-guidelines-ai) | Machine-leesbare afspraken zodat AI-agenten code in TestCoders-stijl schrijven | Markdown, linting, agent-config |
| [Set aan AI-skills](./ai-skills-set) | Herbruikbare skills voor review, refinement, testgeneratie, bugfixes en implementatie | Prompt engineering, skill-bestanden |
| [Browser plugin voor locators](./browser-plugin-locators) | Extensie die stabiele locators genereert vanuit de browser | Chrome Extension MV3, JS |
| [Testdatagenerator](./testdatagenerator) | Geldige, realistische Nederlandse testdata uit een schema | CLI/API, Faker, elfproef |
| [AI testpipeline / agent tool](./ai-testpipeline) | Agent die faalanalyses doet in CI en fixes voorstelt | CI, LLM-API, GitHub API |

## Waarom deze categorie

Testers verliezen veel tijd aan repeterend werk: locators zoeken, testdata verzinnen, uitzoeken waarom een test rood is, en AI-output corrigeren die niet aan de huisstijl voldoet. Elk onderwerp hierboven snijdt één van die tijdvreters weg.

## Onderlinge samenhang

De onderwerpen zijn los te bouwen, maar versterken elkaar:

- De **coding guidelines** zijn de input voor de **AI-skills**.
- De **testdatagenerator** levert data aan tests die de **AI-testpipeline** analyseert.
- De **browser plugin** levert locators die in diezelfde tests belanden.

Bouw je meerdere onderwerpen op dezelfde dag? Spreek dan vooraf één gedeeld voorbeeldproject af, zodat de demo's op elkaar aansluiten.
