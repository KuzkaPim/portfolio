'use client';

import { useLocale } from 'next-intl';
import { useTransition, useState, useEffect } from 'react';
import { useRouter, usePathname } from '@/src/i18n/navigation';
import { GrLanguage } from 'react-icons/gr';
import { useSearchParams } from 'next/navigation';

export interface ToggleLocaleProps {
  keepMenuOpen?: boolean;
}

let isGlobalFlight = false;

export const ToggleLocale = ({ keepMenuOpen = false }: ToggleLocaleProps) => {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isFrozen, setIsFrozen] = useState(() => isGlobalFlight);

  useEffect(() => {
    if (isFrozen) {
      const timer = setTimeout(() => {
        setIsFrozen(false);
        isGlobalFlight = false;
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isFrozen]);

  const toggleLocale = () => {
    if (isPending) return;

    isGlobalFlight = true;
    setIsFrozen(true);

    const nextLocale = locale === 'en' ? 'ru' : 'en';
    const currentParams = new URLSearchParams(searchParams.toString());
    if (keepMenuOpen) currentParams.set('menu', 'open');
    const queryString = currentParams.toString()
      ? `?${currentParams.toString()}`
      : '';
    const hash = typeof window !== 'undefined' ? window.location.hash : '';

    startTransition(() => {
      router.replace(`${pathname}${queryString}${hash}`, {
        locale: nextLocale,
        scroll: false,
      });
    });
  };

  const isRussian = locale === 'ru';

  return (
    <button
      onClick={toggleLocale}
      data-frozen={isFrozen}
      className={`
        relative flex items-center text-sm text-content-secondary rounded-full
        backdrop-blur-sm border border-white/20 cursor-pointer
        transition-all duration-250 group
        bg-accent/60
        [@media(hover:hover)]:hover:bg-accent/70
        data-[frozen=true]:[@media(hover:hover)]:bg-accent/70
        active:scale-98
      `}
      style={{
        transition: isFrozen ? 'none' : undefined,
      }}
    >
      <div
        className={`flex items-center justify-center size-11 rounded-full transition-colors duration-250 ${isRussian ? 'bg-white/10 text-content-secondary' : 'text-white/50'}`}
      >
        РУ
      </div>
      <div
        className={`flex items-center justify-center size-11 rounded-full transition-colors duration-250 ${!isRussian ? 'bg-white/10 text-content-secondary' : 'text-white/50'}`}
      >
        EN
      </div>

      <div
        className={`
          size-11 p-2.5 transform-gpu
          transition-transform duration-250 ease-in-out
          [@media(hover:hover)]:group-hover:rotate-60
          group-data-[frozen=true]:[@media(hover:hover)]:rotate-60
        `}
        style={{
          transition: isFrozen ? 'none' : undefined,
          willChange: 'transform',
        }}
        aria-hidden="true"
      >
        <GrLanguage className="size-full" />
      </div>
    </button>
  );
};
