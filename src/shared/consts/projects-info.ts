type TypeLink = 'website' | 'code';

export interface ProjectInfo {
  id: string;
  technologies: string[];
  link?: string;
  typeLink?: TypeLink;
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
    typeLink: 'website',
  },
  {
    id: 'inviteKz',
    technologies: ['Next js', 'React', 'Nest JS', 'PostgreSQL', 'Nx', 'Docker'],
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
    typeLink: 'code',
  },
];
