---
title: Testdatagenerator
description: Genereer realistische, geldige Nederlandse testdata op basis van een schema.
---

# Testdatagenerator

## 1. Projectnaamsvermelding
**Naam:** Testdatagenerator voor Nederlandse testdata
**Versie:** MVP 1.0
**Datum:** [Datum]
**Team:** [Namen van de deelnemers]

---

## 2. Doelstelling

### Hoofddoel
Een generator opleveren die realistische en formeel geldige Nederlandse testdata produceert die aansluit op het datamodel van eender welk project — of dat nu een eigen schema is, een export uit een bronsysteem of gemockte data — zodat teams geen productiedata meer nodig hebben en geen tijd meer kwijt zijn aan het verzinnen van testgevallen.

### Subdoelen
- Minimaal **8 Nederlandse datatypes** ondersteunen: naam, adres met bestaande postcode-formaat, IBAN met correcte controlecijfers, BSN met elfproef, KvK-nummer, telefoonnummer, e-mailadres en geboortedatum.
- Een **schema-gedreven** aanpak: je beschrijft je datamodel in JSON of YAML en krijgt records terug die daaraan voldoen.
- **Format-aansluiting**: naast het eigen schemaformaat ook een aangeleverd voorbeeldrecord, CSV-header of veldenlijst uit een bestaand project herkennen en per veldnaam/type automatisch de juiste generator koppelen — zodat elk project, ongeacht hoe de eigen tabellen of bronsystemen zijn ingericht, zonder handmatig schema te schrijven bruikbare data terugkrijgt.
- **Reproduceerbaarheid** via een seed: dezelfde seed geeft exact dezelfde dataset, zodat een falende test te reproduceren is.
- Export naar minimaal **3 formaten**: JSON, CSV en SQL-inserts.
- **1.000 records binnen 5 seconden** genereren op een gewone laptop.
- Standaard een set **randgevallen** meeleveren: lege string, maximale veldlengte, diakrieten, tussenvoegsels en apostrofs in namen.

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Test automation engineer | Heeft per testrun verse, unieke data nodig | Geen botsingen op unieke velden; herhaalbaar via seed |
| Handmatige tester | Vult formulieren en zoekt randgevallen | Kant-en-klare geldige waarden en bewust foute waarden |
| Developer | Vult een lokale database of demo-omgeving | Bulkexport die direct in de database te laden is |
| Privacy officer / security | Bewaakt dat er geen productiedata in test staat | Aantoonbaar synthetische data, geen herleidbare personen |

---

## 4. Kernfunctionaliteiten (Must-Have)

### Voor de tester
✅ **Schema-gebaseerd genereren**
- Je definieert velden en types in een schemabestand; de generator levert records die aan dat schema voldoen, inclusief geneste objecten.

✅ **Nederlandse, formeel geldige waarden**
- BSN voldoet aan de elfproef, IBAN aan de mod-97-controle en postcodes aan het `1234 AB`-formaat. Data die door validatie heen komt in plaats van erop stuk te lopen.

✅ **Randgevallen-modus**
- Met één vlag genereer je bewust lastige waarden: lege velden, maximale lengtes, Unicode-tekens, namen met tussenvoegsels en SQL-achtige strings.

✅ **Seed voor reproduceerbaarheid**
- Dezelfde seed levert dezelfde dataset, zodat een bug met precies dezelfde data te reproduceren is.

### Voor de developer
✅ **CLI en importeerbare library**
- Draaien vanaf de commandline voor eenmalige exports, of importeren in code om data in een testfixture te genereren.

✅ **Export naar JSON, CSV en SQL**
- Eén commando levert het gewenste formaat op, klaar om te laden in database, mockserver of testframework.

✅ **Aansluiten op een aangeleverd format**
- Je levert een voorbeeldrecord, CSV-header of veldenlijst van je eigen project aan; de tool herkent per veld het type (naam, adres, IBAN, e-mail, ...) en vult het aan met echte-vorm data, in plaats van dat je eerst zelf een schema in het format van de tool moet schrijven.

---

## 5. Nice-to-Have
- Webinterface om een schema te bouwen en een preview te zien.
- Referentiële integriteit tussen entiteiten (klant met bijbehorende bestellingen).
- Uit een bestaand databaseschema of OpenAPI-spec automatisch een generatorschema afleiden.
- Anonimiseringsmodus die bestaande data vervangt met behoud van vorm.
- Branchespecifieke sets: zorg, verzekeringen, overheid.
- Publiceren als npm-package.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- Eén commando genereert 1.000 records uit een voorbeeldschema, binnen 5 seconden.
- Gegenereerde BSN's en IBAN's komen door een onafhankelijke online validator.
- Dezelfde seed levert tweemaal een identieke dataset — live aangetoond.
- Export naar JSON, CSV en SQL werkt; het SQL-bestand laadt zonder fouten in een lokale database.
- De randgevallen-modus levert minimaal 5 herkenbaar lastige waarden op.
- Bij een aangeleverd voorbeeldrecord of CSV-header van een fictief ander project herkent de tool minimaal 5 veldtypes automatisch en vult ze correct in.
