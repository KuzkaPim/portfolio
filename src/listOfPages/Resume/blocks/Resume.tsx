import { Container } from '@/src/shared/ui';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowDown } from 'react-icons/fa';

export const Resume = () => {
  return (
    <section className="text-dark">
      <Container className="py-12">
        <header className="flex flex-col gap-4">
          <Link
            href="/"
            className="py-1 px-4 bg-accent rounded-2xl text-white w-max flex items-center gap-2 group/back"
          >
            <FaArrowLeft className="transition group-hover/back:-translate-x-0.5 group-active/back:-translate-x-1" />
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
        <div className="flex items-center gap-2 mt-8">
          <a
            href="/assets/resume.pdf"
            download
            className="py-1 px-4 bg-accent rounded-2xl text-white w-max flex items-center gap-2 group/download"
          >
            <FaArrowDown className="transition group-hover/download:translate-y-0.5 group-active/download:translate-y-1" />
            Скачать резюме
          </a>
          <div className="bg-gray-200 py-0.5 px-2 text-sm rounded-xl text-gray-600">
            PDF
          </div>
        </div>
      </Container>
    </section>
  );
};
