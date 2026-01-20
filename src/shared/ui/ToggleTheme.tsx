'use client';

import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

export const ToggleTheme = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="text-content-secondary relative shadow-md shadow-layer/80 flex items-center justify-center w-11 h-11 rounded-full bg-accent/60 hover:bg-accent/70 border border-white/20 cursor-pointer backdrop-blur-sm transition-colors duration-250"
      aria-label="Toggle theme"
    >
      <FiSun className="w-5 h-5 transition-all duration-250 scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
      <FiMoon className="absolute w-5 h-5 transition-all duration-300 scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
    </button>
  );
};
