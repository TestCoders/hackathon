---
title: Framework from scratch
description: Zelf bouwen wat je normaal uit een package manager haalt — en daardoor begrijpen hoe het werkt.
---

# Framework from scratch

Deze categorie draait om **zelf bouwen wat je normaal importeert**. Geen Playwright, geen RestAssured, geen JUnit: je schrijft de testrunner, de assertions en de rapportage zelf.

| Onderwerp | Waar het over gaat | Hoofdtechniek |
|-----------|--------------------|---------------|
| [API-testtool maken](./api-testtool) | Eigen testrunner en assertion-library voor HTTP-API's | HTTP-client, runner, reporter |

## Waarom deze categorie

Wie een framework van binnen kent, gebruikt het beter en debugt sneller. De meeste testers weten hoe ze een test schrijven, maar niet wat er gebeurt tussen `run` en het rapport. Eén dag zelf bouwen verandert dat blijvend.

Daarnaast is er een praktische kant: bij klanten met strenge restricties op externe dependencies is een eigen, kleine tool soms de enige optie.

## Spelregels

::: warning Geen bestaand testframework
De kern — testregistratie, uitvoering, assertions en rapportage — schrijf je zelf. Een HTTP-client en een JSON-parser uit de standaardbibliotheek of als losse dependency zijn toegestaan; JUnit, pytest, Jest, RestAssured en vergelijkbare frameworks niet.
:::

- Kies één taal en blijf erbij. Wisselen kost meer tijd dan het oplevert.
- Test je eigen tool met je eigen tool zodra de basis staat.
- Neem een publieke test-API als doelwit, zodat je niet ook nog een backend hoeft te bouwen.
