'use client';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Swithes } from '@/src/shared/ui';

export const Hamburger = () => {
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
    <div ref={ref} className="relative">
      <button
        className={`size-11 py-1.5 px-2 flex flex-col shadow-md justify-center items-center rounded-full cursor-pointer gap-[5px] bg-accent/60 backdrop-blur-sm border border-white/20 active:scale-90 transition duration-250 hover:bg-accent/70 ${isMenuOpen ? 'rotate-20' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-actions-menu"
      >
        <span className="w-11/12 h-[3px] rounded-sm bg-content-secondary block" />
        <span className="w-11/12 h-[3px] rounded-sm bg-content-secondary block" />
        <span className="w-11/12 h-[3px] rounded-sm bg-content-secondary block" />
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
          transition duration-250 ease-out
          origin-top ${
            isMenuOpen
              ? 'translate-y-0 translate-x-0 scale-100 animate-bump-bottom pointer-events-auto'
              : '-translate-y-8 translate-x-16 scale-0 pointer-events-none'
          }`}
      >
        <ul
          id="mobile-actions-menu"
          role="menu"
          aria-label="Quick links"
          className="py-2 min-w-36 bg-accent/60 backdrop-blur-sm border border-white/20 rounded-2xl shadow-md text-content-secondary"
        >
          <li role="none">
            <a
              role="menuitem"
              href="#promo"
              className="group flex items-center gap-2 px-4 py-2 hover:bg-accent/30 transition transform active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('home')}
            </a>
          </li>
          <li role="none">
            <a
              role="menuitem"
              href="#skills"
              className="group flex items-center gap-2 px-4 py-2 hover:bg-accent/30 transition transform active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('technologies')}
            </a>
          </li>
          <li role="none">
            <a
              role="menuitem"
              href="#about-me"
              className="group flex items-center gap-2 px-4 py-2 hover:bg-accent/30 transition transform active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('aboutMe')}
            </a>
          </li>
          <li role="none">
            <a
              role="menuitem"
              href="#contacts"
              className="group flex items-center gap-2 px-4 py-2 hover:bg-accent/30 transition transform active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('contactMe')}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
