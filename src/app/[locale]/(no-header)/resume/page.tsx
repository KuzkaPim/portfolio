import { ResumePage } from '@/src/listOfPages/Resume';
import { setRequestLocale } from 'next-intl/server';

interface Props {
  params: Promise<{ locale: string }>;
}

const Page = async ({ params }: Props) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ResumePage />;
};

export default Page;
