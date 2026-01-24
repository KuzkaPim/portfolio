import { Hamburger } from './Hamburger';

export const MobileHeader = () => {
  return (
    <header className="lg:hidden fixed z-20 right-2 top-2">
      <Hamburger />
    </header>
  );
};
