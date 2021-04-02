/* eslint-disable import/prefer-default-export */
export function onInitialClientRender(_, pluginOptions) {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require,@typescript-eslint/no-var-requires
    const { default: worker } = require('./src/mocks/browser');
    worker.start();
  }
}
