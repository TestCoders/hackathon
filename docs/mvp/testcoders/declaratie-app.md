---
title: Declaratie-app
description: Onkosten declareren vanaf je telefoon, met bonfoto, OCR en directe goedkeuring.
---

# Declaratie-app

## 1. Projectnaamsvermelding
**Naam:** TestCoders Declaratie-app
**Versie:** MVP 1.0
**Datum:** [Datum]
**Team:** [Namen van de deelnemers]

---

## 2. Doelstelling

### Hoofddoel
Een mobiele web-app opleveren waarmee een consultant een onkostendeclaratie indient binnen 60 seconden vanaf de bon in zijn hand, en waarmee de backoffice die met één klik goedkeurt.

### Subdoelen
- Een declaratie indienen in **maximaal 4 handelingen**: foto maken, bedrag controleren, categorie kiezen, versturen.
- **OCR op de bonfoto** die bedrag en datum voorinvult, met minimaal **70% correcte herkenning** op een set van 10 echte bonnen.
- Kilometerdeclaratie met **automatische berekening** op basis van afstand maal kilometervergoeding.
- Goedkeuringsscherm waarin de backoffice een declaratie in **één klik** goedkeurt of afwijst, met verplichte reden bij afwijzing.
- Export van goedgekeurde declaraties naar **CSV** voor de salarisadministratie.
- Volledig bruikbaar op een telefoonscherm van **375px breed**.
- Bestaande TestCoders-huisstijl aanhouden waar mogelijk, zodat de demo er meteen uitziet als TestCoders.

---

## 3. Doelgroep

| Rol | Beschrijving | Belangrijkste Behoeften |
|-----|--------------|--------------------------|
| Consultant | Maakt onkosten bij klanten: reizen, parkeren, lunch, materiaal | Onderweg indienen; bon niet hoeven bewaren; zien wanneer het uitbetaald wordt |
| Backoffice / financiële administratie | Controleert en verwerkt declaraties | Overzicht van openstaande declaraties; bon direct naast het bedrag; export naar boekhouding |
| Manager | Keurt declaraties van zijn team goed | Snel goedkeuren op de telefoon; afwijkingen zien zonder alles te openen |
| Directie | Wil grip op kosten | Totalen per maand en per categorie |

---

## 4. Kernfunctionaliteiten (Must-Have)

### Voor de consultant
✅ **Declaratie indienen met bonfoto**
- Foto maken of uploaden vanaf de telefoon, bedrag en datum controleren, categorie kiezen en versturen. De foto blijft als bewijsstuk gekoppeld.

✅ **OCR die het formulier voorinvult**
- Uit de bonfoto worden bedrag en datum herkend en ingevuld; de gebruiker corrigeert waar nodig in plaats van alles te typen.

✅ **Kilometerdeclaratie**
- Vertrek- en aankomstadres invullen, aantal kilometers opgeven en het bedrag wordt berekend met het ingestelde tarief.

✅ **Statusoverzicht**
- Lijst van eigen declaraties met status ingediend / goedgekeurd / afgewezen, inclusief reden bij afwijzing.

### Voor de backoffice en manager
✅ **Goedkeuringsscherm**
- Alle openstaande declaraties in één lijst, met bonfoto naast het bedrag en goedkeur- of afwijsknop per regel.

✅ **Export naar CSV**
- Alle goedgekeurde declaraties over een gekozen periode exporteren als CSV, klaar voor verwerking in de administratie.

---

## 5. Nice-to-Have
- Automatische kilometerberekening via een routeservice in plaats van handmatige invoer.
- Koppeling met boekhoudsoftware (Exact, AFAS) in plaats van CSV.
- Push-notificatie bij goedkeuring of afwijzing.
- Btw automatisch afsplitsen per bonregel.
- Herkenning van dubbel ingediende bonnen.
- Offline indienen met synchronisatie zodra er verbinding is.
- Installeerbaar als PWA op het startscherm.

---

## 6. Succescriteria
*Wat moet er aan het eind van de hackathon werkend zijn om het project als geslaagd te beschouwen?*

- Een declaratie met bonfoto indienen op een echte telefoon, live in de demo, binnen 60 seconden.
- OCR vult bij minimaal 7 van de 10 testbonnen het juiste bedrag in.
- De backoffice keurt in dezelfde demo een declaratie goed; de status bij de consultant verandert zichtbaar mee.
- Een kilometerdeclaratie berekent het juiste bedrag bij het ingestelde tarief.
- De CSV-export opent in Excel met de juiste kolommen en bedragen.
