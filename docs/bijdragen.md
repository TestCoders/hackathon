---
title: Bijdragen
description: Hoe je een nieuw hackathon-onderwerp toevoegt aan deze documentatiesite.
---

# Bijdragen

## Lokaal draaien

```bash
npm install
npm run docs:dev
```

De site draait daarna op `http://localhost:5173/hackathon/`. Wijzigingen in markdown-bestanden zijn direct zichtbaar.

Productiebuild controleren voordat je pusht:

```bash
npm run docs:build
npm run docs:preview
```

## Een bestaand MVP invullen

1. Zoek je onderwerp in het [MVP-overzicht](/mvp/).
2. Open het bijbehorende bestand in [docs/mvp/](https://github.com/TestCoders/hackathon/tree/main/docs/mvp).
3. Vul in sectie 1 de **datum** en de **teamnamen** in.
4. Pas gerust de kernfunctionaliteiten aan als je team een andere scope kiest — maar houd de zes secties intact.

## Een nieuw onderwerp toevoegen

1. Kopieer de inhoud van [template.md](https://github.com/TestCoders/hackathon/blob/main/docs/template.md).
2. Maak een nieuw bestand aan onder de juiste categorie, bijvoorbeeld `docs/mvp/testing-toolbox/mijn-onderwerp.md`.
3. Zet bovenaan de frontmatter:

```yaml
---
title: Mijn onderwerp
description: Eén zin over wat dit MVP oplevert.
---
```

4. Voeg de pagina toe aan de sidebar in [docs/.vitepress/config.mts](https://github.com/TestCoders/hackathon/blob/main/docs/.vitepress/config.mts):

```ts
{ text: 'Mijn onderwerp', link: '/mvp/testing-toolbox/mijn-onderwerp' }
```

5. Zet het onderwerp ook in de tabel op de overzichtspagina van de categorie én in [docs/mvp/index.md](https://github.com/TestCoders/hackathon/blob/main/docs/mvp/index.md).

## Een nieuwe categorie toevoegen

Maak een map onder `docs/mvp/`, geef die een `index.md` met een korte introductie en een tabel van de onderwerpen, en voeg een nieuw sidebar-blok toe in de config. Voeg de categorie daarna toe aan de `features`-lijst op de [homepage](https://github.com/TestCoders/hackathon/blob/main/docs/index.md).

## Publiceren

Elke push naar `main` bouwt de site en publiceert die via GitHub Actions naar GitHub Pages. Zie [.github/workflows/deploy.yml](https://github.com/TestCoders/hackathon/blob/main/.github/workflows/deploy.yml).

::: warning Eenmalige instelling
Zet in de repository-instellingen **Settings → Pages → Source** op **GitHub Actions**, anders faalt de eerste deploy.
:::

## Schrijfafspraken

- Alles op deze site is **Nederlandstalig**.
- Vakjargon (locator, pipeline, pull request, prompt) blijft gewoon Engels.
- Houd de zes template-secties aan, in dezelfde volgorde en met dezelfde koppen.
- Maak succescriteria **meetbaar**: een aantal, een percentage of een demobaar resultaat.
