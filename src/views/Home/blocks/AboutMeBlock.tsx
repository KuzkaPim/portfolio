import { useTranslations } from 'next-intl';
import { Container } from '@/src/shared/ui';

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
        <div className="mt-8 space-y-8 text-pretty">
          <p className="text-lg leading-8 max-w-[850px] opacity-80">
            {t.rich('paragraph1', {
              tech: (chunks) => (
                <span className="font-bold text-accent bg-secondary px-2 py-0.5 rounded-md whitespace-nowrap">
                  {chunks}
                </span>
              ),
            })}
          </p>
          <p className="text-lg leading-8 max-w-[850px] opacity-80">
            {t.rich('paragraph2', {
              tech: (chunks) => (
                <span className="font-bold text-accent bg-secondary px-2 py-0.5 rounded-md whitespace-nowrap">
                  {chunks}
                </span>
              ),
            })}
          </p>
          <p className="text-lg leading-8 max-w-[850px] opacity-80">
            {t.rich('paragraph3', {
              tech: (chunks) => (
                <span className="font-bold text-accent bg-secondary px-2 py-0.5 rounded-md whitespace-nowrap">
                  {chunks}
                </span>
              ),
            })}
          </p>
        </div>
      </Container>
    </section>
  );
};
