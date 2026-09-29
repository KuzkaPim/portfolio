import { useTranslations } from 'next-intl';
import type { ProjectInfo } from '../../consts';

type ProjectLinkProps = Pick<ProjectInfo, 'link' | 'typeLink'>;

export const ProjectLink = ({ link, typeLink }: ProjectLinkProps) => {
  const t = useTranslations('home.projects');

  if (typeLink) {
    return (
      <a
        className="mt-6 text-center text-sm uppercase px-4 py-2 border border-accent/10 dark:border-accent/30 bg-accent/10 dark:bg-accent/30 hover:bg-accent/20 dark:hover:bg-accent/40 rounded-xl text-accent dark:text-navigation font-bold transition"
        href={link}
        target="_blank"
        rel="noopener"
      >
        {typeLink === 'code' ? t('codeLinkLabel') : t('websiteLinkLabel')}
      </a>
    );
  }

  return (
    <span className="mt-6 text-center text-sm uppercase px-4 py-2 border border-accent/10 dark:border-accent/30 bg-accent/10 dark:bg-accent/30 rounded-xl text-accent dark:text-navigation font-bold transition">
      {t('emptyLinkLabel')}
    </span>
  );
};
