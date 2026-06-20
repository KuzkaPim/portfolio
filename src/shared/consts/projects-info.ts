export interface ProjectInfo {
  id: string;
  technologies: string[];
  link: string;
}

export const PROJECTS_INFO: ProjectInfo[] = [
  {
    id: 'hubnity',
    technologies: [
      'React',
      'Next js',
      'TypeScript',
      'Zustand',
      'TanStack Query',
      'TanStack Virtual',
      'Recharts',
      'Tailwind CSS',
    ],
    link: 'https://hubnity.eu',
  },
  {
    id: 'inviteKz',
    technologies: ['Next js', 'React', 'Nest JS', 'PostgreSQL', 'Nx', 'Docker'],
    link: 'https://gitlab.com/esdp-ajs-22-1/invitekz',
  },
  {
    id: 'portfolio',
    technologies: [
      'React',
      'Next js',
      'Tailwind CSS',
      'Framer Motion',
      'TypeScript',
    ],
    link: 'https://github.com/KuzkaPim/portfolio',
  },
];
