import { Container } from '@/src/shared/ui';
import { IoLogoGithub } from 'react-icons/io';
import { RiTelegramFill } from 'react-icons/ri';
import { AiFillInstagram } from 'react-icons/ai';
import { useTranslations } from 'next-intl';
import { HackerButton } from '../components';

export const ContactsBlock = () => {
  const t = useTranslations('home.contactMe');

  return (
    <section
      id="contacts"
      className="bg-primary text-content-secondary md:scroll-mt-4 px-2 sm:px-0 py-4"
    >
      <Container className="py-12 bg-accent rounded-3xl shadow-md shadow-layer px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center">
          {t('title')}
        </h2>
        <p className="mt-8 text-center">{t('description')}</p>
        <HackerButton />
        <div className="flex gap-2 mt-16 w-max mx-auto">
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
      </Container>
    </section>
  );
};
