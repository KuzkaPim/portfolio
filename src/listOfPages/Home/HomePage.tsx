import {
  AboutMeBlock,
  ContactsBlock,
  PromoBlock,
  SkillsBlock,
  ProjectsBlock,
} from './blocks';

export const HomePage = () => {
  return (
    <>
      <PromoBlock />
      <SkillsBlock />
      <ProjectsBlock />
      <AboutMeBlock />
      <ContactsBlock />
    </>
  );
};
