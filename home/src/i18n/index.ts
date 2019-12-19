import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import NextI18Next from 'next-i18next';

/**
 * @see https://react.i18next.com/latest/i18next-instance
 */

i18next.use(LanguageDetector).init({
  fallbackLng: 'en',
  defaultNS: 'common',
  ns: ['common'],
  debug: false,
});

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'ko',
  otherLanguages: ['en'],
  // localeSubpaths: {
  //   ko: 'ko',
  // },
});

export const { appWithTranslation, withTranslation, useTranslation, i18n } = NextI18NextInstance;

export default NextI18NextInstance;
