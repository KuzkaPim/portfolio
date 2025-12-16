import { Container } from '@/src/shared/ui';
import { ToggleLocale } from '@/src/shared/ui/ToggleLocale';
import { useTranslations } from 'next-intl';

export const DesktopHeader = () => {
  const t = useTranslations('nav');

  return (
    <header className="sticky top-0 bg-primary z-20 shadow-sm h-16 text-gray-800 text-lg hidden sm:block">
      <Container className="h-full items-center flex justify-between">
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="#promo"
                className="transition border-accent hover:border-b-2"
              >
                {t('home')}
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="transition border-accent hover:border-b-2"
              >
                {t('technologies')}
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                className="transition border-accent hover:border-b-2"
              >
                {t('aboutMe')}
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                className="transition border-accent hover:border-b-2"
              >
                {t('contactMe')}
              </a>
            </li>
          </ul>
        </nav>
        <ToggleLocale />
      </Container>
    </header>
  );
};
