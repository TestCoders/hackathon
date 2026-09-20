import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'nl-NL',
  title: 'TestCoders Hackathon',
  description: 'MVP-definities en documentatie voor de TestCoders hackathon',
  base: '/hackathon/',
  lastUpdated: true,
  cleanUrls: true,
  head: [['meta', { name: 'theme-color', content: '#3c8772' }]],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dagprogramma', link: '/dagprogramma' },
      { text: 'MVP-overzicht', link: '/mvp/' },
      { text: 'Template', link: '/template' },
      { text: 'Bijdragen', link: '/bijdragen' }
    ],

    sidebar: [
      {
        text: 'Algemeen',
        items: [
          { text: 'Introductie', link: '/' },
          { text: 'Dagprogramma', link: '/dagprogramma' },
          { text: 'MVP-overzicht', link: '/mvp/' },
          { text: 'MVP Template', link: '/template' },
          { text: 'Bijdragen', link: '/bijdragen' }
        ]
      },
      {
        text: 'Testing toolbox',
        collapsed: false,
        items: [
          { text: 'Coding guidelines + AI-skills', link: '/mvp/testing-toolbox/ai-skills-set' },
          { text: 'Browser plugin voor locators', link: '/mvp/testing-toolbox/browser-plugin-locators' },
          { text: 'Testdatagenerator', link: '/mvp/testing-toolbox/testdatagenerator' },
          { text: 'AI testpipeline / agent tool', link: '/mvp/testing-toolbox/ai-testpipeline' }
        ]
      },
      {
        text: 'Iets bouwen voor TestCoders',
        collapsed: false,
        items: [
          { text: 'Declaratie-app', link: '/mvp/testcoders/declaratie-app' },
          { text: 'Website', link: '/mvp/testcoders/website' },
          { text: 'Casus', link: '/mvp/testcoders/casus' },
          { text: 'Uren', link: '/mvp/testcoders/uren' },
          { text: 'AI-chatbot voor de website', link: '/mvp/testcoders/ai-chatbot' }
        ]
      },
      {
        text: 'Framework from scratch',
        collapsed: false,
        items: [
          { text: 'API-testtool maken', link: '/mvp/framework/api-testtool' }
        ]
      },
      {
        text: 'Local LLM',
        collapsed: false,
        items: [
          { text: 'Lokale codereview-LLM', link: '/mvp/local-llm/lokale-codereview-llm' }
        ]
      },
      {
        text: 'Break-it hackathon',
        collapsed: false,
        items: [
          { text: 'Break-it hackathon', link: '/mvp/break-it' }
        ]
      },
      {
        text: 'Overig',
        collapsed: false,
        items: [
          { text: 'Tool shootout', link: '/mvp/overig/tool-shootout' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TestCoders/hackathon' }
    ],

    search: { provider: 'local' },

    editLink: {
      pattern: 'https://github.com/TestCoders/hackathon/edit/main/docs/:path',
      text: 'Bewerk deze pagina op GitHub'
    },

    docFooter: { prev: 'Vorige', next: 'Volgende' },
    outline: { level: [2, 3], label: 'Op deze pagina' },
    lastUpdatedText: 'Laatst bijgewerkt',
    returnToTopLabel: 'Naar boven',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Thema',
    lightModeSwitchTitle: 'Schakel naar lichte modus',
    darkModeSwitchTitle: 'Schakel naar donkere modus',

    footer: {
      message: 'Gemaakt tijdens de TestCoders hackathon',
      copyright: 'Copyright © TestCoders'
    }
  }
})
