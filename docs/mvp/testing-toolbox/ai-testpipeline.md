---
title: AI testpipeline / agent tool
description: Een keten van AI-skills die het testproces van ticket tot rapport structureert, herbruikbaar in elk project.
---

# AI testpipeline / agent tool

## 1. Projectnaamsvermelding
**Naam:** AI-testpipeline (skillketen)
**Versie:** MVP 1.0
**Datum:** [Datum]
**Team:** [Namen van de deelnemers]

---

## 2. Doelstelling

### Hoofddoel
Een keten van vijf op zichzelf staande AI-skills opleveren die het testproces van los ticket tot afgerond testrapport structureert — ticketanalyse, testcasegeneratie, een advies over handmatig of automatisch uitvoeren, de uitvoering zelf inclusief nieuwe automatisering, en een rapportage — zodat handmatig en automatisch testwerk niet meer ad hoc verloopt maar een herhaalbare, uitlegbare volgorde volgt. De keten is bewust generiek opgezet, zodat hij op meerdere projecten en in meerdere teams te installeren en te gebruiken is.

### Subdoelen
- **5 losse skills** die elk zelfstandig aan te roepen zijn én na elkaar een keten vormen: de output van stap *N* is bruikbare input voor stap *N+1*.
- Elke skill heeft een **eigen instructiebestand** met triggerwoorden en minimaal 1 uitgewerkt voorbeeld, in dezelfde opzet als de [set aan AI-skills](/mvp/testing-toolbox/ai-skills-set).
- De keten is **herbruikbaar**: zonder aanpassing aan de skills zelf ook te draaien op een tweede, niet vooraf voorbereid ticket of project.
- Skill 3 (handmatig/automatisch-advies) onderbouwt de keuze in één alinea, zodat die controleerbaar is.
- Van ticket tot rapport voor een eenvoudig voorbeeldticket **binnen 15 minuten** doorlopen, inclusief toelichting per stap.

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Test automation engineer | Zet tickets om in test- en automatiseringswerk | Een vaste, herhaalbare volgorde in plaats van steeds opnieuw uitvinden waar te beginnen |
| Handmatige tester | Voert het niet-geautomatiseerde deel uit | Duidelijk overzicht welke gevallen hij zelf moet uitvoeren en waarom |
| Developer | Levert het ticket op waar getest tegen wordt | Snel zicht op wat getest is en wat er is gevonden |
| Tech lead / PO | Bewaakt testdekking en voortgang | Eén leesbaar rapport per ticket in plaats van losse aantekeningen |

---

## 4. Kernfunctionaliteiten (Must-Have)

### De keten
✅ **Skill 1 — Ticketanalyse**
- Leest een ticket of user story, vat de scope samen en benoemt risicogebieden en acceptatiecriteria.

✅ **Skill 2 — Testcasegeneratie**
- Genereert vanuit de analyse een lijst testgevallen: happy path, randgevallen en foutscenario's.

✅ **Skill 3 — Handmatig/automatisch-advies**
- Beoordeelt per testgeval of het automatisch of handmatig uitgevoerd moet worden, met een onderbouwing op basis van stabiliteit, herhaalfrequentie en complexiteit.

✅ **Skill 4 — Uitvoering en automatisering**
- Voert de handmatige gevallen uit (of instrueert precies hoe) en genereert of vult nieuwe geautomatiseerde tests aan voor de gevallen die daarvoor zijn aangewezen.

✅ **Skill 5 — Rapportage**
- Bundelt de resultaten van alle vorige stappen tot één leesbaar rapport: wat is getest, wat is gevonden, wat is er geautomatiseerd.

### Voor herbruikbaarheid
✅ **Gedeelde structuur en documentatie**
- Alle 5 skills volgen dezelfde mapindeling en hebben een README met installatie-instructies, triggerwoorden en een voorbeeld van in- en output, zodat de keten in een ander project te installeren is zonder de skills zelf aan te passen.

---

## 5. Nice-to-Have
- De hele keten met één commando starten in plaats van 5 losse aanroepen.
- Koppeling met een ticketsysteem (Jira e.d.) zodat de keten automatisch start zodra een ticket de juiste status krijgt.
- Hergebruik van eerder gegenereerde testcases bij vergelijkbare tickets.
- Een dashboard met automatiseringsgraad per team of periode.
- Metrics over hoe vaak skill 3's advies afwijkt van wat een ervaren tester zou kiezen.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- Alle 5 skills draaien los, elk met minimaal 1 voorbeeld, live gedemonstreerd.
- De volledige keten wordt live doorlopen op één voorbeeldticket: van ticket tot rapport, zonder handmatig tussenvoegen van context.
- Dezelfde keten draait zonder aanpassing ook op een tweede, niet vooraf voorbereid ticket of project — toont de herbruikbaarheid.
- Skill 3's advies komt bij minimaal 4 van de 5 voorbeeldgevallen overeen met wat een ervaren tester zou kiezen.
- Skill 4 levert minimaal 1 nieuwe, werkende geautomatiseerde test op die aantoonbaar draait.
