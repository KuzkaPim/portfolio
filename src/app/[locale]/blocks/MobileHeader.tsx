'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { cn } from '@/src/shared/lib';
import { Swithes } from '@/src/shared/ui';

interface MobileHeaderProps {
  isHomePage: boolean;
  onBack: () => void;
}

export const MobileHeader = ({ isHomePage, onBack }: MobileHeaderProps) => {
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
    <header
      className={cn(
        'lg:hidden flex justify-between sticky z-20 p-2 top-0',
        isHomePage && 'justify-end'
      )}
    >
      {!isHomePage && (
        <button
          aria-label="Go to back"
          onClick={onBack}
          type="button"
          className={`
            size-11
            relative flex items-center justify-center text-sm text-navigation rounded-full
            backdrop-blur-md border border-navigation/10 cursor-pointer
            transition-all duration-250
            bg-accent/30
            [@media(hover:hover)]:hover:bg-accent/50
            data-[frozen=true]:[@media(hover:hover)]:bg-accent/50
            active:scale-98
          `}
        >
          <FaArrowLeftLong />
        </button>
      )}

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
          ${isMenuOpen
              ? '-translate-x-13 scale-100 animate-bump-left pointer-events-auto'
              : 'translate-x-16 scale-0 pointer-events-none'
            }
        `}
        >
          <Swithes keepMenuOpen />
        </div>
      </div>
    </header>
  );
};
