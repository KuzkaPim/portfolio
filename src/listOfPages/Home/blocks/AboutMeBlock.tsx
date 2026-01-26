import { Container } from '@/src/shared/ui';
import { useTranslations } from 'next-intl';

export const AboutMeBlock = () => {
  const t = useTranslations('home.aboutMe');

  return (
    <section
      id="about-me"
      className="bg-primary text-content-primary lg:scroll-mt-10 py-6"
    >
      <Container className="px-2 sm:px-0">
        <h2 className="text-3xl scale-y-150 font-mono uppercase">
          {t('title')}
        </h2>
        <div className="text-lg leading-7 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8">
          <div>
            <p className="mt-8">{t('paragraph1')}</p>
            <p className="mt-8">
              {t('paragraph2.1')}
              <span className="bg-accent text-content-secondary px-1 rounded-lg shadow-md shadow-accent/60">
                {t('paragraph2.2')}
              </span>
              ,{' '}
              <span className="bg-accent text-content-secondary px-1 rounded-lg shadow-md shadow-accent/60">
                {t('paragraph2.3')}
              </span>
              {t('paragraph2.4')}
            </p>
          </div>
          <div>
            <p className="mt-8">
              {t('paragraph3.1')}
              <span className="bg-accent text-content-secondary px-1 rounded-lg shadow-md shadow-accent/60">
                Nest.js
              </span>{' '}
              {t('paragraph3.2')}
              <span className="bg-accent text-content-secondary px-1 rounded-lg shadow-md shadow-accent/60">
                NX
              </span>{' '}
              {t('paragraph3.3')}
            </p>
            <p className="mt-8">
              {t('paragraph4.1')}
              <span className="bg-accent text-content-secondary px-1 rounded-lg shadow-md shadow-accent/60">
                TypeScript
              </span>{' '}
              {t('paragraph4.2')}
              <span className="bg-accent text-content-secondary px-1 rounded-lg shadow-md shadow-accent/60">
                {t('paragraph4.3')}
              </span>{' '}
              {t('paragraph4.4')}
              <span className="bg-accent text-content-secondary px-1 rounded-lg shadow-md shadow-accent/60">
                {t('paragraph4.5')}
              </span>
              {t('paragraph4.6')}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
