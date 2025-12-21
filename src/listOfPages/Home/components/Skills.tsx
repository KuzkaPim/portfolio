import { SkillCatagory } from '@/src/shared/types';
import { getSkills } from '@/src/shared/utils';

interface Props {
  catagory: SkillCatagory;
}

export const Skills = ({ catagory }: Props) => {
  const skills = getSkills(catagory);

  return (
    <ul className="flex flex-wrap gap-2 mt-4">
      {skills.map((skill) => (
        <li
          key={skill}
          className="px-4 py-2 bg-secondary text-neutral-500 font-bold rounded-xl shadow-md hover:-translate-y-1 transition cursor-default rotate-2"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
};
