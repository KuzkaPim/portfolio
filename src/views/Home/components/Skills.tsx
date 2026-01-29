import { SkillCatagory } from '../types';
import { getSkills } from '../utils/getSkills';

interface Props {
  catagory: SkillCatagory;
}

export const Skills = ({ catagory }: Props) => {
  const skills = getSkills(catagory);

  return (
    <ul className="flex flex-wrap gap-x-2 gap-y-4 mt-4">
      {skills.map((skill) => (
        <li
          key={skill}
          className="px-4 py-1 bg-secondary text-content-primary font-mono rounded-md shadow-sm shadow-layer/80 hover:-translate-y-1 transition cursor-default uppercase scale-y-125 tracking-[1.2px]"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
};
