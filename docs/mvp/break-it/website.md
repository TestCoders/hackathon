---
title: Break-it website
description: Bewust kwetsbare oefenwebsite met verborgen bugs en een scoreboard.
---

# Break-it website

## 1. Projectnaamsvermelding
**Naam:** Break-it website — kwetsbare oefenapplicatie
**Versie:** MVP 1.0
**Datum:** [Datum]
**Team:** [Namen van de deelnemers]

---

## 2. Doelstelling

### Hoofddoel
Een bewust gebrekkige oefenwebsite opleveren waarin testers verborgen bugs en kwetsbaarheden moeten vinden, met een scoreboard dat bijhoudt wie wat gevonden heeft — bruikbaar als vast trainingsmiddel binnen TestCoders.

### Subdoelen
- Minimaal **12 ingebouwde defecten**, verdeeld over 4 categorieën: functionele bugs, validatiefouten, security-kwetsbaarheden en toegankelijkheidsproblemen.
- Elk defect is **objectief detecteerbaar**, zodat de scoring niet op smaak berust.
- Een **scoreboard** waarop een deelnemer een gevonden defect indient en direct punten krijgt bij een match.
- Drie **moeilijkheidsniveaus**, zodat zowel juniors als ervaren testers uitgedaagd worden.
- Een **beheerdersweergave** met alle defecten en de bedoelde reproductiestappen, achter een wachtwoord.
- Volledig draaiend met **één commando** — Docker of een enkel npm-script — op een lokale machine.

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Deelnemer / tester in training | Oefent exploratory testing | Realistische applicatie, directe feedback of een vondst klopt |
| Trainer / begeleider | Leidt een sessie of hackathon | Bekende defectenlijst, zicht op voortgang, herstartbare omgeving |
| Sollicitant in een assessment | Laat zien wat hij kan | Eerlijke, objectieve opdracht met duidelijke scope |
| Bouwer van [tooltje](./tooltje) en [skills](./skills) | Heeft een doelwit nodig | Stabiele, lokaal draaiende applicatie met bekende defecten als ijkpunt |

---

## 4. Kernfunctionaliteiten (Must-Have)

### Voor de deelnemer
✅ **Werkende applicatie met een herkenbare flow**
- Een kleine webshop of boekingsapplicatie: inloggen, iets zoeken, iets bestellen. Realistisch genoeg om je in te verplaatsen.

✅ **Twaalf ingebouwde defecten**
- Verdeeld over functionele fouten, ontbrekende validatie, security-kwetsbaarheden en toegankelijkheidsproblemen, in oplopende moeilijkheid.

✅ **Bevinding indienen en direct scoren**
- Een formulier waarin je beschrijft wat je vond; bij een match met een bekend defect krijg je direct punten en bevestiging.

✅ **Scoreboard**
- Live ranglijst van deelnemers of teams, met per deelnemer welke categorieën al gevonden zijn.

### Voor de trainer
✅ **Beheerdersweergave met de defectenlijst**
- Achter een wachtwoord: alle defecten, hun categorie, punten en reproductiestappen, plus wie wat gevonden heeft.

✅ **Eenvoudig opstarten en resetten**
- Eén commando start de applicatie; één actie zet data en scores terug op nul voor de volgende sessie.

✅ **Afgeschermd draaien**
- De applicatie draait standaard alleen op localhost en waarschuwt duidelijk dat hij niet publiek gehost mag worden.

---

## 5. Nice-to-Have
- Willekeurige selectie van defecten per sessie, zodat de oefening herbruikbaar blijft.
- Hints die punten kosten.
- Tijdgebonden challenge-modus.
- Teams in plaats van individuen op het scoreboard.
- Automatische beoordeling van de kwaliteit van de bugrapportage, niet alleen of iets gevonden is.
- Exportbaar rapport per deelnemer na afloop.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- De applicatie start met één commando op een schone machine.
- Alle 12 defecten zitten erin en staan in de beheerdersweergave gedocumenteerd.
- Deelnemers uit de zaal vinden tijdens de demo live minimaal 5 defecten.
- Het scoreboard werkt en werkt bij tijdens de demo.
- De reset zet de omgeving aantoonbaar terug naar de beginstand.
- De applicatie weigert of waarschuwt duidelijk bij draaien buiten localhost.
