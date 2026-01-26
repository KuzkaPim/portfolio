import { Container } from '@/src/shared/ui';
import { useTranslations } from 'next-intl';
import { ProjectCard } from '../components';
import type { ProjectCardInfo } from '../types';

export const ProjectsBlock = () => {
  const t = useTranslations('home.projects');

  return (
    <section
      id="projects"
      className="bg-primary text-content-primary lg:scroll-mt-10 py-6 px-2 sm:px-0"
    >
      <Container>
        <h2 className="text-3xl leading-6 scale-y-150 text-content-secondary font-mono uppercase bg-accent w-max">
          {t('title')}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {t.raw('projects').map((project: ProjectCardInfo) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      </Container>
    </section>
  );
};
