---
title: Coding guidelines + AI-skills
description: Machine-leesbare coding guidelines als fundament onder herbruikbare AI-skills voor review, testgeneratie en bugfixes.
---

# Coding guidelines + AI-skills

*Skills voor code review, testgeneratie en bugfixes, gebouwd op een gedeelde set machine-leesbare coding guidelines.*

## 1. Projectnaamsvermelding
**Naam:** Coding guidelines + AI-skills voor het testvak
**Versie:** MVP 1.0
**Datum:** [Datum]
**Team:** [Namen van de deelnemers]

---

## 2. Doelstelling

### Hoofddoel
Een fundament van machine-leesbare coding guidelines opleveren, plus een set AI-skills die dat fundament daadwerkelijk gebruikt — zodat een AI-agent niet alleen weet hóe TestCoders code schrijft, maar dat ook automatisch toepast bij review, testgeneratie en bugfixes.

### Subdoelen
- Eén `guidelines/`-map met minimaal **3 richtlijnbestanden**: naamgeving, teststructuur en foutafhandeling, elk met een **regel + goed voorbeeld + fout voorbeeld**.
- Een `CLAUDE.md` (en/of `.cursorrules`) in de root die de richtlijnen automatisch laadt, werkend in minimaal **1 AI-tool** live in de demo.
- **3 werkende skills** — code review, testgeneratie en bugfix — die elk expliciet naar `guidelines/` verwijzen in plaats van generieke output te geven.
- De review-skill toetst zichtbaar aan de guidelines: bevindingen verwijzen naar de overtreden regel, niet naar smaak.
- De testgeneratie-skill levert tests die **zonder aanpassing compileren en draaien** én de conventies uit `guidelines/` volgen (naamgeving, structuur).

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Tester | Schrijft en onderhoudt geautomatiseerde tests | Testcases die passen bij de bestaande stijl, niet een eigen stijl per prompt |
| Developer | Levert code op en reviewt die van anderen | Objectieve, verwijsbare regels i.p.v. smaakdiscussies in een PR |
| Tech lead / reviewer | Bewaakt kwaliteit over meerdere teams | Eén bron van waarheid die zowel mens als AI-agent volgt |
| Consultant bij een klant | Werkt in wisselende codebases | Skills die overal werken zodra de guidelines-map meegaat |

---

## 4. Kernfunctionaliteiten (Must-Have)

### Het fundament
✅ **Guidelines in do/don't-formaat**
- Elke regel heeft een codeblok met een correct en een incorrect voorbeeld — bewezen effectiever voor LLM's dan proza.

✅ **Automatisch laden**
- Een `CLAUDE.md` in de repository-root verwijst naar `guidelines/`, zodat elke skill de regels meeneemt zonder dat iemand ze plakt.

### De skills
✅ **Skill: Code review**
- Neemt een diff of bestand en levert bevindingen als `bestand:regel — probleem — voorgestelde fix`, elk gekoppeld aan de overtreden guideline waar van toepassing.

✅ **Skill: Testgeneratie**
- Genereert vanuit een klasse, endpoint of user story een testklasse volgens de teststructuur-guideline (naamgeving, Arrange-Act-Assert, geen `sleep`).

✅ **Skill: Bugfix**
- Neemt een bugmelding of stacktrace, lokaliseert de vermoedelijke oorzaak, stelt een minimale fix voor volgens de guidelines en schrijft de regressietest die de bug had gevangen.

### Voor het team
✅ **Gedeelde structuur en documentatie**
- Alle skills volgen dezelfde mapindeling en hebben een README met installatie-instructies, triggerwoorden en een voorbeeld van in- en output.

---

## 5. Nice-to-Have
- Extra skills: refinement (user stories schrijven) en implementatie, als keten na elkaar aan te roepen.
- Uitbreiden naar 5 richtlijnbestanden (algemeen, review-checklist erbij).
- Afdwingbare regels ook als kant-en-klare ESLint-/Checkstyle-configuratie, zodat CI ze bewaakt.
- Werkend in minimaal 2 AI-tools i.p.v. 1.
- Meetbare verbetering aantonen: op een vaste set opdrachten minder handmatige correcties met guidelines dan zonder.
- Skills als installeerbare plugin distribueren in plaats van kopiëren.
- Een evaluatieset die per skill controleert of de output nog aan de verwachting voldoet na een promptwijziging.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- De `guidelines/`-map bevat minimaal 3 ingevulde bestanden, elk met een goed én een fout voorbeeld.
- Alle 3 skills zijn geïnstalleerd in een demo-repository en worden live aangeroepen.
- De review-skill vindt in een geprepareerde diff minimaal 3 overtredingen en noemt bij elke bevinding de guideline.
- De testgeneratie-skill levert een test die groen draait én zichtbaar de teststructuur-guideline volgt.
- Dezelfde prompt zonder `guidelines/` levert aantoonbaar afwijkende code op — het verschil is in de demo te tonen.
- Een teamlid dat de skills niet gebouwd heeft, installeert en gebruikt ze succesvol binnen 5 minuten.
