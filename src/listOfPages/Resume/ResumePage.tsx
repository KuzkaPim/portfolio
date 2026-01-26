import { Container } from '@/src/shared/ui';
import { Download, Header, Experience } from './blocks';
import { Suspense } from 'react';

export const ResumePage = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <Experience />
      <Download />
      <Container className="w-full px-2 sm:px-0">
        <div className="h-0.5 rounded-full bg-content-primary/20"></div>
      </Container>
    </>
  );
};
