import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FaArrowRightLong } from 'react-icons/fa6';
import { PROJECTS_INFO } from '@/src/shared/consts';
import { Container } from '@/src/shared/ui';
import { ProjectCard } from './ProjectCard';

interface ProjectsBlockProps {
  projectsLimit?: number;
}

export const ProjectsBlock = ({ projectsLimit }: ProjectsBlockProps) => {
  const t = useTranslations('home.projects');

  const projects = projectsLimit ? PROJECTS_INFO.slice(0, 2) : PROJECTS_INFO;

  return (
    <section
      id="projects"
      className="bg-primary text-content-primary lg:scroll-mt-10 py-6 px-2 sm:px-0"
    >
      <Container>
        <header className="flex justify-between items-center">
          <h2 className="text-3xl scale-y-150 font-mono uppercase">
            {t('title')}
          </h2>

          <Link
            href="/projects"
            className="font-mono text-accent flex items-center gap-2 group/projects"
          >
            {t('viewAll')}

            <FaArrowRightLong className="group-hover/projects:translate-x-1 transition duration-150" />
          </Link>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      </Container>
    </section>
  );
};
