import { Container } from '@/src/shared/ui';
import { Skills } from '../components';
import { useTranslations } from 'next-intl';

export const SkillsBlock = () => {
  const t = useTranslations('home.technologies');

  return (
    <section
      id="skills"
      className="bg-primary text-content-primary md:scroll-mt-16 py-12"
    >
      <Container className="px-2 sm:px-0">
        <h2 className="text-4xl font-bold">{t('title')}</h2>
        <div className="mt-8">
          <h3 className="font-bold text-md text-content-secondary bg-accent w-max px-2 rounded-md">
            {t('languages')}
          </h3>
          <Skills catagory="languages" />
        </div>
        <div className="mt-8">
          <h3 className="font-bold text-md text-content-secondary bg-accent w-max px-2 rounded-md">
            {t('frontend')}
          </h3>
          <Skills catagory="frontend" />
        </div>
        <div className="mt-8">
          <h3 className="font-bold text-md text-content-secondary bg-accent w-max px-2 rounded-md">
            {t('backendAndDB')}
          </h3>
          <Skills catagory="backend" />
        </div>
        <div className="mt-8">
          <h3 className="font-bold text-md text-content-secondary bg-accent w-max px-2 rounded-md">
            {t('styles')}
          </h3>
          <Skills catagory="styling" />
        </div>
        <div className="mt-8">
          <h3 className="font-bold text-md text-content-secondary bg-accent w-max px-2 rounded-md">
            {t('toolsAndSystem')}
          </h3>
          <Skills catagory="tools" />
        </div>
      </Container>
    </section>
  );
};
