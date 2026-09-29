import { setRequestLocale } from 'next-intl/server';
import { parseLocaleOrNotFound } from '@/src/i18n/parseLocaleOrNotFound';
import { ProjectsPage } from '@/src/views/Projects';

interface Props {
  params: Promise<{ locale: string }>;
}

const Page = async ({ params }: Props) => {
  const { locale: rawLocale } = await params;
  const locale = parseLocaleOrNotFound(rawLocale);

  setRequestLocale(locale);

  return <ProjectsPage />;
};

export default Page;
