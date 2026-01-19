'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ComponentProps } from 'react';
import { ThemeCookieSync } from '@/src/shared/ui';

export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <ThemeCookieSync />
      {children}
    </NextThemesProvider>
  );
}
