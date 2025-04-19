import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {lazyImport} from './i18n.plugins';
import {LANGUAGES} from './i18n.constants';

i18n
  .use(lazyImport)
  .use(initReactI18next)
  .init({
    lng: LANGUAGES.EN,
    fallbackLng: LANGUAGES.EN,
    ns: ['common'],
    missingKeyHandler: function (language, namespace, key, fallbackValue) {
      console.error({language, namespace, key, fallbackValue});
    },
  });

export {i18n};
