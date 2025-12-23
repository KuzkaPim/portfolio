import { Hamburger } from './Hamburger';

export const MobileHeader = () => {
  return (
    <header className="md:hidden fixed z-20 right-4 top-6">
      <Hamburger />
    </header>
  );
};
