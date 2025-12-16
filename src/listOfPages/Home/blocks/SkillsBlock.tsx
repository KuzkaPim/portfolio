import { Container } from '@/src/shared/ui';
import { Skills } from '../components';
import { useTranslations } from 'next-intl';

export const SkillsBlock = () => {
  const t = useTranslations('home.technologies');

  return (
    <section id="skills" className="bg-primary text-dark sm:scroll-mt-16">
      <Container className="py-12">
        <h2 className="text-4xl font-bold">{t('title')}</h2>
        <div className="mt-8">
          <h3 className="font-bold text-2xl">{t('languages')}</h3>
          <Skills catagory="languages" />
        </div>
        <div className="mt-8">
          <h3 className="font-bold text-2xl">{t('frontend')}</h3>
          <Skills catagory="frontend" />
        </div>
        <div className="mt-8">
          <h3 className="font-bold text-2xl">{t('backendAndDB')}</h3>
          <Skills catagory="backend" />
        </div>
        <div className="mt-8">
          <h3 className="font-bold text-2xl">{t('styles')}</h3>
          <Skills catagory="styling" />
        </div>
        <div className="mt-8">
          <h3 className="font-bold text-2xl">{t('toolsAndSystem')}</h3>
          <Skills catagory="tools" />
        </div>
      </Container>
    </section>
  );
};
