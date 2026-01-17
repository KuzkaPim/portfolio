import { Container } from '@/src/shared/ui';
import { Link } from '@/src/i18n/navigation';
import { FaArrowDown } from 'react-icons/fa';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { ToggleLocale } from '@/src/shared/ui/ToggleLocale';
import { useTranslations, useLocale } from 'next-intl';
import { resumeImages } from '../model';
import Image from 'next/image';

export const Resume = () => {
  const t = useTranslations('resume');
  const locale = useLocale();

  return (
    <section className="text-dark flex-1 flex flex-col py-4 px-2 sm:px-0">
      <Container className="flex-1 w-full flex flex-col">
        <header className="sticky top-4 flex justify-between items-center gap-4">
          <Link
            href="/"
            className="bg-accent/80 backdrop-blur-md border border-white/20 size-11 rounded-full text-primary p-1 pr-1.5 hover:bg-accent transition duration-200 group/back shadow-md"
            aria-label="Go back home"
          >
            <MdKeyboardArrowLeft className="transition duration-200 size-full group-hover/back:-translate-x-0.5" />
          </Link>
          <ToggleLocale />
        </header>
        <div className="mt-4 grid gap-2 p-1 md:p-2 bg-secondary rounded-2xl overflow-hidden">
          {resumeImages[locale as 'ru' | 'en'].map((imageSrc, index) => (
            <Image
              key={`${locale}-resume-${index}`}
              src={imageSrc}
              alt="Resume"
              className="w-full h-auto rounded-xl"
            />
          ))}
        </div>
        <div className="flex items-center gap-2 mt-8">
          <a
            href={
              locale === 'ru'
                ? '/assets/RESUME_RU.pdf'
                : '/assets/RESUME_EN.pdf'
            }
            download
            className="py-1 px-4 bg-accent rounded-2xl text-white w-max flex items-center gap-2 group/download transition duration-200 hover:bg-accent-hover"
          >
            <FaArrowDown className="transition duration-200 group-hover/download:translate-y-0.5 group-active/download:translate-y-1" />
            {t('downloadResume')}
          </a>
          <div className="bg-gray-200 py-0.5 px-2 text-sm rounded-xl text-gray-600">
            PDF
          </div>
        </div>
        <span className="block h-0.5 w-full rounded-full bg-gray-200 mt-8"></span>
      </Container>
    </section>
  );
};
