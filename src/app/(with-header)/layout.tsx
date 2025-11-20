import { Header } from './components/Header';
import { Actions } from './components/Actions';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Actions />
      <Header />
      {children}
    </>
  );
};

export default Layout;
