'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';

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

      iteration += 1 / 3;
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
    }, 4000);
  };

  return (
    <button
      className="mt-4 bg-white text-accent py-2 rounded-xl block mx-auto w-64 font-bold hover:bg-gray-100 transition font-mono"
      onMouseEnter={() => handleMouseEnter(text)}
      onClick={handleClick}
    >
      {displayText}
    </button>
  );
};
