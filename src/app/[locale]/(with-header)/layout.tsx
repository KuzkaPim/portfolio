import { Header } from './blocks';
import { Suspense } from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      {children}
    </>
  );
};

export default Layout;
