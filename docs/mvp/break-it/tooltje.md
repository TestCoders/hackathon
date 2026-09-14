---
title: Break-it tooltje
description: Chaos- en fuzzing-tool die een draaiende applicatie systematisch onder druk zet.
---

# Break-it tooltje

## 1. Projectnaamsvermelding
**Naam:** Break-it tooltje — chaos- en fuzzing-tool
**Versie:** MVP 1.0
**Datum:** [Datum]
**Team:** [Namen van de deelnemers]

---

## 2. Doelstelling

### Hoofddoel
Een tool opleveren die een draaiende applicatie in een afgeschermde testomgeving automatisch onder druk zet met onverwachte invoer en verstoringen, en die per gevonden afwijking een reproduceerbaar verslag oplevert.

### Subdoelen
- **Fuzzing van HTTP-endpoints** met minimaal **6 categorieën** aanvalswaarden: lege waarden, extreme lengtes, verkeerde types, Unicode en emoji, injectiepatronen en grenswaarden.
- **Chaos-modus** die verstoringen simuleert: vertraagde responses, afgebroken verbindingen en foutcodes van een backend.
- Automatische detectie van **verdacht gedrag**: 5xx-fouten, stacktraces in de respons, responstijden boven een drempel en onverwachte statuscodes.
- **Reproduceerbaarheid**: elke bevinding levert een kant-en-klaar curl-commando op.
- **100 aanvalsverzoeken binnen 60 seconden** op een lokale applicatie.
- Een **veiligheidsslot**: de tool weigert te draaien tegen een host die niet expliciet in een allowlist staat.

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Tester | Wil robuustheid aantonen, niet alleen het happy path | Veel scenario's in korte tijd, zonder ze allemaal te typen |
| Developer | Wil zijn API hard testen vóór oplevering | Snel zien welke invoer een 500 veroorzaakt, met reproductiestap |
| Performance-/resilience-engineer | Test gedrag onder verstoring | Vertraging en fouten kunnen injecteren zonder de code te wijzigen |
| Trainer | Gebruikt het als oefenmateriaal | Herhaalbare runs met zichtbaar resultaat |

---

## 4. Kernfunctionaliteiten (Must-Have)

### Voor de tester
✅ **Endpoint-fuzzing vanaf de commandline**
- Je geeft een URL, methode en voorbeeld-payload; de tool varieert systematisch op elk veld met de 6 aanvalscategorieën.

✅ **Detectie van verdacht gedrag**
- Responses worden gecontroleerd op 5xx, stacktraces, ongebruikelijke statuscodes en trage antwoorden; alleen afwijkingen komen in het rapport.

✅ **Reproduceerbare bevindingen**
- Per bevinding een curl-commando plus de volledige respons, zodat een developer het binnen seconden naspeelt.

### Voor het team
✅ **Chaos-modus**
- Als proxy voor de applicatie injecteert de tool vertraging, afgebroken verbindingen en foutcodes, zodat je ziet hoe de frontend daarmee omgaat.

✅ **Rapport na afloop**
- Een overzicht van uitgevoerde verzoeken, gevonden afwijkingen gegroepeerd op type, en de reproductiestappen.

✅ **Veiligheidsslot op doelwitten**
- De tool draait alleen tegen hosts in een expliciete allowlist (standaard localhost), met een duidelijke weigering bij elk ander doelwit.

---

## 5. Nice-to-Have
- Aanvalsvarianten afleiden uit een OpenAPI-specificatie.
- Slimme fuzzing die doorgaat op invoer die eerder afwijkend gedrag veroorzaakte.
- UI-chaos in de browser: elementen verbergen, dubbelklikken, traag netwerk simuleren.
- Bevindingen automatisch als issue aanmaken.
- Herhaalbare seed zodat een run exact te reproduceren is.
- Integratie in CI als robuustheidscheck.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- De tool draait live tegen een lokale applicatie en vindt minimaal 3 afwijkingen.
- 100 aanvalsverzoeken zijn binnen 60 seconden uitgevoerd.
- Minimaal 1 bevinding wordt in de demo gereproduceerd met het gegenereerde curl-commando.
- De chaos-modus veroorzaakt zichtbaar ander gedrag in de frontend.
- De tool weigert aantoonbaar te draaien tegen een host buiten de allowlist — live getoond.
- Het eindrapport is leesbaar en groepeert afwijkingen per type.
