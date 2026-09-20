---
title: Casus
description: De technische instapopdracht voor sollicitanten moderniseren en AI-proof maken.
---

# Casus

## 1. Projectnaamsvermelding
**Naam:** Casus — technische instapopdracht voor sollicitanten
**Versie:** MVP 1.0
**Datum:** [Datum]
**Team:** [Namen van de deelnemers]

---

## 2. Doelstelling

### Hoofddoel
De bestaande casus-website/API — de technische instapopdracht waar sollicitanten een testautomatiseringsproject tegenaan bouwen — moderniseren en "AI-proof" maken, zodat een inzending nog steeds een eerlijk beeld geeft van de technische vaardigheden van de kandidaat, ook wanneer die AI-hulpmiddelen gebruikt.

### Subdoelen
- Minimaal **3 concrete technische verbeteringen** doorvoeren (bijvoorbeeld een verouderde dependency, een kapotte flow of ontbrekende validatie) die nu de opdracht onnodig lastig of gedateerd maken.
- Minimaal **3 onderdelen "AI-proof" maken**: randgevallen, ambiguë requirements of niet-triviale bedrijfslogica toevoegen, zodat alleen een prompt sturen niet automatisch tot een volledige, correcte oplossing leidt.
- Een **beoordelingsrubriek** met minimaal 5 meetbare criteria waarmee een beoordelaar een inzending objectief kan scoren.
- Een **referentie-oplossing** die zelf aan de eigen rubriek voldoet.
- Een kandidaatomgeving die binnen **5 minuten** opnieuw en schoon is op te zetten.
- De opdracht blijft binnen dezelfde tijdsindicatie als nu haalbaar voor een kandidaat — "AI-proof" maken mag de opdracht niet zwaarder maken, alleen minder omzeilbaar.

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Sollicitant / kandidaat | Bouwt een testautomatiseringsproject tegen de casus | Een duidelijke, eerlijke opdracht die zijn skills laat zien en niet met alleen copy-paste AI is op te lossen |
| Recruiter | Plant en bespreekt de opdracht met de kandidaat | Een opdracht die soepel opstart en een rubriek om het gesprek op te baseren |
| Tech lead / beoordelaar | Voert de technische beoordeling uit | Snel kunnen zien of een kandidaat de opdracht begreep, versus alleen AI-output plakte |
| Beheerder van de casus-applicatie | Onderhoudt website en API | Actuele, veilige en makkelijk te resetten omgeving per kandidaat |

---

## 4. Kernfunctionaliteiten (Must-Have)

### Voor de kandidaat
✅ **Bijgewerkte casus-website/API**
- Bekende technische schuld (verouderde dependencies, kapotte flows die niet bedoeld onderdeel van de opdracht zijn) is opgelost, zodat de opdracht zelf weer soepel te benaderen is.

✅ **AI-proof scenario's**
- Minimaal 3 onderdelen bevatten ambiguïteit, edge-cases of bedrijfslogica die interpretatie en keuzes vragen, zodat een kandidaat moet nadenken in plaats van alleen te promoten.

### Voor de beoordelaar
✅ **Beoordelingsrubriek**
- Vaste, meetbare criteria per onderdeel van de opdracht, gekoppeld aan wat een goede inzending laat zien.

✅ **Referentie-oplossing**
- Een voorbeelduitwerking om inzendingen tegen af te zetten en het gesprek met de kandidaat op te baseren.

### Voor de beheerder
✅ **Snel te resetten omgeving**
- Een nieuwe kandidaatomgeving opzetten kost één commando en geen handmatig opruimen van vorige sessies.

---

## 5. Nice-to-Have
- Automatische eerste-check van een inzending (lint, build, basisrun) vóórdat een beoordelaar ernaar kijkt.
- Meerdere casus-varianten om onderling doorspelen tussen kandidaten te bemoeilijken.
- Metrics over waar kandidaten vastlopen, als signaal of de casus nog goed gekalibreerd is.
- Geanonimiseerd loggen of en welke AI-tools kandidaten inzetten, als gespreksstof bij het interview.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- De bijgewerkte casus-website/API draait live vanaf een schone install.
- Minimaal 3 van de aangepaste scenario's zijn tijdens de demo aantoonbaar niet met één simpele AI-prompt op te lossen.
- De rubriek wordt tijdens de demo toegepast op een voorbeeldinzending en levert een score op.
- Een nieuwe kandidaatomgeving wordt live binnen 5 minuten opgezet.
- Minimaal 3 bestaande technische knelpunten zijn aantoonbaar verholpen, te controleren tegenover de oude versie.
