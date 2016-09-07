/* global navigator window */

const DEFAULT_LANGUAGE = 'en';

const i18n = {
  selectedLanguage: '',
  languages: ['en', 'es', 'fr']
};

i18n.setLanguage = function(lang) {
  if (!lang) {
    lang = window.localStorage.getItem('lang') ||
      (navigator.selectedLanguage || navigator.userLanguage || DEFAULT_LANGUAGE).split('-')[0];
  }

  this.selectedLanguage = lang;
  window.localStorage.setItem('lang', lang);

  return this.selectedLanguage;
};

i18n.getLanguage = function() {
  return this.selectedLanguage || window.localStorage.getItem('lang') || DEFAULT_LANGUAGE;
};

export default i18n;
