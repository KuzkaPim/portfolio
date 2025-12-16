import { Container } from '@/src/shared/ui';
import { IoLogoGithub } from 'react-icons/io';
import { RiTelegramFill } from 'react-icons/ri';
import { AiFillInstagram } from 'react-icons/ai';
import { useTranslations } from 'next-intl';

export const ContactsBlock = () => {
  const t = useTranslations('home.contactMe');

  return (
    <section id="contacts" className="bg-accent text-white sm:scroll-mt-16">
      <Container className="py-12">
        <h2 className="text-4xl font-bold text-center">{t('title')}</h2>
        <p className="mt-8 text-center">{t('description')}</p>
        <a
          href="mailto:kuzken.prod@gmail.com?subject=Вопрос по сотрудничеству с Кузьмой"
          className="mt-4 bg-white text-accent py-2 px-8 rounded-xl block mx-auto w-max shadow-md font-bold hover:-translate-y-0.5 hover:shadow-lg transition"
        >
          kuzken.prod@gmail.com
        </a>
        <div className="flex gap-2 mt-16 w-max mx-auto">
          <a
            href="https://github.com/KuzkaPim"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <IoLogoGithub className="size-8 hover:scale-110 transition" />
          </a>
          <a
            href="https://t.me/KuzKen"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
          >
            <RiTelegramFill className="size-8 hover:scale-110 transition" />
          </a>
          <a
            href="https://www.instagram.com/_kuzken_?igsh=ZmZoMjNhbjVub2g3&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <AiFillInstagram className="size-8 hover:scale-110 transition" />
          </a>
        </div>
      </Container>
    </section>
  );
};
