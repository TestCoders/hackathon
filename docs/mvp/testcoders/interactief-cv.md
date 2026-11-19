---
title: Interactief CV
description: Het TestCoders-CV als speelbare side scroller in de browser, gevoed door één JSON-bestand per consultant.
---

# Interactief CV

## 1. Projectnaamsvermelding
**Naam:** Interactief CV — "Speel mijn CV"
**Versie:** MVP 1.0
**Datum:** 19 november 2026
**Team:** [Namen van de deelnemers]
**Code:** [TestCoders/interactief-cv](https://github.com/TestCoders/interactief-cv)
**Live:** <https://testcoders.github.io/interactief-cv/>

---

## 2. Doelstelling

### Hoofddoel
Het standaard TestCoders-CV omzetten naar een browsergame (side scroller) waarin je door iemands loopbaan loopt, zodat een klant of recruiter het CV in twee minuten speelt en onthoudt in plaats van wegklikt.

### Subdoelen
- **Eén JSON-bestand per consultant** als enige bron; geen code aanpassen om een nieuw CV toe te voegen.
- Elke CV-sectie (profiel, opleiding, werkervaring, certificeringen, contact) is een **checkpoint in het level**.
- **Skills zijn verzamelbare munten**; de HUD telt hoeveel je er hebt gevonden.
- **Deelbare link per persoon** (`?cv=<id>`), zodat het CV direct in een sollicitatie of offerte kan.
- **Klassieke weergave** van hetzelfde CV met één klik, voor wie geen zin heeft om te gamen (en voor toegankelijkheid).
- Draait als **statische site** (GitHub Pages), zonder backend.

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Consultant | Heeft een TestCoders-CV dat er hetzelfde uitziet als dat van iedereen | Opvallen bij een klant; eigen CV toevoegen zonder te programmeren |
| Klant / opdrachtgever | Krijgt meerdere CV's voor één opdracht | Snel de relevante ervaring en skills zien; iets dat blijft hangen |
| Recruiter / sales | Stuurt CV's door naar klanten | Een deelbare link; altijd een nette klassieke variant als terugval |

---

## 4. Kernfunctionaliteiten (Must-Have)

### Voor de bezoeker (klant, recruiter)
✅ **Speelbaar level**
- Lopen en springen met pijltjes/WASD + spatie; camera volgt de speler door een level waarvan de lengte meegroeit met het CV.

✅ **CV-checkpoints**
- Bij elk bord in het level verschijnt een paneel met de inhoud van die sectie; werkervaring loopt chronologisch van oud naar nieuw.

✅ **Skills verzamelen**
- Elke skill is een munt (op de grond of op een platform); oppakken toont de skillnaam, de HUD telt mee.

✅ **Finish met contactkaart**
- Aan het eind van het level: vlag, confetti en de contactgegevens.

✅ **Klassieke weergave**
- Knop die hetzelfde CV als gewone, printbare HTML-pagina toont.

### Voor de consultant
✅ **CV als JSON**
- Een bestand in `src/data/cv/` toevoegen is genoeg; het verschijnt automatisch in het karakterselectiescherm.

✅ **Validatie**
- `npm run check` controleert alle CV-bestanden op verplichte velden voordat er gebouwd wordt.

---

## 5. Nice-to-Have
- Touch-besturing voor mobiel.
- Eigen pixel-art sprites in TestCoders-huisstijl in plaats van gegenereerde vormen.
- Per werkervaring een eigen "wereld" (achtergrond in de stijl van de klant/branche).
- Geluidseffecten en muziek (met mute-knop).
- Speedrun-timer en highscore.
- "Bugs" als vijanden die je wegspringt — het is tenslotte een testers-CV.
- Bestaand CV (Word/PDF) automatisch omzetten naar de JSON via een AI-prompt.
- PDF-export van de klassieke weergave.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- Minimaal **3 CV's** van teamleden zijn speelbaar, elk via een eigen `?cv=`-link.
- Een nieuw CV toevoegen lukt live in de demo in **onder de 2 minuten**, zonder codewijziging.
- Elk level is van start tot finish uit te spelen in **onder de 2 minuten**.
- Alle skills uit de JSON zijn als munt te vinden en de teller klopt.
- De klassieke weergave toont exact dezelfde inhoud als de game.
- De game staat live op een publieke URL (GitHub Pages).
