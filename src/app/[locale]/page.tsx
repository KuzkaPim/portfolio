import { HomePage } from '../../views/Home';
import { setRequestLocale } from 'next-intl/server';

interface Props {
  params: Promise<{ locale: string }>;
}

const Page = async ({ params }: Props) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomePage />;
};

export default Page;
