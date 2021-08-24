module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'UI Library Starter',
      description: 'Vue Component UI Library Starter',
    },
  },

  themeConfig: {
    repoLabel: 'GitHub repo',
    repo: 'https://github.com/ushliypakostnik/ui-library-starter.git',
    docsDir: 'docs',
    search: false,
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
              'structure',
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
                title: `Button`,
                path: '/components/button',
              },
              {
                title: `Grid`,
                path: '/components/grid',
              },
              {
                title: `Icon`,
                path: '/components/icon',
              },
              {
                title: `Input`,
                path: '/components/input',
              },
              {
                title: `Link`,
                path: '/components/link',
              },
              {
                title: `Wrapper`,
                path: '/components/wrapper',
              },
              {
                title: `controls.js`,
                path: '/components/controls',
              },
              {
                title: `inputs.js`,
                path: '/components/inputs',
              },
            ],
          },
          {
            title: `Sandbox`,
            path: '/sandbox/sandbox',
          },
        ],
      },
    },
  },
};
