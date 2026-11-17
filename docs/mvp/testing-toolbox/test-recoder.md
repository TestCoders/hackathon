---
title: Test(Re)Coder
description: AI-agents analyseren een bestaande testsuite en herbouwen een klein onderdeel als moderne, onderhoudbare testautomatisering.
---

# Test(Re)Coder

## 1. Projectnaamsvermelding
**Naam:** Test(Re)Coder — From legacy tests to modern test automation, powered by AI agents
**Versie:** MVP 1.0
**Datum:** [Datum]
**Team:** [Namen van de deelnemers]

---

## 2. Doelstelling

### Hoofddoel
Laten zien dat AI-agents een bestaande testsuite kunnen analyseren en een klein, samenhangend onderdeel kunnen herontwerpen en opnieuw opbouwen als modernere, beter leesbare testautomatisering — geen één-op-één vertaling, maar re-engineering met aantoonbaar behoud van de relevante dekking.

### Subdoelen
- Een bestaande testsuite **analyseren**: wat wordt er getest, wat is verouderd, dubbel of onnodig complex?
- **Verbeterpunten** in testontwerp en architectuur benoemen en onderbouwen.
- Eén klein onderdeel **opnieuw implementeren** in een zelfgekozen doelframework.
- De nieuwe tests **uitvoeren en controleren**: een gegenereerde test is nog geen geslaagde vervanging.
- **Transparant** vastleggen wat is vervangen, samengevoegd, verwijderd of nog niet verwerkt.

::: tip Kies je combinatie vooraf
Het concept is framework-onafhankelijk. Kies bij de kick-off één concrete combinatie van bron en doel (en een bestaande suite om mee te oefenen), zodat het team niet halverwege de dag discussieert over tooling.
:::

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Test automation engineer | Beheert een oude of moeilijk te onderhouden testsuite | Migreren zonder alles met de hand over te typen, en zonder slechte tests mee te nemen |
| Tech lead / QA lead | Beslist over modernisering van testautomatisering | Inzicht in wat er te winnen valt en grip op het risico |
| Developer | Moet met de tests werken en ze onderhouden | Leesbare, onderhoudbare tests die snel en betrouwbaar draaien |

---

## 4. Kernfunctionaliteiten (Must-Have)

### Analyse en herontwerp
✅ **Suiteanalyse**
- Een agent leest een bestaande testsuite en maakt een overzicht: wat wordt getest, welke tests lijken dubbel, verouderd of onnodig complex.

✅ **Verbetervoorstel**
- Een agent stelt voor hoe het testontwerp beter kan (samenvoegen, opschonen, andere structuur). Elk voorstel heeft een korte onderbouwing.

✅ **Menselijke goedkeuring**
- Ingrijpende keuzes, zoals tests verwijderen of samenvoegen, worden pas uitgevoerd na akkoord van een mens.

### Herbouw en verificatie
✅ **Herimplementatie van één klein onderdeel**
- Eén afgebakend, samenhangend deel van de suite (bijvoorbeeld één feature of testklasse) wordt opnieuw opgebouwd in het gekozen doelframework. De nieuwe opzet hoeft de oude niet te volgen.

✅ **Uitvoeren en controleren**
- De nieuwe tests worden daadwerkelijk uitgevoerd. Een agent of reviewer controleert of de relevante dekking behouden of verbeterd is.

### Inzicht
✅ **Transparant resultaatoverzicht**
- Eén leesbaar overzicht (bijvoorbeeld in Markdown) toont per oude test of die is *vervangen*, *samengevoegd*, *verwijderd* of *nog niet verwerkt*, met de reden. Beperkingen en resterend handwerk staan erbij.

---

## 5. Nice-to-Have
- Meerdere bron- of doelframeworks ondersteunen.
- Een grotere deelverzameling of de hele suite verwerken.
- Dekkingsvergelijking tussen oud en nieuw met een coverage-tool.
- Automatisch herkennen van flaky of traag draaiende tests.
- Een eenvoudig dashboard of rapport met voortgang per test.
- Een loop waarin mislukte tests automatisch worden bijgestuurd.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- Een bestaande testsuite is door de AI geanalyseerd, en het resultaat bevat minimaal 1 onderbouwd verbeterpunt (bijvoorbeeld een duplicaat, een verouderde test of onnodige complexiteit), of een onderbouwing waarom de geteste onderdelen al goed zijn opgezet.
- Minimaal 1 klein, samenhangend onderdeel is opnieuw geïmplementeerd in het gekozen doelframework.
- De nieuwe tests zijn live uitgevoerd en slagen; het team kan laten zien dat de relevante dekking behouden of verbeterd is.
- Het resultaatoverzicht toont per oude test de status (vervangen, samengevoegd, verwijderd of nog niet verwerkt) met een reden.
- Het goedkeuringsmoment is zichtbaar in de flow: voorstellen worden pas doorgevoerd na akkoord van een mens.
- Beperkingen en resterend handwerk zijn gedocumenteerd.
