/* eslint-disable import/prefer-default-export */
export function onInitialClientRender(_, pluginOptions) {
  switch (process.env.NODE_ENV) {
    case 'staging': {
      // eslint-disable-next-line global-require,@typescript-eslint/no-var-requires
      const { default: worker } = require('./src/mocks/browser');
      worker.start({
        serviceWorker: {
          // Points to the custom location of the Service Worker file.
          url: '/frontend-framework-team/boilerplate-gatsby/mockServiceWorker.js',
        },
      });
      break;
    }
    case 'development': {
      // eslint-disable-next-line global-require,@typescript-eslint/no-var-requires
      const { default: worker } = require('./src/mocks/browser');
      worker.start();
      break;
    }
    default:
  }
}
