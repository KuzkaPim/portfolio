'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export const ThemeCookieSync = () => {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme) {
      // biome-ignore lint/suspicious/noDocumentCookie: Keep the selected theme available during SSR.
      document.cookie = `theme=${resolvedTheme}; path=/; max-age=31536000; SameSite=Lax`;
    }
  }, [resolvedTheme]);

  return null;
};
