import { Container } from '@/src/shared/ui';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export const Resume = () => {
  return (
    <section className="text-dark">
      <Container className="py-12">
        <header className="flex flex-col gap-4">
          <Link
            href="/"
            className="py-1 px-4 bg-accent rounded-2xl text-white transition w-max flex items-center gap-2 hover:scale-105 active:scale-100"
          >
            <FaArrowLeft />
            Главная
          </Link>
          <h1 className="text-4xl sm:text-6xl font-bold">Резюме</h1>
        </header>
        <Image
          src="/assets/resume.jpg"
          alt="Резюме"
          width={600}
          height={800}
          className="w-full mt-8 rounded-2xl"
        />
      </Container>
    </section>
  );
};
