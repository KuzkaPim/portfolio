export interface ProjectInfo {
  id: string;
  technologies: string[];
  videoSrc: string;
  posterSrc: string;
  link: string;
}

export const PROJECTS_INFO: ProjectInfo[] = [
  {
    id: 'inviteKz',
    technologies: [
            "Next js",
            "React",
            "Nest JS",
            "PostgreSQL",
            "Nx",
            "Docker"
          ],
    videoSrc: "/assets/videos/invite.mp4",
    posterSrc: "/assets/invite.png",
    link: "https://gitlab.com/esdp-ajs-22-1/invitekz"
  },
  {
    id: 'portfolio',
    technologies: [
            "React",
            "Next js",
            "Tailwind CSS",
            "Framer Motion",
            "TypeScript"
          ],
    videoSrc: "/assets/videos/portfolio.mp4",
    posterSrc: "/assets/portfolio.png",
    link: "https://github.com/KuzkaPim/portfolio"
  }
]
