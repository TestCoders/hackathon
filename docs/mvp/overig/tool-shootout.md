---
title: Tool shootout
description: Dezelfde testcase in meerdere tools bouwen en objectief vergelijken op snelheid, stabiliteit en leesbaarheid.
---

# Tool shootout

## 1. Projectnaamsvermelding
**Naam:** Tool shootout — testtools objectief vergelijken
**Versie:** MVP 1.0
**Datum:** [Datum]
**Team:** [Namen van de deelnemers]

---

## 2. Doelstelling

### Hoofddoel
Dezelfde testcase in meerdere testtools bouwen en op vaste, meetbare criteria vergelijken, zodat TestCoders bij een toolkeuze kan verwijzen naar cijfers in plaats van naar voorkeuren.

### Subdoelen
- **Minimaal 3 tools** vergelijken op exact dezelfde testcase — bijvoorbeeld Playwright, Cypress en Selenium, of drie API-testtools.
- Eén **identiek testscenario** van minimaal 5 stappen, inclusief een wachtsituatie en een assertion op dynamische content.
- **6 vaste meetcriteria**: opzettijd, uitvoeringstijd, regels code, stabiliteit over 10 runs, kwaliteit van de foutmelding en kwaliteit van de rapportage.
- Alle metingen op **dezelfde machine tegen dezelfde applicatie**, zodat de vergelijking eerlijk is.
- Een **vergelijkingsmatrix** met de cijfers plus een advies per situatie: "kies X als…, kies Y als…".
- Alle code in **één repository**, per tool een eigen map, zodat iedereen de meting kan herhalen.

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Tech lead / testmanager | Kiest een tool voor een nieuw project | Onderbouwing op cijfers in plaats van op voorkeur van de laatste spreker |
| Consultant bij een klant | Krijgt de vraag "welke tool moeten wij nemen?" | Een verdedigbaar antwoord met bewijs, toegespitst op de situatie |
| Tester die wil bijleren | Kent één tool goed | Dezelfde case in andere tools zien; verschillen direct herkennen |
| Sales | Positioneert TestCoders als kennispartner | Een deelbaar, publiceerbaar vergelijkingsartikel |

---

## 4. Kernfunctionaliteiten (Must-Have)

### Voor de vergelijking
✅ **Eén identiek testscenario in elke tool**
- Hetzelfde scenario, dezelfde applicatie, dezelfde assertions. Alleen de tool verschilt, zodat het verschil ook echt aan de tool toe te schrijven is.

✅ **Vaste, meetbare criteria**
- Opzettijd, uitvoeringstijd, regels code, stabiliteit over 10 runs, foutmeldingkwaliteit en rapportage — vooraf gedefinieerd, niet achteraf toegevoegd.

✅ **Stabiliteitsmeting over meerdere runs**
- Elke suite draait 10 keer; het aantal onterechte failures is een expliciet criterium in plaats van een indruk.

### Voor het team
✅ **Vergelijkingsmatrix met advies**
- Eén tabel met alle cijfers naast elkaar, gevolgd door een advies per situatie in plaats van één winnaar.

✅ **Reproduceerbare opzet**
- Eén repository met per tool een map, een README met de exacte draaistappen en een script dat de metingen herhaalt.

✅ **Eerlijke rapportage**
- Ook wat tegenvalt of niet gemeten kon worden staat erin, inclusief de ervaring van het team met de tool.

---

## 5. Nice-to-Have
- Vierde en vijfde tool toevoegen.
- Metingen automatisch in CI draaien, zodat de vergelijking actueel blijft bij nieuwe tool-versies.
- Ook AI-ondersteuning per tool meewegen: hoeveel helpt een agent binnen dit framework?
- Kosten meenemen: licenties, CI-minuten, benodigde infrastructuur.
- Publiceren als artikel op de [TestCoders-website](/mvp/testcoders/website).
- Leercurve meten met een tester die de tool nog niet kent.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- Hetzelfde scenario draait groen in alle 3 de tools.
- Alle 6 criteria zijn voor elke tool gemeten en ingevuld — geen lege cellen.
- De stabiliteitsmeting van 10 runs per tool is uitgevoerd en de uitkomsten staan in de matrix.
- De vergelijkingsmatrix is af en bevat een advies per situatie.
- Iemand buiten het team herhaalt een meting met alleen de README.
- Het resultaat is in 5 minuten te presenteren en te begrijpen zonder toolkennis.
