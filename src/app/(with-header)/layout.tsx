import { Header } from './components/Header';
import { Hamburger } from './components/Hamburger';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Hamburger />
      <Header />
      {children}
    </>
  );
};

export default Layout;
