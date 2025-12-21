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
    <div className="flex items-center gap-4 bg-accent/80 backdrop-blur-md rounded-full shadow-md pl-2 border border-white/20">
      <div className="text-sm text-white">
        <span
          className={`px-2 py-1 rounded-full ${isRussian ? 'bg-accent' : ''}`}
        >
          РУ
        </span>
        <span
          className={`px-2 py-1 rounded-full ${!isRussian ? 'bg-accent' : ''}`}
        >
          EN
        </span>
      </div>
      <button
        onClick={toggleLocale}
        className="transition rounded-full cursor-pointer transform-gpu size-11 p-2 bg-transparent text-primary hover:bg-accent"
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
