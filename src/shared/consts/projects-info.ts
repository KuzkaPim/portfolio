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
      'TypeScript',
      'React',
      'Next.js',
      'TanStack Query',
      'TanStack Virtual',
      'Zustand',
      'next-intl',
      'Recharts',
      'Tailwind CSS',
      'Vitest',
    ],
    link: 'https://hubnity.com',
    typeLink: 'website',
  },
  {
    id: 'inviteKz',
    technologies: [
      'TypeScript',
      'React',
      'Next.js',
      'NestJS',
      'Nx',
      'PostgreSQL',
      'Docker',
      'GitLab CI',
    ],
  },
  {
    id: 'portfolio',
    technologies: [
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'next-intl',
      'Framer Motion',
    ],
    link: 'https://github.com/KuzkaPim/portfolio',
    typeLink: 'code',
  },
];
