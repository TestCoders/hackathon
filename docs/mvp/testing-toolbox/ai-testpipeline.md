---
title: AI testpipeline / agent tool
description: Een AI-agent die in de CI-pipeline testfalen analyseert, oorzaken benoemt en fixes voorstelt.
---

# AI testpipeline / agent tool

*Geïnspireerd op de workshop van Tim Lolkema.*

## 1. Projectnaamsvermelding
**Naam:** AI-agent in de testpipeline
**Versie:** MVP 1.0
**Datum:** [Datum]
**Team:** [Namen van de deelnemers]

---

## 2. Doelstelling

### Hoofddoel
Een agent bouwen die automatisch meedraait in de CI-pipeline, gefaalde tests analyseert en per falen een onderbouwde diagnose plus een concreet fixvoorstel achterlaat, zodat de tijd tussen "build is rood" en "oorzaak bekend" van tientallen minuten naar minuten gaat.

### Subdoelen
- De agent wordt **automatisch getriggerd** bij een gefaalde testrun in GitHub Actions, zonder handmatige actie.
- Per gefaalde test een **classificatie** in minimaal 3 categorieën: echte bug, testfout of omgevings-/flaky-probleem.
- Elke analyse bevat een **verwijzing naar bestand en regelnummer** en een voorgestelde wijziging in diff-vorm.
- De resultaten worden teruggeplaatst als **comment op de pull request**, binnen **5 minuten** na het falen.
- Op een geprepareerde set van **10 gefaalde tests** classificeert de agent er minimaal **7 correct**.

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Test automation engineer | Onderhoudt de testsuite en de pipeline | Snel onderscheid tussen flaky test en echte regressie |
| Developer met een rode PR | Wil weten of het aan zijn wijziging ligt | Directe, leesbare uitleg in de PR zelf; geen logbestanden spitten |
| Tech lead | Bewaakt doorlooptijd en betrouwbaarheid van de pipeline | Inzicht in terugkerende faalpatronen en flaky tests |
| DevOps engineer | Beheert de CI-omgeving | Analyse die omgevingsproblemen herkent en niet als codebug rapporteert |

---

## 4. Kernfunctionaliteiten (Must-Have)

### Voor de pipeline
✅ **Automatische trigger bij testfalen**
- Een workflow-stap draait alleen bij een gefaalde testrun en geeft de agent de testresultaten, logs en de diff van de PR mee.

✅ **Gestructureerde faalanalyse**
- De agent leest het testrapport (JUnit XML of vergelijkbaar), haalt per falen de assertion, stacktrace en betrokken code op en vat samen wat er misging.

✅ **Classificatie van het falen**
- Elk falen krijgt een label: echte bug, verouderde test, of omgevings-/timingprobleem, met de redenering erbij in één alinea.

### Voor de developer
✅ **Fixvoorstel in diff-vorm**
- Per falen een concreet voorstel: welk bestand, welke regel, welke wijziging — kopieerbaar of direct toepasbaar.

✅ **Rapportage in de pull request**
- Eén samenvattende comment op de PR met een tabel van gefaalde tests, classificatie en link naar de details. Geen losse comments die de PR dichtslibben.

✅ **Duidelijke grenzen**
- De agent past niets zelf toe zonder goedkeuring en geeft expliciet aan wanneer hij het niet weet, in plaats van een plausibel klinkende gok te presenteren.

---

## 5. Nice-to-Have
- Automatisch een fix-branch met PR openen bij hoge zekerheid.
- Flaky tests herkennen op basis van historie over meerdere runs.
- Dashboard met faalpatronen over de tijd.
- Screenshots en video's van UI-tests meenemen in de analyse.
- Ondersteuning voor GitLab CI en Azure DevOps naast GitHub Actions.
- Kostenbewaking met een limiet op tokengebruik per run.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- Een gefaalde testrun in een demo-repository triggert de agent automatisch.
- Binnen 5 minuten staat er een leesbare analyse-comment op de pull request.
- Op de geprepareerde set van 10 falen zit minimaal 7 keer de juiste classificatie.
- Minimaal 1 fixvoorstel is ongewijzigd toe te passen en maakt de test groen — live gedemonstreerd.
- De agent meldt expliciet "onvoldoende informatie" bij het geprepareerde onduidelijke geval, in plaats van te gokken.
