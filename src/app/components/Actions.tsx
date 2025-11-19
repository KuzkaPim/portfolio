'use client';

import { useEffect, useRef, useState } from 'react';

export const Actions = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    const onClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (ref.current.contains(e.target as Node)) return;
      setIsMenuOpen(false);
    };

    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, []);

  const toggleMenu = (): void => setIsMenuOpen((prev) => !prev);

  return (
    <header ref={ref} className="sm:hidden fixed z-20 right-3 top-3">
      <div className="relative">
        <button
          className="w-8 h-8 flex flex-col shadow-md justify-center items-center rounded-md cursor-pointer gap-1 bg-accent"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-actions-menu"
        >
          <span className="w-2/3 h-1 rounded-sm bg-white block"></span>
          <span className="w-2/3 h-1 rounded-sm bg-white block"></span>
          <span className="w-2/3 h-1 rounded-sm bg-white block"></span>
        </button>

        {isMenuOpen && (
          <div className="absolute right-0 mt-2 min-w-48 bg-accent rounded-md shadow-md text-white">
            <ul
              id="mobile-actions-menu"
              role="menu"
              aria-label="Quick links"
              className="py-2"
            >
              <li role="none">
                <a
                  role="menuitem"
                  href="#promo"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-accent transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Главная
                </a>
              </li>
              <li role="none">
                <a
                  role="menuitem"
                  href="#skills"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-accent transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Технологии
                </a>
              </li>
              <li role="none">
                <a
                  role="menuitem"
                  href="#about-me"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-accent transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Обо мне
                </a>
              </li>
              <li role="none">
                <a
                  role="menuitem"
                  href="#contacts"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-white hover:text-accent transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
