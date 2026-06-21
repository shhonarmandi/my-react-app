import {BackendModule} from 'i18next';

export const lazyImport: BackendModule = {
  type: 'backend',
  init: () => {},
  read: function (language, namespace, callback) {
    /* v8 ignore next 3 */
    import(`./translations/${language}/${namespace}.json`).then(response => {
      callback(null, response);
    });
  },
};
