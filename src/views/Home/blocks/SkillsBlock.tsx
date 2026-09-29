import { useTranslations } from 'next-intl';
import { Container } from '@/src/shared/ui';
import { Skills } from '../components';
import { SKILLS, SKILLS_KEYS } from '../constants';

export const SkillsBlock = () => {
  const t = useTranslations('home.technologies');

  return (
    <section
      id="skills"
      className="bg-primary text-content-primary lg:scroll-mt-10 py-6"
    >
      <Container className="px-2 sm:px-0">
        <h2 className="text-3xl scale-y-150 font-mono uppercase">
          {t('title')}
        </h2>

        {SKILLS_KEYS.map((skill) => (
          <div key={skill} className="mt-8">
            <h3 className="font-bold text-md text-content-secondary bg-accent w-max px-2 rounded-md">
              {t(skill)}
            </h3>

            <Skills items={SKILLS[skill]} />
          </div>
        ))}
      </Container>
    </section>
  );
};
