---
title: Break-it hackathon
description: Kwetsbare oefenwebsite, chaos-/fuzztool en break-skills als één samenhangend break-it-geheel.
---

# Break-it hackathon

Deze categorie draait de hackathon om: je levert niet iets dat **werkt**, maar iets dat **kapotmaakt**. Testen is tenslotte het vak van bedenken hoe iets misgaat. Dit MVP combineert drie bouwstenen die samen één demo vormen: een doelwit om op los te gaan, gereedschap om aan te vallen en skills om systematisch te werk te gaan.

```
break-it skills  ──┐
                   ├──►  break-it website  ──►  scoreboard
break-it tooltje ──┘
```

::: danger Alleen op eigen doelwitten
Alles in deze categorie richt zich uitsluitend op de **eigen, tijdens de hackathon gebouwde** applicatie in een lokale of afgeschermde omgeving. Geen productiesystemen, geen klantomgevingen, geen systemen van derden — ook niet "even snel om te kijken of het werkt". De website draait lokaal of achter authenticatie, nooit open op het publieke internet. Documenteer elke ingebouwde kwetsbaarheid, zodat niemand er per ongeluk mee gaat leven.
:::

## 1. Projectnaamsvermelding
**Naam:** Break-it hackathon — kwetsbare oefenapp, fuzz-tooltje en break-skills
**Versie:** MVP 1.0
**Datum:** [Datum]
**Team:** [Namen van de deelnemers]

---

## 2. Doelstelling

### Hoofddoel
Eén samenhangend break-it-geheel opleveren: een bewust kwetsbare oefenwebsite als doelwit, een chaos-/fuzzingtool die dat doelwit geautomatiseerd aanvalt, en een set AI-skills die een tester helpt om gericht aanvalswaarden en misbruikscenario's te bedenken — met een scoreboard dat live bijhoudt welke ingebouwde kwetsbaarheden gevonden zijn.

### Subdoelen
- De oefenwebsite bevat minimaal **8 ingebouwde defecten**, verdeeld over functionele bugs, validatiefouten, security-kwetsbaarheden en toegankelijkheidsproblemen.
- De fuzz-/chaostool dekt minimaal **4 aanvalscategorieën** (lege waarden, extreme lengtes, verkeerde types, injectiepatronen) en heeft een **veiligheidsslot**: hij draait alleen tegen hosts in een expliciete allowlist, standaard alleen localhost.
- Minimaal **2 AI-skills** — randgevallen bedenken en misbruikscenario's opstellen — leveren aanvalswaarden en scenario's die direct op de website en via de tool inzetbaar zijn.
- Het **scoreboard** kent automatisch punten toe zodra de tool of een skill een bekend defect raakt, niet alleen bij handmatig indienen.
- Minimaal **5 van de 8 defecten** worden tijdens de demo live gevonden door de combinatie van tool en skills.
- Alles draait met **één commando** lokaal of afgeschermd.

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Exploratory tester | Zoekt gericht naar wat er misgaat | Inspiratie voor aanvalshoeken en gereedschap om ze snel uit te voeren |
| Test automation engineer | Wil negatieve scenario's automatiseren | Kant-en-klare aanvalswaarden en een tool die ze systematisch afvuurt |
| Developer | Wil eigen werk hard aanpakken vóór oplevering | Snel zien welke invoer zijn code onderuit haalt, reproduceerbaar |
| Trainer / begeleider | Leidt nieuwe testers of sollicitanten op | Herhaalbare, objectief scorebare oefenopdracht |

---

## 4. Kernfunctionaliteiten (Must-Have)

### Het doelwit
✅ **Kwetsbare oefenwebsite**
- Een kleine webshop of boekingsapplicatie met minimaal 8 ingebouwde defecten, in oplopende moeilijkheid, gedocumenteerd voor de beheerder.

✅ **Scoreboard**
- Live ranglijst die automatisch punten toekent zodra een defect wordt geraakt — door een deelnemer, de fuzztool of een skill — en bijhoudt welke categorieën al gevonden zijn.

### De aanval
✅ **Fuzzing vanaf de commandline**
- Een URL, methode en voorbeeld-payload in; de tool varieert systematisch op elk veld met minimaal 4 aanvalscategorieën en rapporteert verdacht gedrag (5xx, stacktraces, trage respons).

✅ **Veiligheidsslot op doelwitten**
- De tool draait alleen tegen hosts in een expliciete allowlist (standaard localhost) en weigert duidelijk bij elk ander doelwit.

### De tester
✅ **Skill: Randgevallen bedenken**
- Neemt een formulier of endpoint en levert per veld aanvalswaarden met de reden waarom elke waarde interessant is.

✅ **Skill: Misbruikscenario's**
- Denkt vanuit een kwaadwillende gebruiker: stappen overslaan, dubbel versturen, verborgen waarden manipuleren.

---

## 5. Nice-to-Have
- Uitbreiden naar 12 defecten en 6 aanvalscategorieën (de volledige oorspronkelijke scope).
- Extra skills: kapotte testdata genereren, bevindingen reproduceerbaar rapporteren.
- Chaos-modus: vertraagde responses, afgebroken verbindingen, foutcodes injecteren.
- Aanvalsvarianten automatisch afleiden uit een OpenAPI-specificatie.
- Meerdere moeilijkheidsniveaus en een beheerdersweergave achter een wachtwoord.
- Teams in plaats van individuen op het scoreboard.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- De oefenwebsite start met één commando en bevat alle 8 defecten, gedocumenteerd.
- De fuzztool draait live tegen de oefenwebsite en vindt zelfstandig minimaal 3 defecten.
- Minimaal 2 skills leveren bruikbare aanvalswaarden of scenario's op, live gedemonstreerd.
- Het scoreboard update automatisch zodra tool of skill een defect raakt.
- De tool weigert aantoonbaar te draaien tegen een host buiten de allowlist — live getoond.
- In totaal worden tijdens de demo minimaal 5 van de 8 defecten gevonden.
