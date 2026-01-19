import { Container } from '@/src/shared/ui';
import { useTranslations } from 'next-intl';
import { Job } from '../types';

export const Experience = () => {
  const t = useTranslations('resume.experience');

  return (
    <section className="py-4 text-content-primary px-2 sm:px-0">
      <Container>
        <h2 className="font-bold text-4xl">{t('title')}</h2>
        {t.raw('jobs').map((job: Job, index: number) => (
          <div key={index} className="mt-6">
            <h3 className="text-xl md:text-2xl font-bold uppercase">
              <span className="text-6xl mr-1 text-accent">{index + 1}.</span>
              {job.company}
            </h3>
            <p className="text-lg sm:text-xl font-bold text-accent uppercase">
              {job.position}
            </p>
            <p className="text-sm sm:text-lg font-bold uppercase">
              {job.duration}
            </p>
            <ul className="mt-4 flex flex-col gap-5">
              {job.responsibilities.map((item: string, idx: number) => {
                return (
                  <li
                    className="bg-secondary p-4 rounded-2xl shadow-md shadow-layer/80"
                    key={idx}
                  >
                    {Array.isArray(item) ? (
                      <>
                        {item[0]}
                        {item.map((subItem, subIdx) => {
                          return subIdx === 0 ? null : (
                            <p className="block ml-4" key={subIdx}>
                              - {subItem}
                            </p>
                          );
                        })}
                      </>
                    ) : (
                      item
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </Container>
    </section>
  );
};
