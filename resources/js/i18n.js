import { createI18n } from 'vue-i18n';

import en from './components/json/en.json';
import id from './components/json/id.json';

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('language') || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    id
  }
});

export default i18n;