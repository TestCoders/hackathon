---
title: Local LLM
description: AI-hulp zonder dat er ook maar één regel code de organisatie verlaat.
---

# Local LLM

Deze categorie draait om **AI die volledig op eigen hardware draait**. Geen API-key, geen cloud, geen data die de deur uitgaat.

| Onderwerp | Waar het over gaat | Hoofdtechniek |
|-----------|--------------------|---------------|
| [Lokale codereview-LLM](./lokale-codereview-llm) | Codereview op je eigen machine, volledig offline | Ollama, open-weight model, git |

## Waarom deze categorie

Veel klanten — banken, verzekeraars, zorg, overheid — verbieden het delen van broncode met externe AI-diensten. Daar staat AI-ondersteuning nu volledig stil. Een lokaal draaiend model haalt die blokkade weg, en is bovendien een sterk verhaal richting klanten met strenge compliance-eisen.

## Randvoorwaarden

::: warning Hardware vooraf regelen
Een bruikbaar model heeft geheugen nodig. Reken op minimaal **16 GB RAM** voor een 7B-model en **32 GB** voor een 14B-model; een GPU maakt het verschil tussen seconden en minuten wachten.

Download modellen **vóór de hackathon**. Een model van 5–20 GB binnenhalen op hackathon-wifi kost meer tijd dan het bouwen zelf.
:::

- Test vroeg op de zwakste laptop in het team; daar wordt gedemonstreerd.
- Meet altijd tijd per review — een lokaal model dat 10 minuten doet over één bestand wordt niet gebruikt.
- Toon expliciet dat er geen netwerkverkeer is: dat is de kern van de demo.
