import { SKILLS } from '../constants';
import type { SkillCatagory } from '../types';

export const getSkills = (catagory: SkillCatagory) => {
  return SKILLS[catagory] || [];
};
