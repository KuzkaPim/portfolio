'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { CgDarkMode } from 'react-icons/cg';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import {
  IoMoonOutline,
  IoMoonSharp,
  IoSunny,
  IoSunnyOutline,
} from 'react-icons/io5';
import { useToggle } from '../hooks';
import { cn } from '../lib';

type Theme = 'system' | 'light' | 'dark';

export const ToggleTheme = () => {
  const { setTheme, resolvedTheme, theme } = useTheme();
  const t = useTranslations('theme');

  const [isMounted, setIsMounted] = useState(false);
  const [isThemeOpen, toggleThemeOpen, setIsThemeOpen] = useToggle(false);

  const selectTheme = (theme: Theme) => {
    setTheme(theme);
    setIsThemeOpen(false);
  };

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsThemeOpen(false);
    };

    const onClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (containerRef.current.contains(e.target as Node)) return;
      setIsThemeOpen(false);
    };

    const onScroll = () => setIsThemeOpen(false);

    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={toggleThemeOpen}
        className="text-navigation relative flex items-center justify-center size-11 rounded-full bg-accent/30 hover:bg-accent/50 border border-navigation/10 cursor-pointer backdrop-blur-md transition-colors duration-250"
        aria-label={t('menuButton')}
      >
        <CgDarkMode aria-hidden className="size-11 p-3" />

        {isMounted && resolvedTheme === 'dark' && (
          <IoMoonSharp
            aria-hidden
            className="absolute -top-0.5 -right-0.5 size-3.5"
          />
        )}
        {isMounted && resolvedTheme === 'light' && (
          <IoSunny aria-hidden className="absolute top-0 right-0 size-3.5" />
        )}
      </button>

      <div
        inert={!isThemeOpen}
        className={cn(
          'absolute w-11 bg-accent/30 right-0 top-13 backdrop-blur-md border border-navigation/10 rounded-full shadow-md text-navigation flex flex-col',
          isThemeOpen
            ? 'translate-y-0 translate-x-0 scale-100 animate-bump-bottom pointer-events-auto'
            : '-translate-y-8 translate-x-16 scale-0 pointer-events-none'
        )}
      >
        <button
          className={cn(
            'transition-colors duration-250 cursor-pointer hover:bg-accent/15 rounded-full',
            isMounted && theme === 'system' && 'bg-accent/15'
          )}
          type="button"
          onClick={() => selectTheme('system')}
          aria-label={t('system')}
        >
          <HiOutlineComputerDesktop aria-hidden className="size-11 p-3" />
        </button>

        <button
          className={cn(
            'transition-colors duration-250 cursor-pointer hover:bg-accent/15 rounded-full',
            isMounted && theme === 'light' && 'bg-accent/15'
          )}
          type="button"
          onClick={() => selectTheme('light')}
          aria-label={t('light')}
        >
          <IoSunnyOutline aria-hidden className="size-11 p-3" />
        </button>

        <button
          className={cn(
            'transition-colors duration-250 cursor-pointer hover:bg-accent/15 rounded-full',
            isMounted && theme === 'dark' && 'bg-accent/15'
          )}
          type="button"
          onClick={() => selectTheme('dark')}
          aria-label={t('dark')}
        >
          <IoMoonOutline aria-hidden className="size-11 p-3" />
        </button>
      </div>
    </div>
  );
};
