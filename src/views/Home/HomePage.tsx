import { ProjectsBlock } from '@/src/shared/blocks/ProjectsBlock';
import { AboutMeBlock, ContactsBlock, PromoBlock, SkillsBlock } from './blocks';

export const HomePage = () => {
  return (
    <>
      <PromoBlock />
      <AboutMeBlock />
      <ProjectsBlock projectsLimit={2} hasViewAllLink />
      <SkillsBlock />
      <ContactsBlock />
    </>
  );
};
