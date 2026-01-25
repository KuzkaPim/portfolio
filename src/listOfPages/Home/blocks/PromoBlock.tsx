import { Container } from '@/src/shared/ui';
import Image from 'next/image';
import { IoLogoGithub } from 'react-icons/io';
import { RiTelegramFill } from 'react-icons/ri';
import { AiFillInstagram } from 'react-icons/ai';
import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/navigation';
import meImg from '../assets/kuzka.png';

export const PromoBlock = () => {
  const t = useTranslations('home.promo');

  return (
    <section
      id="promo"
      className="bg-primary overflow-hidden lg:scroll-mt-18 text-content-primary px-2 sm:px-0 md:mt-6 pb-6 pt-2"
    >
      <Container className="flex flex-col sm:flex-row items-center justify-between relative px-4 pb-16 pt-12 md:py-12 bg-secondary rounded-3xl overflow-hidden shadow-md shadow-layer/80">
        <div className="z-10 sm:w-sm lg:w-auto">
          <h1 className="text-4xl sm:text-6xl font-bold">{t('title')}</h1>
          <p className="mt-8 text-xl sm:text-2xl uppercase text-accent font-bold">
            {t('subtitle')}
          </p>
          <p className="mt-2 text-lg">{t('description')}</p>
          <div className="flex gap-4 mt-8 items-start lg:items-center flex-col lg:flex-row w-max sm:w-auto">
            <Link
              className="px-4 py-2 text-content-secondary border border-accent/40 bg-accent font-bold rounded-4xl transition text-center w-full lg:w-auto hover:bg-accent-hover hover:border-accent-hover"
              href="#projects"
            >
              {t('btn.myProjects')}
            </Link>
            <div className="flex gap-4 flex-col sm:flex-row sm:w-full lg:w-auto">
              <a
                className="px-4 py-2 border border-accent/10 dark:border-accent/30 bg-accent/10 dark:bg-accent/30 font-bold rounded-4xl text-accent dark:text-navigation transition sm:flex-2 lg:flex-initial text-center hover:bg-accent/20 dark:hover:bg-accent/40"
                href="#contacts"
              >
                {t('btn.contactMe')}
              </a>
              <Link
                className="px-4 py-2 border border-accent/10 dark:border-accent/30 bg-accent/10 dark:bg-accent/30 font-bold rounded-4xl text-accent dark:text-navigation transition sm:flex-1 lg:flex-initial text-center w-max hover:bg-accent/20 dark:hover:bg-accent/40"
                href="/resume"
              >
                {t('btn.resume')}
              </Link>
            </div>
          </div>
          <div className="flex gap-2 mt-8 w-max">
            <a
              href="https://github.com/KuzkaPim"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <IoLogoGithub className="size-8 hover:text-accent hover:scale-107 transition" />
            </a>
            <a
              href="https://t.me/KuzKen"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <RiTelegramFill className="size-8 hover:text-accent hover:scale-107 transition" />
            </a>
            <a
              href="https://www.instagram.com/_kuzken_?igsh=ZmZoMjNhbjVub2g3&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <AiFillInstagram className="size-8 hover:text-accent hover:scale-107 transition" />
            </a>
          </div>
        </div>
        <Image
          className="max-w-60 sm:max-w-68 md:max-w-76 lg:max-w-80 w-full absolute -right-18 sm:-right-6 md:right-0 bottom-0 z-0"
          src={meImg}
          alt={t('altMeImage')}
          sizes="(max-width: 639px) 240px, (max-width: 767px) 272px, (max-width: 1023px) 304px, 320px"
          priority
        />
      </Container>
    </section>
  );
};
