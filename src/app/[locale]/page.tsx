import { setRequestLocale } from 'next-intl/server';
import { parseLocaleOrNotFound } from '@/src/i18n/parseLocaleOrNotFound';
import { HomePage } from '../../views/Home';

interface Props {
  params: Promise<{ locale: string }>;
}

const Page = async ({ params }: Props) => {
  const { locale: rawLocale } = await params;
  const locale = parseLocaleOrNotFound(rawLocale);

  setRequestLocale(locale);

  return <HomePage />;
};

export default Page;
