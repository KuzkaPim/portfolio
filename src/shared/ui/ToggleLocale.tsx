'use client';

import { useLocale } from 'next-intl';
import { useState, useTransition } from 'react';
import { useRouter, usePathname } from '@/src/i18n/navigation';
import { GrLanguage } from 'react-icons/gr';

export interface ToggleLocaleProps {
  keepMenuOpen?: boolean;
}

let globalHoverState = false;

export const ToggleLocale = ({ keepMenuOpen = false }: ToggleLocaleProps) => {
  const [isPending, startTransition] = useTransition();
  const [isHovered, setIsHovered] = useState(globalHoverState);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleMouseEnter = () => {
    globalHoverState = true;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    globalHoverState = false;
    setIsHovered(false);
  };

  const toggleLocale = () => {
    if (isPending) return;

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

    startTransition(() => {
      router.replace(fullPath, { locale: nextLocale, scroll: false });
    });
  };

  const isRussian = locale === 'ru';

  return (
    <button
      onClick={toggleLocale}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`text-sm text-content-secondary flex items-center backdrop-blur-md rounded-full shadow-md border border-white/20 cursor-pointer group/locale transition-colors duration-250 ${isHovered ? 'bg-accent/90' : 'bg-accent/80'}`}
    >
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
      <div
        className={`transition duration-250 transform-gpu size-11 p-2.5 ${isHovered ? 'rotate-60' : ''}`}
        aria-label="Toggle language"
        style={{
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        <GrLanguage className="size-full" />
      </div>
    </button>
  );
};
