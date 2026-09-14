---
title: Uren
description: Urenregistratie die in seconden klaar is, met export naar facturatie.
---

# Uren

## 1. Projectnaamsvermelding
**Naam:** Urenregistratie TestCoders
**Versie:** MVP 1.0
**Datum:** [Datum]
**Team:** [Namen van de deelnemers]

---

## 2. Doelstelling

### Hoofddoel
Een urenregistratie opleveren waarmee een consultant zijn week in minder dan een minuut invult en waarmee de backoffice direct een factureerbaar overzicht per klant heeft.

### Subdoelen
- Een **volledige week invullen in onder de 60 seconden**, gemeten met een stopwatch tijdens de demo.
- **Weekweergave** met alle dagen naast elkaar, in plaats van per dag een formulier openen.
- **Vorige week kopiëren** als startpunt, zodat terugkerende opdrachten niet opnieuw ingevoerd worden.
- **Validatie** die waarschuwt bij meer dan 12 uur op een dag, bij een dag zonder uren in een werkweek en bij uren op een dag die nog in de toekomst ligt.
- **Export per klant en per periode** naar CSV voor facturatie.
- Werkend op **mobiel en desktop**.

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Consultant | Werkt bij één of meerdere klanten tegelijk | Zo min mogelijk klikken; herhalen van vorige week; invullen op de telefoon |
| Backoffice / facturatie | Factureert maandelijks per klant | Betrouwbare, complete uren per klant; export zonder handwerk |
| Manager | Bewaakt inzet en bezetting van het team | Zien wie nog niet ingevuld heeft; totalen per klant en per periode |
| Klant (indirect) | Betaalt de factuur | Navolgbare specificatie per opdracht |

---

## 4. Kernfunctionaliteiten (Must-Have)

### Voor de consultant
✅ **Weekweergave met snelle invoer**
- Een raster van opdrachten tegen dagen van de week; uren invullen zonder pagina's te wisselen, met totalen per dag en per week live bijgewerkt.

✅ **Vorige week kopiëren**
- Eén knop neemt de opdrachten en urenverdeling van de vorige week over als startpunt; je past alleen de afwijkingen aan.

✅ **Week indienen met validatie**
- Bij indienen controleert de app op onwaarschijnlijke en ontbrekende invoer en toont een duidelijke melding vóór verzending.

### Voor backoffice en manager
✅ **Overzicht per klant en periode**
- Alle geboekte uren gegroepeerd per klant met totalen, filterbaar op periode en medewerker.

✅ **Signalering van ontbrekende weken**
- Lijst van medewerkers die een week nog niet hebben ingediend, zodat nabellen gericht gebeurt.

✅ **CSV-export voor facturatie**
- Export van een gekozen periode met klant, medewerker, opdracht, datum en aantal uren, klaar voor de facturatiesoftware.

---

## 5. Nice-to-Have
- Goedkeuringsstap door de klant of manager per week.
- Koppeling met facturatiesoftware in plaats van CSV.
- Herinnering per e-mail of Slack op vrijdagmiddag.
- Verlof en feestdagen automatisch invullen.
- Grafiek met declarabiliteit per maand.
- Timer-modus om lopend werk te registreren.
- Koppeling met de [declaratie-app](./declaratie-app) zodat reiskosten en uren in één handeling gaan.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- Een volledige week invullen en indienen lukt live in onder de 60 seconden.
- "Vorige week kopiëren" werkt en scheelt zichtbaar handelingen in de demo.
- Validatie blokkeert aantoonbaar een week met 20 uur op één dag.
- Het klantoverzicht toont correcte totalen, te controleren tegen de ingevoerde data.
- De CSV-export opent in Excel met de juiste kolommen en optelt tot hetzelfde totaal als in de app.
