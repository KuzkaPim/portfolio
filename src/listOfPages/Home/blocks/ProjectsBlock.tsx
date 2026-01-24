import { Container } from '@/src/shared/ui';
import { useTranslations } from 'next-intl';
import { ProjectCard } from '../components';
import type { ProjectCardInfo } from '../types';

export const ProjectsBlock = () => {
  const t = useTranslations('home.projects');

  return (
    <section className="bg-primary text-content-primary md:scroll-mt-4 py-12 px-2 sm:px-0">
      <Container>
        <h2 className="font-bold text-4xl">{t('title')}</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {t.raw('projects').map((project: ProjectCardInfo) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      </Container>
    </section>
  );
};
