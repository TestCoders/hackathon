---
title: Set aan AI-skills
description: Herbruikbare AI-skills voor code review, refinement, testgeneratie, bugfixes en implementatie.
---

# Set aan AI-skills

*Skills voor code review, refinement (user stories schrijven), testgeneratie, bugfixes en implementatie.*

## 1. Projectnaamsvermelding
**Naam:** Set aan AI-skills voor het testvak
**Versie:** MVP 1.0
**Datum:** [Datum]
**Team:** [Namen van de deelnemers]

---

## 2. Doelstelling

### Hoofddoel
Een bibliotheek van vijf herbruikbare, gedocumenteerde AI-skills opleveren die een team direct in zijn eigen repository kan installeren om terugkerend werk — review, refinement, testgeneratie, bugfixes en implementatie — te versnellen.

### Subdoelen
- **5 werkende skills**, elk met een eigen instructiebestand, duidelijke triggerwoorden en minimaal 1 uitgewerkt voorbeeld.
- Elke skill is **binnen 2 minuten** te installeren via kopiëren van een map of een install-script.
- Elke skill is getest op minimaal **2 verschillende inputs** en levert reproduceerbare output.
- De refinement-skill produceert user stories in vast formaat, inclusief **Gegeven/Als/Dan**-acceptatiecriteria.
- De testgeneratie-skill levert tests die **zonder aanpassing compileren en draaien** op de voorbeeldrepo.

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Tester | Schrijft en onderhoudt geautomatiseerde tests | Snel testcases uit een story halen; randgevallen die je zelf vergeet |
| Developer | Levert code op en reviewt die van anderen | Snelle eerste review-ronde; kleine bugfixes zonder contextverlies |
| Business analist / PO | Schrijft en verfijnt user stories | Consistente stories met toetsbare acceptatiecriteria |
| Consultant bij een klant | Werkt in wisselende codebases | Skills die overal werken, zonder installatie van een platform |

---

## 4. Kernfunctionaliteiten (Must-Have)

### Voor tester en developer
✅ **Skill: Code review**
- Neemt een diff of bestand en levert bevindingen als `bestand:regel — probleem — voorgestelde fix`, gesorteerd op ernst. Geen complimenten, geen scope creep.

✅ **Skill: Testgeneratie**
- Genereert vanuit een klasse, endpoint of user story een testklasse in het framework van het project, inclusief happy path, randgevallen en foutscenario's.

✅ **Skill: Bugfix**
- Neemt een bugmelding of stacktrace, lokaliseert de vermoedelijke oorzaak, stelt een minimale fix voor en schrijft de regressietest die de bug had gevangen.

### Voor analist en PO
✅ **Skill: Refinement (user stories schrijven)**
- Zet een ruw idee om in een user story met rol, wens, waarde en Gegeven/Als/Dan-acceptatiecriteria, en benoemt expliciet de open vragen.

✅ **Skill: Implementatie**
- Werkt een goedgekeurde story uit tot een stappenplan met bestanden, volgorde en testaanpak, vóórdat er ook maar één regel code wordt geschreven.

### Voor het hele team
✅ **Gedeelde structuur en documentatie**
- Alle skills volgen dezelfde mapindeling en hebben een README met installatie-instructies, triggerwoorden en een voorbeeld van in- en output.

---

## 5. Nice-to-Have
- Een zesde skill voor performance-analyse of security-review.
- Skills als installeerbare plugin distribueren in plaats van kopiëren.
- Skills die elkaar aanroepen: refinement → implementatie → testgeneratie als keten.
- Een evaluatieset die per skill controleert of de output nog aan de verwachting voldoet na een promptwijziging.
- Koppeling met Jira, zodat de refinement-skill direct een ticket aanmaakt.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- Alle 5 skills zijn geïnstalleerd in een demo-repository en worden live aangeroepen.
- De testgeneratie-skill levert een test die groen draait zonder handmatige aanpassing.
- De code review-skill vindt in een geprepareerde diff minimaal 3 van de 4 ingebouwde fouten.
- De refinement-skill levert een story met minimaal 3 acceptatiecriteria in Gegeven/Als/Dan-vorm.
- Een teamlid dat de skills niet gebouwd heeft, installeert en gebruikt ze succesvol binnen 5 minuten.
