'use client';

import { useEffect, useRef, useState } from 'react';
import { ToggleLocale } from '@/src/shared/ui/ToggleLocale';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

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
        className="size-10 p-1.5 flex flex-col shadow-md justify-center items-center rounded-md cursor-pointer gap-1.5 bg-accent active:scale-90"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-actions-menu"
      >
        <span
          className={`w-full h-1 rounded-sm bg-white block transform transition-transform duration-250 ease-in-out ${
            isMenuOpen ? 'translate-y-5' : ''
          }`}
        />
        <span
          className={`w-full h-1 rounded-sm bg-white block transition duration-250 ease-in-out ${
            isMenuOpen ? 'opacity-70 -translate-y-2.5 scale-70' : ''
          }`}
        />
        <span
          className={`w-full h-1 rounded-sm bg-white block transition duration-250 ease-in-out ${
            isMenuOpen ? 'opacity-70 -translate-y-2.5 scale-80' : ''
          }`}
        />
      </button>

      <div
        className={`absolute top-0 right-12 transform transition-all duration-250 ease-out ${
          isMenuOpen
            ? 'opacity-100 animate-bump-left pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{
          willChange: 'opacity, transform',
          backfaceVisibility: 'hidden',
        }}
      >
        <ToggleLocale className="size-10 p-1.5 shadow-md" keepMenuOpen />
      </div>

      <div
        className={`absolute right-0 transform transition-all duration-250 ease-out origin-top-right ${
          isMenuOpen
            ? 'opacity-100 animate-bump-bottom pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul
          id="mobile-actions-menu"
          role="menu"
          aria-label="Quick links"
          className="py-2 mt-2 min-w-36 bg-accent rounded-md shadow-md text-white"
        >
          <li role="none">
            <a
              role="menuitem"
              href="#promo"
              className="group flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-accent transition transform active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('home')}
            </a>
          </li>
          <li role="none">
            <a
              role="menuitem"
              href="#skills"
              className="group flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-accent transition transform active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('technologies')}
            </a>
          </li>
          <li role="none">
            <a
              role="menuitem"
              href="#about-me"
              className="group flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-accent transition transform active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('aboutMe')}
            </a>
          </li>
          <li role="none">
            <a
              role="menuitem"
              href="#contacts"
              className="group flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-accent transition transform active:scale-95"
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
