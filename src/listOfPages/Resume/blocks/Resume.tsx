import { Container } from '@/src/shared/ui';
import Link from 'next/link';
import { FaArrowLeft, FaArrowDown } from 'react-icons/fa';
import { DynamicPdfViewer } from '../components';

export const Resume = () => {
  return (
    <section className="text-dark flex-1 flex flex-col">
      <Container className="py-12 flex-1 w-full flex flex-col">
        <header className="flex flex-col gap-4">
          <Link
            href="/"
            className="py-1 px-4 bg-accent rounded-2xl text-white w-max flex items-center gap-2 group/back"
          >
            <FaArrowLeft className="transition group-hover/back:-translate-x-0.5 group-active/back:-translate-x-1" />
            Главная
          </Link>
        </header>
        <div className="flex-1 flex flex-col">
          <DynamicPdfViewer />
        </div>
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
        <span className="block h-0.5 w-full rounded-full bg-gray-200 mt-8"></span>
      </Container>
    </section>
  );
};
