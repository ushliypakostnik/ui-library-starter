module.exports = {
  locales: {
    '/': {
      lang: 'ru',
      title: 'UI Library Starter',
      description: 'Vue Component UI Library Starter',
    },
  },

  themeConfig: {
    repoLabel: 'GitHub repo',
    // git repo here... gitlab, github
    repo: 'https://github.com/ushliypakostnik/ui-library-starter.git',
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
        nav: [{ text: 'NPM', link: 'https://www.npmjs.com/package/ui-library-starter' }],
        sidebar: [
          {
            title: `Intro`,
            // collapsable: false,
            children: [
              '/',
              '/start',
              '/links',
            ],
          },
          {
            title: `Constants`,
            children: [
              {
                title: `_stylebase.styl`,
                path: '/constants/stylebase',
              },
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
              {
                title: `Others`,
                path: '/constants/others',
              },
            ],
          },
          {
            title: `Components`,
            children: [
              {
                title: `Test`,
                path: '/components/test',
              },
              {
                title: `Link`,
                path: '/components/link',
              },
            ],
          },
        ],
        sidebarDepth: 5,
      },
    },
  },
};
