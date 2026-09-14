---
title: Break-it skills
description: AI-skills die een applicatie systematisch aanvallen en zwakke plekken blootleggen.
---

# Break-it skills

## 1. Projectnaamsvermelding
**Naam:** Break-it skills — AI-skills om applicaties te breken
**Versie:** MVP 1.0
**Datum:** [Datum]
**Team:** [Namen van de deelnemers]

---

## 2. Doelstelling

### Hoofddoel
Een set AI-skills opleveren die een tester helpt om een applicatie systematisch stuk te krijgen: van randgevallen bedenken tot misbruikscenario's uitvoeren en het gevonden gedrag reproduceerbaar vastleggen.

### Subdoelen
- **4 werkende skills**: randgevallen bedenken, misbruikscenario's opstellen, kapotte testdata genereren en een bevinding reproduceerbaar rapporteren.
- De randgevallen-skill levert per invoerveld minimaal **10 aanvalswaarden**, inclusief lege waarde, extreme lengte, Unicode, injectiepatronen en type-verwarring.
- Op de [break-it website](./website) vinden de skills minimaal **5 van de ingebouwde kwetsbaarheden**.
- Elke gevonden bevinding wordt **reproduceerbaar** vastgelegd: stappen, verwachte uitkomst, werkelijke uitkomst.
- Elke skill is **binnen 2 minuten** te installeren en werkt op minimaal 2 verschillende applicaties.

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Exploratory tester | Zoekt gericht naar wat er misgaat | Inspiratie voor aanvalshoeken die hij zelf niet bedenkt |
| Test automation engineer | Wil negatieve scenario's automatiseren | Kant-en-klare lijsten met aanvalswaarden per veldtype |
| Developer | Wil zijn eigen werk hard aanpakken vóór oplevering | Snel zien welke invoer zijn code onderuit haalt |
| Trainer / begeleider | Leidt nieuwe testers op | Herhaalbare oefenopdrachten met meetbaar resultaat |

---

## 4. Kernfunctionaliteiten (Must-Have)

### Voor de tester
✅ **Skill: Randgevallen bedenken**
- Neemt een formulier, endpoint of user story en levert per veld een lijst aanvalswaarden met de reden waarom elke waarde interessant is.

✅ **Skill: Misbruikscenario's**
- Denkt vanuit een kwaadwillende gebruiker: stappen overslaan, dubbel versturen, manipuleren van waarden die de frontend verbergt, en gelijktijdige acties.

✅ **Skill: Kapotte testdata**
- Genereert bewust foute data: verkeerde types, ontbrekende verplichte velden, te lange strings, ongeldige datums en foute encoding.

### Voor het team
✅ **Skill: Bevinding rapporteren**
- Zet een ruwe observatie om in een reproduceerbare bugmelding met stappen, verwachte en werkelijke uitkomst, en een inschatting van de impact.

✅ **Gedeelde structuur en veiligheidsgrenzen**
- Alle skills volgen dezelfde opzet en bevatten expliciet de instructie dat ze alleen op eigen, daarvoor bestemde testomgevingen gebruikt worden.

---

## 5. Nice-to-Have
- Skill die uit een OpenAPI-spec automatisch aanvalsvarianten per endpoint afleidt.
- Koppeling met het [break-it tooltje](./tooltje) zodat scenario's direct uitgevoerd worden.
- Scorebijhouding: welke skill vond welke kwetsbaarheid.
- Skill voor toegankelijkheidsproblemen als aparte "breek"-hoek.
- Skill voor race conditions en gelijktijdigheid.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- Alle 4 skills zijn geïnstalleerd en worden live aangeroepen op een draaiende applicatie.
- De skills vinden samen minimaal 5 ingebouwde kwetsbaarheden op de break-it website.
- De randgevallen-skill levert voor een gegeven formulier minimaal 10 aanvalswaarden per veld.
- Minimaal 1 bevinding is door iemand buiten het team gereproduceerd met alleen de gegenereerde rapportage.
- Elke skill bevat een zichtbare grens: alleen toepassen op eigen testomgevingen.
