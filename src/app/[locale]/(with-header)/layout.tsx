import { DesktopHeader, MobileHeader } from './blocks';
import { Suspense } from 'react';
import { setRequestLocale } from 'next-intl/server';

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

const Layout = async ({ children, params }: Props) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Suspense>
        <DesktopHeader />
        <MobileHeader />
      </Suspense>
      {children}
    </>
  );
};

export default Layout;
