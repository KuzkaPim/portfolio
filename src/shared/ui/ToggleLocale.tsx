'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/src/i18n/navigation';
import { GrLanguage } from 'react-icons/gr';

interface ToggleLocaleProps {
  keepMenuOpen?: boolean;
}

export const ToggleLocale = ({ keepMenuOpen = false }: ToggleLocaleProps) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'ru' : 'en';
    let hash = '';
    let search = '';

    if (typeof window !== 'undefined') {
      search = window.location.search;
      hash = window.location.hash;

      if (keepMenuOpen) {
        const params = new URLSearchParams(search);
        params.set('menu', 'open');
        search = `?${params.toString()}`;
      }
    }

    const fullPath = `${pathname}${search}${hash}`;

    router.replace(fullPath, { locale: nextLocale, scroll: false });
  };

  const isRussian = locale === 'ru';

  return (
    <div className="text-sm text-primary flex items-center bg-accent/80 backdrop-blur-md rounded-full shadow-md border border-white/20">
      <div
        className={`flex items-center justify-center size-11 rounded-full ${isRussian ? 'bg-white/10' : ''}`}
      >
        РУ
      </div>
      <div
        className={`flex items-center justify-center size-11 rounded-full ${!isRussian ? 'bg-white/10' : ''}`}
      >
        EN
      </div>
      <button
        onClick={toggleLocale}
        className="transition rounded-full cursor-pointer transform-gpu size-11 p-2.5 bg-transparent text-primary hover:bg-accent"
        aria-label="Toggle language"
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        <GrLanguage className="size-full" />
      </button>
    </div>
  );
};
