---
title: Casus-review-agent
description: Een AI-agent die elke casus-inzending op dezelfde, objectieve manier beoordeelt, als aanvulling op de menselijke beoordelaars.
---

# Casus-review-agent

## 1. Projectnaamsvermelding
**Naam:** Casus-review-agent
**Versie:** MVP 1.0
**Datum:** [Datum]
**Team:** Mark, [overige deelnemers]

---

## 2. Doelstelling

### Aanleiding
Na een eerste gesprek met de directeur krijgt een kandidaat de [casus](./casus) en levert daarop een testautomatiseringsproject in, in een taal en met een framework naar eigen keuze. Daarna volgt een technisch gesprek met collega's. Er is geen vaste beoordelaar: medior en senior test automation engineers bekijken de inzendingen naast hun klantwerk, elk met hun eigen achtergrond, stokpaardjes en beschikbare tijd. De ene beoordelaar draait de hele suite en leest elke test, de andere kijkt vooral naar de structuur. Daardoor hangt het commentaar dat een kandidaat krijgt deels af van wie er toevallig beoordeelt, en zijn inzendingen onderling lastig te vergelijken. Dat geldt temeer omdat de beoordelaar niet altijd thuis is in de taal of het framework dat de kandidaat koos.

### Hoofddoel
Een agent opleveren die **elke ingezonden repository op precies dezelfde manier bekijkt** vóór het technische gesprek, en er hetzelfde soort objectieve, feitelijke commentaar bij levert: dezelfde stappen, dezelfde rubriek, dezelfde maatstaf. De agent vervangt de beoordelaar niet, maar vult die aan. De agent levert de gelijke basis, en de mensen voegen toe wat een agent niet kan: context wegen, doorvragen in het gesprek, inschatten of iemand in een team past en de uiteindelijke beslissing nemen.

### Subdoelen
- **Dezelfde beoordeling voor iedere inzending:** vaste procedure, vaste rubriekversie, vast model en vaste prompt, en dat wordt per rapport vastgelegd. Zo is achteraf te zien dat twee kandidaten langs dezelfde lat zijn gelegd.
- **Objectief commentaar:** elke opmerking is gebaseerd op iets wat aantoonbaar in de code of de testresultaten staat, met verwijzing naar bestand en regel. Er zijn geen oordelen op gevoel en geen stijlvoorkeuren die niet in de rubriek staan.
- **Reproduceerbaar:** dezelfde inzending twee keer beoordelen geeft per criterium hooguit één punt verschil en inhoudelijk hetzelfde commentaar.
- **Duidelijke taakverdeling tussen agent en mens:** het rapport benoemt expliciet welke criteria de agent heeft beoordeeld en welke aan de beoordelaar zijn, zoals de motivatie van keuzes of hoe de kandidaat het uitlegt in het gesprek.
- De tests van de kandidaat draaien in een **geïsoleerde container**, zonder toegang tot het netwerk buiten de casus-API en zonder toegang tot de host.
- **Taal- en framework-onafhankelijk:** kandidaten kiezen hun eigen stack, dus de procedure en de rubriek zijn stack-neutraal. De MVP draait in elk geval Java (Maven of Gradle) en TypeScript (npm), en valt bij een onbekende stack terug op alleen statische analyse, met een duidelijke melding in het rapport.
- **Minimaal 5 gespreksvragen** op maat, als voorbereiding op het technische gesprek.
- Een inzending (Git-URL of zip) **binnen 10 minuten** volledig verwerken, zodat de agent nooit de bottleneck is.
- **Privacy:** het rapport is alleen voor interne beoordelaars. Het team kiest het model: lokaal (zie [Lokale codereview-LLM](../local-llm/lokale-codereview-llm)) of een zakelijke API zonder training op de invoer, maar code en gegevens van kandidaten belanden nooit bij een dienst die er iets anders mee mag doen dan deze analyse.

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Beoordelaar (medior/senior test automation engineer) | Bekijkt de inzending naast het klantwerk en voert het technische gesprek | Een gelijke, feitelijke basis per inzending om op voort te bouwen; snel ingewerkt raken, ook in een onbekende stack; elke bevinding kunnen nagaan |
| Directeur (indirect) | Voert het eerste gesprek, bepaalt wie de casus krijgt en neemt de eindbeslissing | Uitkomsten van technische gesprekken die onderling vergelijkbaar zijn, ongeacht welke collega's ze voerden |
| Kandidaat (indirect) | Levert de casus in | Een eerlijke beoordeling met hetzelfde commentaar als elke andere kandidaat, ongeacht wie er beoordeelt |
| Beheerder van de casus | Onderhoudt opdracht en rubriek | Zien op welke criteria kandidaten structureel uitvallen, als signaal voor de kalibratie van de casus |

---

## 4. Kernfunctionaliteiten (Must-Have)

### Verwerken van een inzending
✅ **Inzending ophalen en draaien**
- Repository of zip ophalen, taal en buildtool herkennen (bijvoorbeeld Maven, Gradle, npm of pip), dependencies installeren en de testsuite tegen een verse casus-omgeving draaien, alles in een wegwerpcontainer met tijdslimiet. Lukt draaien niet, dan gaat de beoordeling door op basis van statische analyse en staat in het rapport waarom de tests niet gedraaid zijn.

✅ **Feitelijke analyse vóór het oordeel**
- Eerst meetbare feiten verzamelen: bouwt het, hoeveel tests zijn er, hoeveel slagen, welke endpoints en randgevallen worden geraakt, en hoe zit de projectstructuur in elkaar. Die feiten zijn de basis voor de scores, zodat het model niet hoeft te raden.

### Beoordeling
✅ **Vaste, vastgelegde beoordelingsprocedure**
- Elke inzending doorloopt dezelfde stappen in dezelfde volgorde, met een vastgezette modelversie, deterministische instellingen (bijvoorbeeld temperature 0) en een versienummer voor rubriek en prompt. Het rapport vermeldt die versies, zodat een verschil tussen twee kandidaten nooit door een andere procedure kan komen.

✅ **Score per rubriekcriterium**
- De rubriek uit de casus is invoer (bijvoorbeeld als YAML of Markdown) en niet hardcoded, zodat een nieuwe versie van de rubriek geen codewijziging vraagt. Per criterium komt er een score, een korte onderbouwing en verwijzingen naar bestanden en regels.

✅ **Gespreksvragen**
- Vragen die de beoordelaar in het technische gesprek kan stellen, zoals "Waarom heb je hier voor X gekozen in plaats van Y?" of "Wat gebeurt er als de API een 429 teruggeeft?", gebaseerd op wat er wel en juist niet in de inzending zit.

### Voor de beoordelaar
✅ **Rapport**
- Eén rapport (HTML of Markdown) met voor elke inzending dezelfde opbouw: samenvatting, testresultaten, scores met onderbouwing en gespreksvragen. Het rapport vermeldt duidelijk dat het om een AI-bijdrage aan de beoordeling gaat.

✅ **Ruimte voor het menselijke oordeel**
- Het rapport heeft een vast deel voor de beoordelaar, met de criteria die bewust niet door de agent worden gescoord. De beoordelaar kan daarnaast elke agentscore aanpassen met een toelichting. Agentcommentaar en menselijk commentaar staan zichtbaar naast elkaar, zodat duidelijk blijft wie wat heeft vastgesteld.

---

## 5. Nice-to-Have
- Automatisch starten zodra een kandidaat een inzending indient, via een webhook of een upload in de casus-omgeving.
- Vergelijken met de referentie-oplossing uit de casus: wat dekt de kandidaat wel en niet af.
- Signaleren van inzendingen die sterk op elkaar of op publiek beschikbare oplossingen lijken.
- Inschatten welke delen vermoedelijk ongewijzigde AI-output zijn, puur als gespreksstof en nooit als grond voor afwijzing.
- Dashboard per vacature met scores en doorlooptijd per kandidaat.
- Kalibratie-run: de agent beoordeelt een set eerder handmatig beoordeelde inzendingen, waarna de afwijking van het menselijke oordeel per criterium wordt gerapporteerd.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- Twee runs op dezelfde inzending geven per criterium hooguit één punt verschil en inhoudelijk hetzelfde commentaar.
- Rapporten van twee inzendingen in verschillende talen (bijvoorbeeld Java en TypeScript) hebben dezelfde opbouw en beoordelen dezelfde criteria, met dezelfde procedure- en rubriekversie in het rapport.
- Bij twee duidelijk verschillende inzendingen (een sterke en een zwakke) komt de sterke aantoonbaar hoger uit.
- Elke bevinding in het rapport verwijst naar concrete code; een beoordelaar kan minstens 3 bevindingen in de demo direct in de code terugvinden.
- Het rapport laat zichtbaar zien welke criteria aan de beoordelaar zijn gelaten, en een aanpassing door de beoordelaar staat naast de oorspronkelijke agentscore.
- Een voorbeeldinzending wordt live, van URL tot rapport, in onder de 10 minuten verwerkt.
- Een inzending met een kwaadaardige test (bijvoorbeeld een poging om bestanden op de host te lezen of naar buiten te bellen) wordt aantoonbaar door de sandbox tegengehouden.
- Het rapport bevat minimaal 5 gespreksvragen die specifiek over deze inzending gaan en niet generiek zijn.

---

## 7. Concept-rubriek

De rubriek is een vast scoreblad: een lijst criteria met per criterium een beschrijving van wat een zwakke tot sterke inzending laat zien. Iedere inzending wordt langs hetzelfde blad gelegd. Dit is een **startpunt**: stem het bij de kick-off af met het team van de [Casus](./casus), dat de definitieve rubriek opstelt, en pas het aan op de inhoud van de casus.

**Uitgangspunten**
- **Schaal 1–4**, zonder middenscore, zodat er altijd een keuze naar onder of boven gemaakt wordt: 1 = onvoldoende, 2 = matig, 3 = goed, 4 = sterk.
- **Stack-neutraal:** geen criterium gaat uit van een specifieke taal, een specifiek framework of een specifieke architectuur.
- **Elk niveau is waarneembaar:** het verschil tussen twee scores ligt in iets wat in de code, de testresultaten of de README is aan te wijzen.
- **Geen totaalscore:** de beoordelaars zien het profiel per criterium. Eén getal verbergt juist waar een kandidaat sterk of zwak is.
- **Wie scoort:** criteria 1 t/m 7 scoort de agent en de beoordelaar controleert ze. Criteria 8 t/m 10 zijn alleen voor de beoordelaar; de agent levert daar hooguit gespreksvragen bij.

### Door de agent gescoord

**1. Werkt het?**
*Vastgesteld door: bouwen en draaien volgens de README in een schone container.*
1. Bouwt niet, of draaien vraagt handwerk dat niet in de README staat.
2. Draait na kleine, af te leiden aanpassingen, of een deel van de tests crasht door de opzet en niet door een bevinding.
3. Bouwt en draait met de instructies uit de README; alle tests eindigen met een echte uitkomst.
4. Als 3, met één commando, en de uitkomst is zonder uitleg te lezen (duidelijk rapport of duidelijke output).

**2. Functionele dekking**
*Vastgesteld door: de geteste scenario's afzetten tegen de functionaliteit en de bedrijfsregels van de casus.*
1. Alleen enkele happy paths.
2. Happy paths van de belangrijkste functionaliteit en enkele foutgevallen.
3. Ook foutpaden, validatie en de belangrijkste bedrijfsregels van de casus.
4. Als 3, plus randgevallen en de ambiguë of AI-proof onderdelen van de casus, met zichtbare keuzes over wat wel en niet getest is.

**3. Kwaliteit van de controles**
*Vastgesteld door: asserties per test analyseren en een steekproef van tests laten falen door de verwachte waarde aan te passen.*
1. Tests controleren weinig of niets (alleen "geen exception" of alleen een statuscode).
2. Controles op enkele velden, maar belangrijke uitkomsten blijven ongecontroleerd.
3. Controles op de inhoud die er functioneel toe doet, met duidelijke foutmeldingen bij falen.
4. Als 3, en ook neveneffecten worden gecontroleerd (bijvoorbeeld dat een wijziging ook echt is opgeslagen), zonder overbodige controles.

**4. Onafhankelijkheid en stabiliteit**
*Vastgesteld door: de suite drie keer draaien, ook in een andere volgorde, en zoeken naar vaste wachttijden.*
1. Uitkomsten verschillen tussen runs, of tests zijn afhankelijk van elkaars volgorde.
2. Stabiel in de standaardvolgorde, maar met gedeelde toestand of vaste wachttijden (sleeps).
3. Stabiel over drie runs; elke test zet zijn eigen data op.
4. Als 3, en elke test ruimt ook zijn eigen data op en draait ook los of in willekeurige volgorde.

**5. Structuur en herbruikbaarheid**
*Vastgesteld door: projectstructuur, duplicatie en de plek van configuratie.*
1. Alles in één of enkele bestanden, met veel gekopieerde code.
2. Enige opsplitsing, maar logica voor aanroepen, data en controles loopt door elkaar.
3. Duidelijke scheiding, bijvoorbeeld een laag voor de interactie met de applicatie, testdata en tests; weinig duplicatie.
4. Als 3, en configuratie zoals URL's en gegevens staat buiten de code, en een nieuwe test toevoegen kost weinig regels.

**6. Leesbaarheid**
*Vastgesteld door: naamgeving, testnamen en de lengte en opbouw van tests.*
1. Namen zeggen niets, en tests zijn alleen te begrijpen door de code regel voor regel te volgen.
2. Grotendeels leesbaar, met uitschieters zoals lange tests, magische waarden of uitgecommentarieerde code.
3. Testnamen beschrijven het gedrag en tests hebben een herkenbare opbouw (voorbereiden, uitvoeren, controleren).
4. Als 3, en de testsuite leest als een specificatie van de applicatie.

**7. Documentatie en bevindingen**
*Vastgesteld door: de README en eventuele bevindingenlijst of testrapportage.*
1. Geen of nauwelijks documentatie.
2. Uitleg over hoe het project te draaien is, maar niets over keuzes of bevindingen.
3. Ook gemaakte aannames en gevonden bugs of afwijkingen staan beschreven.
4. Als 3, en bevindingen zijn reproduceerbaar beschreven (stappen, verwacht en werkelijk resultaat), met een onderbouwing van wat bewust niet getest is.

### Door de beoordelaar gescoord
*De agent scoort deze criteria niet. Ze komen pas goed naar boven in het technische gesprek.*

**8. Onderbouwing van keuzes**: kan de kandidaat uitleggen waarom deze taal, dit framework, deze opzet en deze selectie van testgevallen?

**9. Reflectie**: ziet de kandidaat zelf de zwakke plekken in de inzending, en wat zou die anders doen met meer tijd of in een echt project?

**10. Niveau en werkwijze**: past de manier van werken bij het niveau waarvoor de kandidaat solliciteert, en hoe gaat de kandidaat om met doorvragen en met kritiek?

### Formaat
De agent leest de rubriek als bestand en niet als code, zodat een nieuwe versie geen codewijziging vraagt. Bijvoorbeeld:

```yaml
versie: 0.1
schaal: { min: 1, max: 4 }
criteria:
  - id: stabiliteit
    naam: Onafhankelijkheid en stabiliteit
    gescoord_door: agent
    vaststellen: Suite drie keer draaien, ook in een andere volgorde; zoeken naar vaste wachttijden.
    niveaus:
      1: Uitkomsten verschillen tussen runs, of tests zijn afhankelijk van elkaars volgorde.
      2: Stabiel in de standaardvolgorde, maar met gedeelde toestand of vaste wachttijden.
      3: Stabiel over drie runs; elke test zet zijn eigen data op.
      4: Als 3, en ruimt eigen data op; draait ook los of in willekeurige volgorde.
  - id: onderbouwing
    naam: Onderbouwing van keuzes
    gescoord_door: beoordelaar
```

::: tip Ethiek en wetgeving
AI-systemen die meewegen in werving en selectie vallen onder de hoog-risicocategorie van de EU AI Act. Houd daarom vast aan: de agent adviseert alleen, een mens beslist, kandidaten worden geïnformeerd dat AI ondersteunt en elke score is herleidbaar. Gebruik voor de hackathon alleen fictieve of geanonimiseerde inzendingen, geen echte kandidaatcode.
:::
