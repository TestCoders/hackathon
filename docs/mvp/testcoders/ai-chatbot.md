---
title: AI-chatbot voor de website
description: Chatbot die bezoekersvragen beantwoordt op basis van de eigen content van TestCoders.
---

# AI-chatbot voor de website

## 1. Projectnaamsvermelding
**Naam:** AI-chatbot voor de TestCoders-website
**Versie:** MVP 1.0
**Datum:** [Datum]
**Team:** [Namen van de deelnemers]

---

## 2. Doelstelling

### Hoofddoel
Een chatbot op de TestCoders-website opleveren die vragen van bezoekers over diensten, vacatures en werkwijze beantwoordt op basis van de eigen content, met bronvermelding, zodat bezoekers antwoord krijgen zonder te hoeven wachten op een mens.

### Subdoelen
- Antwoorden uitsluitend uit een **eigen kennisbron** (RAG) van minimaal **15 documenten**: dienstenpagina's, vacatures, FAQ en artikelen.
- **Bronvermelding** onder elk antwoord, met klikbare link naar de pagina waar het vandaan komt.
- Op een testset van **20 realistische vragen** minimaal **16 inhoudelijk correcte** antwoorden.
- Bij een vraag buiten de kennisbron expliciet **"dat weet ik niet"** plus doorverwijzing naar het contactformulier — geen verzonnen antwoord.
- **Eerste token binnen 2 seconden** zichtbaar, met streaming antwoord.
- Widget die op elke pagina te embedden is en werkt op mobiel.

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Potentiële klant | Oriënteert zich buiten kantooruren | Direct antwoord op "doen jullie ook X?" en "hoe werkt dat?" |
| Kandidaat / sollicitant | Twijfelt of een vacature bij hem past | Vragen over eisen, arbeidsvoorwaarden en werkwijze, zonder te bellen |
| Sales / recruitment | Ontvangt de leads | Minder herhaalvragen; wel de context van het gesprek bij een lead |
| Beheerder van de content | Houdt de kennisbron actueel | Zien welke vragen niet beantwoord konden worden, zodat content aangevuld wordt |

---

## 4. Kernfunctionaliteiten (Must-Have)

### Voor de bezoeker
✅ **Chatwidget op elke pagina**
- Een knop rechtsonder opent een chatvenster; het gesprek blijft behouden bij navigeren binnen de site.

✅ **Antwoorden uit de eigen content met bronvermelding**
- Elk antwoord verwijst naar de pagina waaruit het komt, zodat de bezoeker kan doorklikken en verifiëren.

✅ **Eerlijk zijn over wat niet bekend is**
- Bij vragen buiten de kennisbron zegt de bot dat expliciet en biedt hij het contactformulier aan, in plaats van te gokken.

✅ **Streaming antwoorden**
- Het antwoord verschijnt woord voor woord, zodat het gesprek snel aanvoelt.

### Voor TestCoders
✅ **Kennisbron uit de bestaande website**
- Een script leest de bestaande pagina's in en bouwt daaruit de index; content bijwerken is opnieuw indexeren, niet opnieuw prompten.

✅ **Gesprekslogging met onbeantwoorde vragen**
- Alle vragen worden gelogd; vragen zonder antwoord komen in een aparte lijst als input voor nieuwe content.

✅ **Grenzen en kostenbewaking**
- De bot beantwoordt alleen vragen over TestCoders, weigert vragen buiten dat domein netjes, en heeft een limiet op berichten per sessie.

---

## 5. Nice-to-Have
- Doorschakelen naar een mens tijdens kantooruren.
- Automatisch een lead aanmaken bij concrete interesse.
- Engelstalige gesprekken.
- Suggestievragen bij het openen van de chat.
- Spraakinvoer.
- Dashboard met de meestgestelde vragen per week.
- Persoonlijk vacature-advies op basis van wat de kandidaat vertelt.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- De widget draait op een gedeployede website en is live te gebruiken door het publiek in de zaal.
- Op de testset van 20 vragen zijn minimaal 16 antwoorden inhoudelijk correct.
- Elk antwoord toont minimaal één klikbare bron die daadwerkelijk het antwoord bevat.
- Een bewust onbeantwoordbare vraag levert "dat weet ik niet" op plus doorverwijzing — live gedemonstreerd.
- Het eerste deel van het antwoord verschijnt binnen 2 seconden.
- De log toont na de demo de gestelde vragen, inclusief de onbeantwoorde.
