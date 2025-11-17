import { Container } from '@/src/shared/ui';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';
import { RiTelegramFill } from 'react-icons/ri';

export const ContactsBlock = () => {
  return (
    <section className="bg-primary text-white">
      <Container className="py-12">
        <h2 className="text-4xl font-bold text-center">
          Готов к новым задачам и сотрудничеству!
        </h2>
        <p className="mt-8 text-center">
          Ищете разработчика, который думает не только о UI, но и об
          архитектуре?
        </p>
        <a
          href="mailto:kuzken.prod@gmail.com?subject=Вопрос по сотрудничеству с Кузьмой"
          className="mt-4 bg-white text-primary py-2 px-8 rounded-xl block mx-auto w-max shadow-md font-bold hover:bg-secondary hover:text-white hover:-translate-y-0.5 transition"
        >
          kuzken.prod@gmail.com
        </a>
        <div className="flex gap-2 mt-16 w-max mx-auto">
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
      </Container>
    </section>
  );
};
