'use client';

import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';

export const HackerButton = () => {
  const text = 'kuzken.prod@gmail.com';
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const t = useTranslations('home.contactMe');

  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+';

  const handleMouseEnter = (text: string) => {
    let iteration = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() =>
        text
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return text[index];
            }

            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 4 / 5;
    }, 30);
  };

  const handleClick = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    navigator.clipboard.writeText(text);
    handleMouseEnter(t('copied'));

    timeoutRef.current = setTimeout(() => {
      setDisplayText(text);
      handleMouseEnter(text);
    }, 1500);
  };

  return (
    <button
      type="button"
      className="cursor-pointer mt-4 bg-white/15 dark:bg-white/10 border-2 border-white/20 text-content-secondary py-2 rounded-full block mx-auto w-64 hover:bg-white/25 dark:hover:bg-white/20 transition font-mono active:scale-98 duration-250"
      onMouseEnter={() => handleMouseEnter(text)}
      onClick={handleClick}
    >
      {displayText}
    </button>
  );
};
