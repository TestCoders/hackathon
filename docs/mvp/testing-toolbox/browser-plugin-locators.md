---
title: Browser plugin voor locators
description: Browserextensie die stabiele, leesbare locators genereert voor elk element op een pagina.
---

# Browser plugin voor locators

## 1. Projectnaamsvermelding
**Naam:** LocatorPicker — browserextensie voor stabiele locators
**Versie:** MVP 1.0
**Datum:** [Datum]
**Team:** [Namen van de deelnemers]

---

## 2. Doelstelling

### Hoofddoel
Een browserextensie opleveren waarmee een tester met één klik op een element een stabiele, leesbare locator naar het clipboard kopieert, zodat locators zoeken van minuten naar seconden gaat.

### Subdoelen
- Locators genereren in minimaal **3 formaten**: CSS-selector, XPath en een framework-snippet (Playwright of Selenium).
- Een **prioriteitsstrategie** die eerst `data-testid` probeert, dan `id`, dan toegankelijke rol/naam, en pas als laatste een structurele XPath.
- Elke gegenereerde locator wordt **direct in de pagina gevalideerd**: de extensie toont hoeveel elementen matchen en markeert een locator als onbruikbaar bij meer dan één match.
- Van klik tot locator op het clipboard in **onder de 3 seconden**.
- Werkend in Chrome of Edge op minimaal **3 verschillende publieke websites**.

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Test automation engineer | Schrijft UI-tests in Playwright, Cypress of Selenium | Locators die niet breken bij de volgende release; direct kopieerbare snippets |
| Handmatige tester die automatiseert | Kent de DOM beperkt | Hulp bij kiezen van de juiste locator, zonder DevTools-kennis |
| Developer | Moet de applicatie testbaar maken | Zichtbaar krijgen waar `data-testid` ontbreekt |
| Reviewer van testcode | Beoordeelt kwaliteit van locators | Objectief criterium: is deze locator uniek en stabiel? |

---

## 4. Kernfunctionaliteiten (Must-Have)

### Voor de tester
✅ **Element-picker met highlight**
- Een pick-modus activeer je vanuit het extensie-icoon; bij hover krijgt het element een rand en een tooltip met de voorgestelde locator.

✅ **Meerdere locatorformaten naast elkaar**
- Het paneel toont CSS, XPath en de framework-snippet tegelijk, elk met een eigen kopieerknop.

✅ **Stabiliteitsindicator**
- Elke locator krijgt groen, oranje of rood op basis van de gebruikte strategie en het aantal matches, met één zin uitleg waarom.

✅ **Kopiëren naar clipboard**
- Eén klik kopieert de gekozen variant; een korte bevestiging laat zien dat het gelukt is.

### Voor de developer
✅ **Waarschuwing bij ontbrekende testhooks**
- Als er geen `data-testid`, `id` of toegankelijke naam beschikbaar is, meldt de extensie dat expliciet en stelt het attribuut voor dat toegevoegd zou moeten worden.

✅ **Instelbaar testattribuut**
- In de opties stel je in welk attribuut als eerste gebruikt wordt (`data-testid`, `data-cy`, `data-qa`), zodat de extensie past bij de conventie van het project.

---

## 5. Nice-to-Have
- Lijst met verzamelde locators exporteren als kant-en-klare page object.
- Firefox-versie naast Chrome/Edge.
- Shadow DOM en iframes volledig ondersteunen.
- Historie van eerder gekozen locators per domein.
- AI-suggestie voor een betekenisvolle variabelenaam bij het element.
- Herkennen van dynamisch gegenereerde class-namen en die actief vermijden.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- De extensie is te installeren via "load unpacked" en werkt in Chrome of Edge.
- Op 3 verschillende websites levert de picker een werkende, unieke locator.
- De gegenereerde Playwright- of Selenium-snippet draait ongewijzigd in een echte test.
- De stabiliteitsindicator geeft zichtbaar rood bij een element zonder bruikbare attributen.
- Kopiëren naar clipboard werkt in één klik, live gedemonstreerd.
