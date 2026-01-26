import { Container } from '@/src/shared/ui';
import { IoLogoGithub } from 'react-icons/io';
import { RiTelegramFill } from 'react-icons/ri';
import { AiFillInstagram } from 'react-icons/ai';
import { useTranslations, useLocale } from 'next-intl';
import { HackerButton } from '../components';
import { FaArrowDown } from 'react-icons/fa';

export const ContactsBlock = () => {
  const t = useTranslations('home.contactMe');
  const locale = useLocale();

  return (
    <section
      id="contacts"
      className="bg-primary text-content-secondary lg:scroll-mt-10 px-2 sm:px-0 py-6"
    >
      <Container className="py-12 bg-accent rounded-3xl shadow-md shadow-layer px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          {t('title')}
        </h2>
        <p className="mt-8 text-center">{t('description')}</p>
        <HackerButton />
        <div className="flex w-28 mx-auto flex-col mt-16 items-center">
          <a
            href={
              locale === 'ru'
                ? '/assets/RESUME_RU.pdf'
                : '/assets/RESUME_EN.pdf'
            }
            download
            className="cursor-pointer text-accent rounded-2xl duration-250 group/download flex items-center justify-center gap-2 bg-content-secondary px-2 py-1 w-full hover:bg-content-secondary/85"
          >
            {t('resume')}
            <FaArrowDown className="transition duration-250 group-hover/download:translate-y-0.5 group-active/download:translate-y-1" />
          </a>
          <div className="flex mt-2 w-full justify-between">
            <a
              href="https://github.com/KuzkaPim"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <IoLogoGithub className="size-8 hover:scale-107 transition" />
            </a>
            <a
              href="https://t.me/KuzKen"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <RiTelegramFill className="size-8 hover:scale-107 transition" />
            </a>
            <a
              href="https://www.instagram.com/_kuzken_?igsh=ZmZoMjNhbjVub2g3&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <AiFillInstagram className="size-8 hover:scale-107 transition" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
