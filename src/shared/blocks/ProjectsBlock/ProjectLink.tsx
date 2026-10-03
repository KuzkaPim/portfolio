import { useTranslations } from 'next-intl';
import type { ProjectInfo } from '../../consts';

type ProjectLinkProps = Pick<ProjectInfo, 'link' | 'typeLink'>;

export const ProjectLink = ({ link, typeLink }: ProjectLinkProps) => {
  const t = useTranslations('home.projects');

  if (typeLink) {
    return (
      <a
        className="mt-6 text-center text-sm uppercase px-4 py-2 bg-accent hover:bg-accent-hover rounded-xl text-white font-bold transition"
        href={link}
        target="_blank"
        rel="noopener"
      >
        {typeLink === 'code' ? t('codeLinkLabel') : t('websiteLinkLabel')}
      </a>
    );
  }

  return (
    <span className="mt-6 text-center text-sm uppercase px-4 py-2 bg-accent/20 select-none rounded-xl text-accent font-bold transition">
      {t('emptyLinkLabel')}
    </span>
  );
};
