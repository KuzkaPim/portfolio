import type { Locale } from 'next-intl';

const cvPathByLocale: Record<Locale, string> = {
  ru: '/assets/Pimenov_Kuzma_Frontend_Developer_ru.pdf',
  en: '/assets/Pimenov_Kuzma_Frontend_Developer_en.pdf',
};

export const getCvPath = (locale: Locale) => {
  return cvPathByLocale[locale];
};
