'use client';

import { Suspense } from 'react';
import { usePathname, useRouter } from '@/src/i18n/navigation';
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <Suspense>
      <DesktopHeader isHomePage={isHomePage} onBack={handleBack} />
      <MobileHeader isHomePage={isHomePage} onBack={handleBack} />
    </Suspense>
  );
};
