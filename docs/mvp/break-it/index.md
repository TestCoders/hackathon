---
title: Break-it hackathon
description: Niet bouwen maar breken — skills, een chaos-tooltje en een bewust kwetsbare oefenwebsite.
---

# Break-it hackathon

Deze categorie draait de hackathon om: je levert niet iets dat **werkt**, maar iets dat **kapotmaakt**. Testen is tenslotte het vak van bedenken hoe iets misgaat.

| Onderwerp | Waar het over gaat | Hoofdtechniek |
|-----------|--------------------|---------------|
| [Break-it skills](./skills) | AI-skills die een applicatie systematisch aanvallen | Prompt engineering, aanvalspatronen |
| [Break-it tooltje](./tooltje) | Chaos-/fuzzing-tool die een draaiende applicatie onder druk zet | Fuzzing, proxy, HTTP |
| [Break-it website](./website) | Bewust kwetsbare oefenwebsite met scoreboard | Web-app, opzettelijke bugs |

## Waarom deze categorie

Het beste manier om testers scherp te krijgen is ze laten breken. De drie onderwerpen vormen samen een compleet oefenterrein: een doelwit om op los te gaan, gereedschap om aan te vallen en skills om systematisch te werk te gaan.

## Onderlinge samenhang

De drie onderwerpen zijn los te bouwen maar vormen samen één demo:

```
break-it skills  ──┐
                   ├──►  break-it website  ──►  scoreboard
break-it tooltje ──┘
```

Bouwen meerdere teams hieraan? Spreek dan vroeg op de dag de **contract-URL** van de website af, zodat tooltje en skills daar aan het eind op gericht kunnen worden.

## Spelregels

::: danger Alleen op eigen doelwitten
Alles in deze categorie richt zich uitsluitend op de **eigen, tijdens de hackathon gebouwde** applicaties in een lokale of afgeschermde omgeving. Geen productiesystemen, geen klantomgevingen, geen systemen van derden — ook niet "even snel om te kijken of het werkt".
:::

- De kwetsbare website draait lokaal of achter authenticatie; nooit open op het publieke internet.
- Documenteer elke ingebouwde kwetsbaarheid, zodat niemand er per ongeluk mee gaat leven.
- Wat je bouwt is bedoeld voor oefening en onderwijs binnen TestCoders.
