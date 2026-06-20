'use client';

import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { Swithes } from '@/src/shared/ui';
import { NAV_ITEMS } from '../constants';

export const MobileHeader = () => {
  const t = useTranslations('nav');
  const searchParams = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(
    searchParams.get('menu') === 'open'
  );
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    const onClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (ref.current.contains(e.target as Node)) return;
      setIsMenuOpen(false);
    };

    const onScroll = () => setIsMenuOpen(false);

    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (searchParams.get('menu') === 'open') {
      window.history.replaceState({}, '', location.pathname + location.hash);
    }
  }, [searchParams]);

  const toggleMenu = (): void => setIsMenuOpen((prev) => !prev);

  return (
    <header className="lg:hidden fixed z-20 right-2 top-2">
      <div ref={ref} className="relative">
        <button
          type="button"
          className={`size-11 py-1.5 px-2 flex flex-col justify-center items-center rounded-2xl cursor-pointer gap-[5px] bg-accent/30 backdrop-blur-md border border-navigation/10 active:scale-90 transition duration-250 hover:bg-accent/50 ${isMenuOpen ? 'rotate-20' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-actions-menu"
        >
          <span className="w-5/7 h-[1.5px] rounded-sm bg-navigation block" />
          <span className="w-4/7 h-[1.5px] rounded-sm bg-navigation block" />
          <span className="w-5/7 h-[1.5px] rounded-sm bg-navigation block" />
        </button>

        <div
          className={`
          absolute top-0 right-0 h-11
          flex items-center justify-center
          -z-10
          transform-gpu will-change-transform
          transition duration-250 ease-out
          origin-center
          ${
            isMenuOpen
              ? '-translate-x-13 scale-100 animate-bump-left pointer-events-auto'
              : 'translate-x-16 scale-0 pointer-events-none'
          }
        `}
        >
          <Swithes keepMenuOpen />
        </div>

        <div
          className={`
          absolute right-0 mt-2
          transform
          -z-10
          transition duration-250 delay-50 ease-out
          origin-top ${
            isMenuOpen
              ? 'translate-y-0 translate-x-0 scale-100 animate-bump-bottom pointer-events-auto'
              : '-translate-y-8 translate-x-16 scale-0 pointer-events-none'
          }`}
        >
          <ul
            id="mobile-actions-menu"
            aria-label="Quick links"
            className="py-2 min-w-36 bg-accent/30 backdrop-blur-md border border-navigation/10 rounded-2xl shadow-md text-navigation"
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.id} role="none">
                <a
                  role="menuitem"
                  href={`#${item.id}`}
                  className="group flex items-center gap-2 px-4 py-2 hover:bg-accent/30 transition transform active:scale-95"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
