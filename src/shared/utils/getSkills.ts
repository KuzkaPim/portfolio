import { SKILLS } from '../constants';
import { SkillCatagory } from '../types';

export const getSkills = (catagory: SkillCatagory) => {
  return SKILLS[catagory] || [];
};
