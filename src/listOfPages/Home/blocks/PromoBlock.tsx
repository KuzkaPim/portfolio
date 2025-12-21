import { Container } from '@/src/shared/ui';
import Image from 'next/image';
import { IoLogoGithub } from 'react-icons/io';
import { RiTelegramFill } from 'react-icons/ri';
import { AiFillInstagram } from 'react-icons/ai';
import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/navigation';

export const PromoBlock = () => {
  const t = useTranslations('home.promo');

  return (
    <section
      id="promo"
      className="bg-primary overflow-hidden md:scroll-mt-16 text-gray-700 px-2 sm:px-0 md:mt-6 py-4"
    >
      <Container className="flex flex-col sm:flex-row items-center justify-between relative pb-16 pt-12 md:py-12 bg-secondary rounded-2xl overflow-hidden shadow-md">
        <div className="z-10 sm:w-sm lg:w-auto">
          <h1 className="text-4xl sm:text-6xl font-bold">{t('title')}</h1>
          <p className="mt-8 text-xl sm:text-2xl uppercase text-accent font-bold">
            {t('subtitle')}
          </p>
          <p className="mt-2 text-lg">{t('description')}</p>
          <div className="flex gap-4 mt-8 items-start lg:items-center flex-col lg:flex-row w-max sm:w-auto">
            <Link
              className="px-4 py-2 border text-white border-accent bg-accent font-bold rounded-4xl transition hover:-translate-y-0.5 text-center w-full lg:w-auto"
              href="/"
            >
              {t('btn.myProjects')}
            </Link>
            <div className="flex gap-4 flex-col sm:flex-row sm:w-full lg:w-auto">
              <a
                className="px-4 py-2 bg-secondary font-bold rounded-4xl text-accent border border-accent hover:-translate-y-0.5 transition sm:flex-2 lg:flex-initial text-center"
                href="#contacts"
              >
                {t('btn.contactMe')}
              </a>
              <Link
                className="px-4 py-2 bg-secondary font-bold rounded-4xl text-accent border border-accent hover:-translate-y-0.5 transition sm:flex-1 lg:flex-initial text-center w-max"
                href="/resume"
              >
                {t('btn.resume')}
              </Link>
            </div>
          </div>
          <div className="flex gap-2 mt-8 w-max text-gray-600">
            <a
              href="https://github.com/KuzkaPim"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <IoLogoGithub className="size-8 hover:text-accent transition" />
            </a>
            <a
              href="https://t.me/KuzKen"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <RiTelegramFill className="size-8 hover:text-accent transition" />
            </a>
            <a
              href="https://www.instagram.com/_kuzken_?igsh=ZmZoMjNhbjVub2g3&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <AiFillInstagram className="size-8 hover:text-accent transition" />
            </a>
          </div>
        </div>
        <Image
          className="max-w-60 w-full absolute -right-18 sm:-right-6 md:right-0 bottom-0 z-0"
          src="/assets/kuzka.png"
          alt="Моя фотография"
          width={300}
          height={400}
        />
      </Container>
    </section>
  );
};
