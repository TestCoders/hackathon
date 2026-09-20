# TestCoders Hackathon

📖 **Documentatie: <https://testcoders.github.io/hackathon/>**

> De site gaat live zodra GitHub Pages is ingeschakeld onder **Settings → Pages → Source: GitHub Actions**. Tot die tijd draai je de docs lokaal met `npm run docs:dev`.

Documentatiesite met alle onderwerpen voor de TestCoders hackathon. Elk onderwerp is uitgewerkt als **MVP** volgens één vast template, zodat teams van tevoren weten wat ze bouwen en wanneer het af is.

Gebouwd met [VitePress](https://vitepress.dev). Alle content is Nederlandstalig.

## Snel starten

```bash
npm install
npm run docs:dev
```

De site draait daarna op <http://localhost:5173/hackathon/>.

| Commando | Wat het doet |
|----------|--------------|
| `npm run docs:dev` | Lokale ontwikkelserver met hot reload |
| `npm run docs:build` | Productiebuild naar `docs/.vitepress/dist` |
| `npm run docs:preview` | Productiebuild lokaal bekijken |

## Inhoud

Start hier:

- [Introductie / homepage](docs/index.md) — hoe de hackathon werkt
- [Dagprogramma](docs/dagprogramma.md) — tijdschema en afspraken voor de dag zelf
- [MVP-overzicht](docs/mvp/index.md) — alle onderwerpen per categorie
- [MVP-template](docs/template.md) — het lege template met invulinstructie
- [Bijdragen](docs/bijdragen.md) — een onderwerp toevoegen of invullen

### Testing toolbox

Gereedschap voor testers en developers.

- [Coding guidelines + AI-skills](docs/mvp/testing-toolbox/ai-skills-set.md)
- [Browser plugin voor locators](docs/mvp/testing-toolbox/browser-plugin-locators.md)
- [Testdatagenerator](docs/mvp/testing-toolbox/testdatagenerator.md)
- [AI testpipeline / agent tool](docs/mvp/testing-toolbox/ai-testpipeline.md)

### Iets bouwen voor TestCoders

Interne tooling en de eigen website.

- [Declaratie-app](docs/mvp/testcoders/declaratie-app.md)
- [Website](docs/mvp/testcoders/website.md)
- [Casus](docs/mvp/testcoders/casus.md)
- [Uren](docs/mvp/testcoders/uren.md)
- [AI-chatbot voor de website](docs/mvp/testcoders/ai-chatbot.md)

### Framework from scratch

Zelf bouwen wat je normaal importeert.

- [API-testtool maken](docs/mvp/framework/api-testtool.md)

### Local LLM

AI zonder dat data de organisatie verlaat.

- [Lokale codereview-LLM](docs/mvp/local-llm/lokale-codereview-llm.md)

### Break-it hackathon

Niet bouwen maar breken.

- [Break-it hackathon](docs/mvp/break-it.md)

### Overig

- [Tool shootout](docs/mvp/overig/tool-shootout.md)

## Repostructuur

```
docs/
  .vitepress/config.mts   navigatie, sidebar, thema
  index.md                homepage
  dagprogramma.md         tijdschema en afspraken voor de hackathondag
  template.md             leeg MVP-template
  bijdragen.md            hoe je content toevoegt
  mvp/
    index.md              overzicht van alle onderwerpen, per categorie
    break-it.md            break-it als één samengevoegd MVP
    testing-toolbox/      onderwerpen (geen aparte categoriepagina)
    testcoders/
    framework/
    local-llm/
    overig/
.github/workflows/deploy.yml   build en publicatie naar GitHub Pages
```

## Een onderwerp toevoegen

1. Kopieer [docs/template.md](docs/template.md) naar de juiste categoriemap.
2. Vul alle zes secties in.
3. Voeg de pagina toe aan de sidebar in [docs/.vitepress/config.mts](docs/.vitepress/config.mts) en aan [docs/mvp/index.md](docs/mvp/index.md).

Uitgebreide instructies staan in [docs/bijdragen.md](docs/bijdragen.md).

## Publiceren

Elke push naar `main` bouwt en publiceert de site via GitHub Actions naar GitHub Pages: [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

> **Eenmalig instellen:** zet in de repository onder **Settings → Pages → Source** de bron op **GitHub Actions**, anders faalt de eerste deploy.

De `base` in de VitePress-config staat op `/hackathon/`, passend bij `https://testcoders.github.io/hackathon/`. Gebruik je een eigen domein, pas dan `base` aan naar `/`.
