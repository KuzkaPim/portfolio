import { setRequestLocale } from 'next-intl/server';
import { HomePage } from '../../views/Home';

interface Props {
  params: Promise<{ locale: string }>;
}

const Page = async ({ params }: Props) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomePage />;
};

export default Page;
