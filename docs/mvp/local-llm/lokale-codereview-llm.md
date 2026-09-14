---
title: Lokale codereview-LLM
description: Codereview met een lokaal draaiend taalmodel, zonder dat code de machine verlaat.
---

# Lokale codereview-LLM

## 1. Projectnaamsvermelding
**Naam:** Lokale codereview-LLM
**Versie:** MVP 1.0
**Datum:** [Datum]
**Team:** [Namen van de deelnemers]

---

## 2. Doelstelling

### Hoofddoel
Een codereview-tool opleveren die volledig lokaal draait op een open-weight model, zodat teams bij klanten met strenge dataregels toch AI-ondersteunde review krijgen zonder dat er één regel code de machine verlaat.

### Subdoelen
- Volledig **offline werkend**: aantoonbaar geen uitgaand netwerkverkeer tijdens een review.
- Review van een **git-diff** vanaf de commandline, met bevindingen als `bestand:regel — probleem — voorgestelde fix`.
- **Onder de 60 seconden** voor een diff van ongeveer 200 regels, op een laptop zonder dedicated GPU.
- Op een geprepareerde diff met **5 ingebouwde fouten** vindt de tool er minimaal **3**.
- **Maximaal 2 valse bevindingen** per review — een tool die ruis produceert wordt niet gebruikt.
- Installatie in **minder dan 15 minuten** op een nieuwe machine, beschreven in de README.

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Developer bij een klant met strenge dataregels | Mag geen code naar externe AI sturen | Review-ondersteuning die aantoonbaar lokaal blijft |
| Security officer / compliance | Bewaakt dat data de organisatie niet verlaat | Aantoonbaar geen uitgaand verkeer; geen API-keys |
| Tech lead | Wil een eerste reviewronde vóór de menselijke review | Vaste kwaliteitsbodem; minder tijd aan triviale opmerkingen |
| Consultant | Werkt bij wisselende klanten | Draagbare tool die op een laptop draait zonder infrastructuur |

---

## 4. Kernfunctionaliteiten (Must-Have)

### Voor de developer
✅ **Review van de lokale diff**
- Eén commando reviewt de wijzigingen ten opzichte van de hoofdbranch en toont bevindingen in de terminal, gesorteerd op ernst.

✅ **Bevindingen met locatie en fix**
- Elke bevinding noemt bestand en regelnummer, beschrijft het probleem in één zin en stelt een concrete wijziging voor.

✅ **Instelbare reviewfocus**
- Via een vlag of configuratie kies je waar de review op let: correctheid, security, testdekking of leesbaarheid, zodat de output past bij het moment.

### Voor de organisatie
✅ **Volledig lokale uitvoering**
- Het model draait via Ollama of een vergelijkbare lokale runner. Geen API-key, geen accounts, geen uitgaand verkeer — te controleren met de netwerkmonitor uit.

✅ **Git-hook of pre-commit-integratie**
- Optioneel automatisch draaien vóór een commit of push, zodat review een gewoonte wordt in plaats van een losse actie.

✅ **Documentatie en modelkeuze**
- Een README met installatiestappen, hardware-eisen en een onderbouwde keuze van het model, inclusief gemeten reviewtijd per model.

---

## 5. Nice-to-Have
- Markdown-rapport per review voor archivering.
- Integratie met de IDE in plaats van alleen de terminal.
- Vergelijking van meerdere modellen op dezelfde diff, met kwaliteit en snelheid naast elkaar.
- Projectspecifieke context meegeven, zoals de [coding guidelines](/mvp/testing-toolbox/coding-guidelines-ai).
- Alleen de gewijzigde functies in plaats van hele bestanden naar het model sturen, om sneller te zijn.
- Draaien als kleine service voor het hele team op één sterke machine binnen het netwerk.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- Een review draait live met het netwerk uitgeschakeld — de sterkste demo van dit project.
- De tool vindt minimaal 3 van de 5 ingebouwde fouten in de geprepareerde diff.
- Een review van ~200 regels is klaar binnen 60 seconden op een laptop zonder GPU.
- Bevindingen bevatten bestand, regelnummer en een concrete fix.
- Een teamlid installeert de tool op een schone machine binnen 15 minuten met alleen de README.
- Het aantal valse bevindingen in de demo is 2 of minder.
