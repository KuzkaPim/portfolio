import { Hamburger } from './Hamburger';

export const MobileHeader = () => {
  return (
    <header className="md:hidden fixed z-20 right-2 top-2">
      <Hamburger />
    </header>
  );
};
