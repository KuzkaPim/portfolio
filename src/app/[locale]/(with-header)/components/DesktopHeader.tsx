'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Swithes } from '@/src/shared/ui';
import { useTranslations } from 'next-intl';

const NAV_ITEMS = [
  { id: 'promo', label: 'home' },
  { id: 'skills', label: 'technologies' },
  { id: 'about-me', label: 'aboutMe' },
  { id: 'projects', label: 'projects' },
  { id: 'contacts', label: 'contactMe' },
] as const;

export const DesktopHeader = () => {
  const t = useTranslations('nav');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <header className="text-navigation text-md hidden lg:block sticky top-2 z-20">
      <Container>
        <div className="flex justify-between items-center">
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
                    className="relative z-10 flex items-center px-4 h-11"
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
          <Swithes />
        </div>
      </Container>
    </header>
  );
};
