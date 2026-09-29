import { notFound } from 'next/navigation';
import { hasLocale, type Locale } from 'next-intl';
import { routing } from './routing';

export const parseLocaleOrNotFound = (locale: string): Locale => {
  return hasLocale(routing.locales, locale) ? locale : notFound();
};
