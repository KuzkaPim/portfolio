'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Container, Swithes } from '@/src/shared/ui';
import { NAV_ITEMS } from '../constants';
import { FaArrowLeftLong } from 'react-icons/fa6';

interface DesktopHeaderProps {
  isHomePage: boolean;
  onBack: () => void;
}

export const DesktopHeader = ({ isHomePage, onBack }: DesktopHeaderProps) => {
  const t = useTranslations('nav');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <header className="text-navigation text-md hidden lg:block sticky top-2 z-20">
      <Container>
        <div className="flex justify-between items-center">
          {isHomePage && (
            <nav
              className="bg-accent/30 rounded-full backdrop-blur-md border border-navigation/10"
              onMouseLeave={() => setHoveredId(null)}
            >
              <ul className="flex relative">
                {NAV_ITEMS.map((item) => (
                  <li
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setHoveredId(item.id)}
                  >
                    <a
                      href={`#${item.id}`}
                      className="relative z-10 flex items-center px-3.5 h-11"
                    >
                      {t(item.label)}
                    </a>
                    <AnimatePresence>
                      {hoveredId === item.id && (
                        <motion.div
                          layoutId="nav-hover-pill"
                          className="absolute inset-0 bg-accent/30 rounded-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            type: 'spring',
                            bounce: 0.2,
                            duration: 0.4,
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {!isHomePage && (
            <nav>
              <button
                onClick={onBack}
                className={`
                h-11 px-5 gap-2
                relative flex items-center text-sm text-navigation rounded-full
                backdrop-blur-md border border-navigation/10 cursor-pointer
                transition-all duration-250 group
                bg-accent/30
                [@media(hover:hover)]:hover:bg-accent/50
                data-[frozen=true]:[@media(hover:hover)]:bg-accent/50
                active:scale-98
              `}
              >
                <FaArrowLeftLong className="group-hover:-translate-x-1 transition duration-150" />
                Go to back
              </button>
            </nav>
          )}

          <Swithes />
        </div>
      </Container>
    </header>
  );
};
