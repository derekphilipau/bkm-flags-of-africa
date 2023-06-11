export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es'],
} as const

export const localeNames = {
  en: 'English',
  es: 'Español',
} as const

export type Locale = (typeof i18n)['locales'][number]