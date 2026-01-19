import { Container } from '@/src/shared/ui';
import { FaArrowDown } from 'react-icons/fa';
import { useTranslations, useLocale } from 'next-intl';

export const Download = () => {
  const t = useTranslations('resume');
  const locale = useLocale();

  return (
    <section className="text-dark flex-1 flex flex-col py-4 px-2 sm:px-0">
      <Container className="flex-1 w-full flex flex-col">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <a
            href={
              locale === 'ru'
                ? '/assets/RESUME_RU.pdf'
                : '/assets/RESUME_EN.pdf'
            }
            download
            className="py-2 px-4 bg-accent rounded-full text-content-secondary w-full sm:w-max flex items-center justify-center gap-2 group/download transition duration-200 hover:bg-accent-hover"
          >
            <FaArrowDown className="transition duration-200 group-hover/download:translate-y-0.5 group-active/download:translate-y-1" />
            {t('downloadResume')}
          </a>
          <div className="bg-secondary py-0.5 px-2 text-sm rounded-xl text-content-primary shadow-md shadow-layer/80">
            PDF
          </div>
        </div>
      </Container>
    </section>
  );
};
