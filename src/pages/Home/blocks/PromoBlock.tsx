import { Container } from '@/src/shared/ui';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { RiTelegramFill } from 'react-icons/ri';

export const PromoBlock = () => {
  return (
    <section
      id="promo"
      className="bg-secondary overflow-hidden sm:scroll-mt-16 text-dark"
    >
      <Container className="flex flex-col sm:flex-row items-center justify-between relative pb-16 pt-12 md:py-12">
        <div className="z-10 sm:w-sm lg:w-auto">
          <h1 className="text-4xl sm:text-6xl font-bold">Привет, я Кузьма</h1>
          <p className="mt-8 text-xl sm:text-2xl font-bold">
            Фронтенд разработчик
          </p>
          <p className="mt-2 text-lg">
            Превращаю сложные идеи в понятные и интерактивные веб-приложения
          </p>
          <div className="flex gap-4 mt-8 items-start lg:items-center flex-col lg:flex-row w-max sm:w-auto">
            <Link
              className="px-4 py-2 border text-white border-accent bg-accent font-bold rounded-4xl transition hover:-translate-y-0.5 text-center w-full lg:w-auto"
              href="/projects"
            >
              Мои проекты
            </Link>
            <div className="flex gap-4 flex-col sm:flex-row sm:w-full lg:w-auto">
              <Link
                className="px-4 py-2 bg-secondary font-bold rounded-4xl text-accent border border-accent hover:-translate-y-0.5 transition sm:flex-2 lg:flex-initial text-center"
                href="/contacts"
              >
                Связяться со мной
              </Link>
              <Link
                className="px-4 py-2 bg-secondary font-bold rounded-4xl text-accent border border-accent hover:-translate-y-0.5 transition sm:flex-1 lg:flex-initial text-center w-max"
                href="/resume"
              >
                Резюме
              </Link>
            </div>
          </div>
          <div className="flex gap-2 mt-8 w-max text-gray-600">
            <a href="#">
              <IoLogoGithub className="size-8 hover:text-accent transition" />
            </a>
            <a href="#">
              <IoLogoLinkedin className="size-8 hover:text-accent transition" />
            </a>
            <a href="#">
              <RiTelegramFill className="size-8 hover:text-accent transition" />
            </a>
          </div>
        </div>
        <Image
          className="max-w-60 w-full absolute -right-14 sm:-right-6 md:right-0 bottom-0 z-0"
          src="/assets/kuzka.png"
          alt="Моя фотография"
          width={300}
          height={400}
        />
      </Container>
    </section>
  );
};
