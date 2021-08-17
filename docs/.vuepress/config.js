module.exports = {
  locales: {
    '/': {
      lang: 'ru',
      title: 'UI Library Starter',
      description: 'Vue Component UI Library Starter',
    },
  },

  themeConfig: {
    repoLabel: 'Murick is best!',
    // git repo here... gitlab, github
    repo: '',
    docsDir: 'docs',
    search: true,
    locales: {
      '/': {
        // service worker is configured but will only register in production
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
        nav: [{ text: 'GitHub', link: '' }],
        sidebar: [
          {
            title: `Intro`,
            // collapsable: false,
            children: [
              '/',
              '/start',
            ],
          },
          {
            title: `Constants`,
            children: [
              {
                title: `Colors`,
                path: '/constants/colors',
              },
              {
                title: `Breakpoints`,
                path: '/constants/breakpoints',
              },
              {
                title: `Typography`,
                path: '/constants/typography',
              },
            ],
          },
          {
            title: `Components`,
            children: [
              {
                title: `Test`,
                path: '/components/test',
                children: [
                ],
              },
            ],
          },
        ],
        sidebarDepth: 5,
      },
    },
  },
};
