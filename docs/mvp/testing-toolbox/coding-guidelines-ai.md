---
title: Coding guidelines voor AI
description: Machine-leesbare codeerrichtlijnen zodat AI-agenten code schrijven die voldoet aan de TestCoders-standaard.
---

# Coding guidelines voor AI

## 1. Projectnaamsvermelding
**Naam:** Coding guidelines voor AI
**Versie:** MVP 1.0
**Datum:** [Datum]
**Team:** [Namen van de deelnemers]

---

## 2. Doelstelling

### Hoofddoel
Een machine-leesbare set codeerrichtlijnen opleveren die een AI-agent automatisch laadt, zodat gegenereerde code direct voldoet aan de TestCoders-standaard zonder handmatige correctie achteraf.

### Subdoelen
- Eén `guidelines/`-map met minimaal **5 richtlijnbestanden**: algemeen, naamgeving, teststructuur, foutafhandeling en review-checklist.
- Elke richtlijn bestaat uit een **regel + een goed voorbeeld + een fout voorbeeld**, zodat een LLM het patroon kan herkennen.
- Een `CLAUDE.md` (en `.cursorrules`) in de root die de richtlijnen inlaadt, werkend in minimaal **2 verschillende AI-tools**.
- Meetbare verbetering: op een vaste set van **5 opdrachten** daalt het aantal handmatige correcties met minimaal **50%** ten opzichte van dezelfde opdrachten zonder guidelines.
- Richtlijnen die automatisch te controleren zijn, staan ook als **lint-regel** in ESLint of Checkstyle.

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Test automation engineer | Laat een AI-agent tests schrijven binnen een bestaand framework | Output die past bij de bestaande codebase; geen eigen stijl per prompt |
| Developer | Gebruikt AI voor productiecode en refactors | Consistente naamgeving en foutafhandeling; minder review-opmerkingen |
| Tech lead / reviewer | Bewaakt kwaliteit over meerdere teams | Objectieve, verwijsbare regels in plaats van smaakdiscussies in een PR |
| Nieuwe collega | Kent de conventies nog niet | Eén plek waar staat "zo doen wij het hier", met voorbeelden |

---

## 4. Kernfunctionaliteiten (Must-Have)

### Voor de AI-agent
✅ **Automatisch laden van richtlijnen**
- Een `CLAUDE.md` in de repository-root verwijst naar alle bestanden in `guidelines/`, zodat de agent ze bij elke sessie meeneemt zonder dat iemand ze plakt.

✅ **Regels in "do / don't"-formaat**
- Elke regel heeft een codeblok met een correct en een incorrect voorbeeld. Dit formaat is bewezen effectiever voor LLM's dan proza.

✅ **Expliciete testconventies**
- Naamgeving van tests, Arrange-Act-Assert-structuur, verboden `sleep`-constructies en de regel dat elke test onafhankelijk draait.

### Voor de engineer
✅ **Review-checklist**
- Een korte checklist waarmee je AI-output nakijkt vóór je een PR opent; te gebruiken als prompt én als menselijke checklist.

✅ **Afdwingbare regels als linter-config**
- Regels die automatisch te checken zijn, staan als kant-en-klare ESLint- of Checkstyle-configuratie in de repo, zodat CI het bewaakt in plaats van een mens.

✅ **Voorbeeldrepository**
- Een kleine repo met een bestaande test en klasse als referentiemateriaal, zodat de agent stijl kan afkijken in plaats van alleen regels te lezen.

---

## 5. Nice-to-Have
- Guidelines publiceren als npm-/Maven-package zodat projecten ze als dependency binnenhalen.
- Versionering met een changelog per richtlijnwijziging.
- Taalvarianten voor Java, TypeScript en Python.
- Een scorescript dat een PR-diff toetst aan de guidelines en een percentage teruggeeft.
- Automatische synchronisatie tussen `CLAUDE.md`, `.cursorrules` en `.github/copilot-instructions.md`.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- De `guidelines/`-map bevat minimaal 5 ingevulde bestanden, elk met een goed én een fout voorbeeld.
- Een AI-agent genereert in een live demo een testklasse die zichtbaar de conventies volgt (naamgeving, structuur, geen `sleep`).
- Dezelfde prompt zonder guidelines levert aantoonbaar afwijkende code op — het verschil is in de demo te tonen.
- De linter draait lokaal en pakt minimaal 3 overtredingen op.
- Een collega die niet in het team zat, kan de guidelines in een eigen project toepassen binnen 10 minuten.
