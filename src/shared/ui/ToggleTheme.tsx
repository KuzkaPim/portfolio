'use client';

import { useTheme } from 'next-themes';
import { GoMoon, GoSun } from 'react-icons/go';

export const ToggleTheme = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="text-navigation relative flex items-center justify-center size-11 rounded-full bg-accent/30 hover:bg-accent/50 border border-navigation/10 cursor-pointer backdrop-blur-md transition-colors duration-250"
      aria-label="Toggle theme"
    >
      <GoSun className="size-11 p-3 transition-all duration-250 scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
      <GoMoon className="absolute size-11 p-3 transition-all duration-300 scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
    </button>
  );
};
