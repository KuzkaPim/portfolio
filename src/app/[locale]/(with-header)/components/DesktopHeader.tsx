import { Container } from '@/src/shared/ui';
import { ToggleLocale } from '@/src/shared/ui/ToggleLocale';
import { useTranslations } from 'next-intl';

export const DesktopHeader = () => {
  const t = useTranslations('nav');

  return (
    <header className="text-primary text-md hidden md:block sticky top-2 z-20">
      <Container>
        <div className="flex justify-between">
          <nav className="bg-accent/80 rounded-full shadow-md backdrop-blur-md border border-white/20">
            <ul className="flex">
              <li>
                <a
                  href="#promo"
                  className="flex items-center px-4 h-11 transition rounded-full hover:bg-accent/60"
                >
                  {t('home')}
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="flex items-center px-4 h-11 transition rounded-full hover:bg-accent/60"
                >
                  {t('technologies')}
                </a>
              </li>
              <li>
                <a
                  href="#about-me"
                  className="flex items-center px-4 h-11 transition rounded-full hover:bg-accent/60"
                >
                  {t('aboutMe')}
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="flex items-center px-4 h-11 transition rounded-full hover:bg-accent/60"
                >
                  {t('contactMe')}
                </a>
              </li>
            </ul>
          </nav>
          <ToggleLocale />
        </div>
      </Container>
    </header>
  );
};
