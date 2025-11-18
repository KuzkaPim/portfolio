import { Container } from '@/src/shared/ui';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { RiTelegramFill } from 'react-icons/ri';

export const PromoBlock = () => {
  return (
    <section
      id="promo"
      className="bg-primary shadow-md overflow-hidden scroll-mt-16"
    >
      <Container className="text-gray-200 flex flex-col sm:flex-row items-center justify-between relative pb-16 pt-12 md:py-12">
        <div className="z-10 sm:w-sm lg:w-auto">
          <h1 className="text-4xl font-bold">Привет, я Кузьма</h1>
          <p className="mt-8 text-2xl font-bold">Фронтенд разработчик</p>
          <p
            className="mt-2
             text-lg"
          >
            Превращаю сложные идеи в понятные и интерактивные веб- приложения
          </p>
          <div className="flex gap-4 mt-8 items-start lg:items-center flex-col lg:flex-row w-max sm:w-auto">
            <Link
              className="px-4 py-2 border border-gray-200 bg-gray-200 text-primary font-bold rounded-4xl transition hover:bg-white hover:border-white hover:-translate-y-0.5 hover:shadow-sm hover:shadow-white text-center w-full lg:w-auto"
              href="/projects"
            >
              Мои проекты
            </Link>
            <div className="flex gap-4 flex-col sm:flex-row sm:w-full lg:w-auto">
              <Link
                className="px-4 py-2 bg-primary text-gray-200 font-bold rounded-4xl border border-gray-200 hover:border-white hover:text-white hover:-translate-y-0.5 transition sm:flex-2 lg:flex-initial text-center"
                href="/contacts"
              >
                Связяться со мной
              </Link>
              <Link
                className="px-4 py-2 bg-primary text-gray-200 font-bold rounded-4xl border border-gray-200 hover:border-white hover:text-white hover:-translate-y-0.5 transition sm:flex-1 lg:flex-initial text-center w-max"
                href="/resume"
              >
                Резюме
              </Link>
            </div>
          </div>
          <div className="flex gap-2 mt-8 border-b-2 pb-2 w-max">
            <a href="#">
              <IoLogoGithub className="size-8 hover:text-secondary" />
            </a>
            <a href="#">
              <IoLogoLinkedin className="size-8 hover:text-secondary" />
            </a>
            <a href="#">
              <RiTelegramFill className="size-8 hover:text-secondary" />
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
