const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'kr', 'vn'],
    reloadOnPrerender: true,
  },
  react: { useSuspense: false },
  localePath: path.resolve('./public/static/locales'),
};
