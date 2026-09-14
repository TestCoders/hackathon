---
title: Iets bouwen voor TestCoders
description: Hackathon-onderwerpen die interne tooling en de eigen online aanwezigheid van TestCoders verbeteren.
---

# Iets bouwen voor TestCoders

Deze categorie draait om **onszelf als klant**. De opdrachtgever zit in dezelfde ruimte, feedback is meteen te halen en wat werkt, gaat in gebruik.

| Onderwerp | Waar het over gaat | Hoofdtechniek |
|-----------|--------------------|---------------|
| [Declaratie-app](./declaratie-app) | Onkosten declareren vanaf je telefoon, met bonfoto en OCR | Mobile web / PWA, OCR |
| [Website](./website) | Nieuwe TestCoders-website met vacatures en kennisartikelen | Static site, CMS |
| [Casus](./casus) | Bibliotheek van klantcasussen als sales- en kennisinstrument | CRUD-app, zoeken |
| [Uren](./uren) | Urenregistratie die in seconden klaar is | Web-app, export |
| [AI-chatbot voor de website](./ai-chatbot) | Chatbot die bezoekersvragen beantwoordt uit de eigen content | RAG, LLM-API |

## Waarom deze categorie

Consultants verliezen elke week tijd aan administratie die niets bijdraagt aan het klantresultaat: uren invullen, bonnetjes bewaren, achteraf reconstrueren wat je ook alweer deed. Tegelijk laat de website kansen liggen bij kandidaten en klanten. Beide zijn in een hackathon aan te pakken.

## Onderlinge samenhang

::: tip Drie bouwstenen van één portaal
[Declaratie-app](./declaratie-app), [Casus](./casus) en [Uren](./uren) zijn bewust als losse onderwerpen opgenomen, zodat drie teams er parallel aan kunnen werken. Ze delen wel dezelfde kern: **een medewerker, een klant/opdracht en een periode**.

Werken er meerdere teams in deze categorie? Spreek dan vooraf één gezamenlijk datamodel af voor medewerker, klant en opdracht. Dan passen de drie MVP's aan het eind van de dag in één demo aan elkaar.
:::

[Website](./website) en [AI-chatbot](./ai-chatbot) horen op dezelfde manier bij elkaar: de content van de website is de kennisbron van de chatbot. Bouw je beide, zet dan de content vroeg op de dag vast.

## Randvoorwaarden

- **Geen echte personeelsgegevens** in de demo. Gebruik verzonnen data — bijvoorbeeld uit de [testdatagenerator](/mvp/testing-toolbox/testdatagenerator).
- Bestaande huisstijl aanhouden waar dat kan, zodat een demo er meteen uitziet als TestCoders.
- Bespreek vooraf wie na de hackathon eigenaar wordt van wat er werkend blijft.
