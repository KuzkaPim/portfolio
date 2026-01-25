'use client';

import { useEffect, useRef, useState } from 'react';
import type { ProjectCardInfo } from '../types';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface ProjectCardProps {
  project: ProjectCardInfo;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const t = useTranslations('home.projects');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play().catch(() => {
            console.warn(
              'Automatic video playback has been blocked by your browser.'
            );
          });
        } else {
          videoElement.pause();
        }
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(videoElement);

    return () => observer.disconnect();
  }, []);

  return (
    <li className="bg-secondary p-4 pt-8 rounded-3xl flex flex-col shadow-md shadow-layer/80">
      <div className="relative rounded-xl h-50 mx-auto aspect-[9/19.5] overflow-hidden border border-accent/60 dark:border-accent shadow-[0_0_100px_4px] shadow-accent/30 dark:shadow-accent/60">
        <Image
          src={project.posterSrc}
          alt={project.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-10 ${
            hasPlayed ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          layout="fill"
          aria-hidden="true"
        />
        <video
          ref={videoRef}
          src={project.videoSrc}
          loop
          muted
          playsInline
          className="w-full h-full block dark:brightness-90 object-cover"
          onPlaying={() => setHasPlayed(true)}
        />
      </div>
      <h3 className="mt-6 text-2xl font-bold leading-6">{project.title}</h3>
      <p className="mt-4 flex-1">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="bg-accent text-content-secondary px-1 py-px rounded-lg shadow-md shadow-accent/60"
          >
            {tech}
          </li>
        ))}
      </ul>
      <a
        className="mt-6 text-center text-sm uppercase px-4 py-2 border border-white/10 dark:border-accent/30 bg-accent/10 dark:bg-accent/30 hover:bg-accent/20 dark:hover:bg-accent/40 rounded-xl text-accent dark:text-navigation font-bold transition"
        href={project.link}
        target="_blank"
      >
        {t('codeLinkLabel')}
      </a>
    </li>
  );
};
