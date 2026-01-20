import { Container, Swithes } from '@/src/shared/ui';
import Link from 'next/link';
import { MdKeyboardArrowLeft } from 'react-icons/md';

export const Header = () => {
  return (
    <header className="sticky top-2 px-2 sm:px-0">
      <Container className="flex justify-between gap-4 items-center">
        <Link
          href="/"
          className="bg-accent/60 backdrop-blur-sm border border-white/20 size-11 rounded-full text-content-secondary p-1 pr-1.5 hover:bg-accent/70 transition duration-250 group/back shadow-md"
          aria-label="Go back home"
        >
          <MdKeyboardArrowLeft className="transition duration-250 size-full group-hover/back:-translate-x-0.5" />
        </Link>
        <Swithes />
      </Container>
    </header>
  );
};
