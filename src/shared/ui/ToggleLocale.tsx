'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/src/i18n/navigation';
import { GrLanguage } from 'react-icons/gr';

interface ToggleLocaleProps {
  className?: string;
  keepMenuOpen?: boolean;
}

export const ToggleLocale = ({
  className = 'size-8 p-1.5',
  keepMenuOpen = false,
}: ToggleLocaleProps) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'ru' : 'en';
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    let search = '';

    if (typeof window !== 'undefined') {
      search = window.location.search;

      if (keepMenuOpen) {
        const params = new URLSearchParams(search);
        params.set('menu', 'open');
        search = `?${params.toString()}`;
      }
    }

    const fullPath = `${pathname}${search}${hash}`;

    router.replace(fullPath, { locale: nextLocale });
  };

  const languageLabel = locale === 'en' ? 'EN' : 'РУ';

  return (
    <div className="flex items-center gap-2">
      <div className="bg-gray-200 py-0.5 px-2 text-sm rounded-xl text-gray-600">
        {languageLabel}
      </div>
      <button
        onClick={toggleLocale}
        className={`bg-accent rounded-full text-primary transition hover:bg-accent-hover ${className}`}
        aria-label="Toggle language"
      >
        <GrLanguage className="size-full" />
      </button>
    </div>
  );
};
