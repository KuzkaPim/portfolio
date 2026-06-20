'use client';

import { useTranslations } from 'next-intl';
import type { ProjectInfo } from '@/src/shared/consts';
import {
  HubnityPreview,
  InviteKzPreview,
  PortfolioPreview,
} from './ProjectPreviews';

interface ProjectCardProps {
  project: ProjectInfo;
}

const PREVIEWS: Record<string, React.ReactNode> = {
  hubnity: <HubnityPreview />,
  inviteKz: <InviteKzPreview />,
  portfolio: <PortfolioPreview />,
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const t = useTranslations('home.projects');

  return (
    <li className="bg-secondary p-4 rounded-3xl flex flex-col shadow-sm shadow-layer/80 group">
      <div className="relative rounded-2xl overflow-hidden w-full h-48 sm:h-56 mx-auto">
        {PREVIEWS[project.id]}
      </div>
      <h3 className="mt-6 text-2xl font-bold leading-6">
        {t(`projects.${project.id}.title`)}
      </h3>
      <p className="mt-2 text-sm font-bold text-accent uppercase">
        {t(`projects.${project.id}.duration`)}
      </p>
      <p className="mt-4 flex-1">{t(`projects.${project.id}.description`)}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="bg-accent text-sm text-content-secondary px-1.5 py-px rounded-md font-mono uppercase shadow-sm shadow-accent/50"
          >
            {tech}
          </li>
        ))}
      </ul>
      <a
        className="mt-6 text-center text-sm uppercase px-4 py-2 border border-accent/10 dark:border-accent/30 bg-accent/10 dark:bg-accent/30 hover:bg-accent/20 dark:hover:bg-accent/40 rounded-xl text-accent dark:text-navigation font-bold transition"
        href={project.link}
        target="_blank"
        rel="noopener"
      >
        {t('codeLinkLabel')}
      </a>
    </li>
  );
};
