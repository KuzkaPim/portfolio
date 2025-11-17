import { SkillCatagory } from '@/src/shared/types';
import { getSkills } from '@/src/shared/utils';

interface Props {
  catagory: SkillCatagory;
}

export const Skills = ({ catagory }: Props) => {
  const skills = getSkills(catagory);

  return (
    <ul className="flex flex-wrap gap-2 mt-2">
      {skills.map((skill) => (
        <li
          key={skill}
          className="px-4 py-2 bg-secondary text-white font-bold rounded-xl shadow-md"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
};
