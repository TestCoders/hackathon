---
title: API-testtool maken
description: Bouw vanaf nul een testrunner met assertions en rapportage voor HTTP-API's.
---

# API-testtool maken

## 1. Projectnaamsvermelding
**Naam:** API-testtool from scratch
**Versie:** MVP 1.0
**Datum:** [Datum]
**Team:** [Namen van de deelnemers]

---

## 2. Doelstelling

### Hoofddoel
Vanaf nul een werkende API-testtool bouwen — met eigen testrunner, assertion-library en rapportage — waarmee je een echte REST-API test zonder ook maar één bestaand testframework te gebruiken.

### Subdoelen
- Een **eigen testrunner** die tests ontdekt, uitvoert en per test een pass/fail met duidelijke foutmelding rapporteert.
- Een **assertion-library** met minimaal 8 assertions: statuscode, responstijd, header, JSON-veldwaarde, JSON-veld bestaat, arraylengte, string bevat en schema-validatie.
- **Leesbare foutmeldingen** die verwacht en werkelijk naast elkaar tonen, inclusief het pad naar het afwijkende JSON-veld.
- **Setup en teardown** per test en per suite, zodat testdata opgeruimd wordt.
- Een **rapport in twee vormen**: console-output tijdens de run en een HTML- of JUnit-XML-bestand erna.
- Een **voorbeeldsuite van minimaal 10 tests** tegen een publieke API, die volledig groen draait.
- **Exitcode 0 bij succes, 1 bij falen**, zodat de tool in een CI-pipeline bruikbaar is.

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Test automation engineer | Wil begrijpen hoe frameworks intern werken | Inzicht in runner, assertions en rapportage; overdraagbare kennis |
| Junior tester | Leert API-testen | Kleine, leesbare codebase zonder magie of annotaties |
| Consultant bij een restrictieve klant | Mag geen externe dependencies gebruiken | Een tool met minimale afhankelijkheden die hij zelf kan uitleggen en onderhouden |
| CI/CD-engineer | Draait tests in de pipeline | Nette exitcodes en machineleesbare rapportage |

---

## 4. Kernfunctionaliteiten (Must-Have)

### Voor de testschrijver
✅ **Tests definiëren en uitvoeren**
- Tests registreer je met een eenvoudige functie of bestandsconventie; de runner vindt ze, draait ze en vangt fouten per test af, zodat één crash de run niet stopt.

✅ **Assertion-library met duidelijke fouten**
- Minimaal 8 assertions op status, headers, responstijd en JSON-inhoud. Bij falen toont de melding het veldpad, de verwachte en de werkelijke waarde.

✅ **Setup en teardown**
- Hooks vóór en na elke test en rond de hele suite, zodat je testdata kunt aanmaken en opruimen zonder dat tests elkaar beïnvloeden.

### Voor het team
✅ **HTTP-client met basisondersteuning**
- GET, POST, PUT en DELETE met headers, query-parameters, JSON-body en configureerbare timeout.

✅ **Rapportage in console en bestand**
- Tijdens de run een leesbare console-output met pass/fail per test en een samenvatting; na afloop een HTML- of JUnit-XML-rapport.

✅ **Bruikbaar in CI**
- De tool draait vanaf de commandline, geeft exitcode 0 of 1 terug en accepteert een configuratiebestand voor de basis-URL en omgevingsvariabelen.

---

## 5. Nice-to-Have
- Tests parallel uitvoeren.
- Retry-mechanisme voor bekende instabiele endpoints.
- Tests genereren uit een OpenAPI-specificatie.
- Authenticatie-flows: bearer-token en OAuth2 client credentials.
- Waardes uit een respons hergebruiken in een volgende test (test-chaining).
- Contracttests tegen een JSON Schema.
- Mockserver om foutscenario's af te dwingen.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- De tool draait een suite van minimaal 10 tests tegen een echte publieke API en die suite is groen.
- Een bewust gesaboteerde assertion faalt met een melding waaruit direct blijkt wat er misging.
- Alle 8 assertions zijn geïmplementeerd en worden in de demo gebruikt.
- Setup en teardown draaien aantoonbaar in de juiste volgorde.
- Het HTML- of XML-rapport wordt gegenereerd en getoond.
- `echo $?` geeft 1 na een gefaalde run en 0 na een geslaagde run.
- De codebase bevat geen bestaand testframework — te controleren in het dependency-bestand.
