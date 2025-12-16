import { Hamburger } from './Hamburger';

export const MobileHeader = () => {
  return (
    <header className="sm:hidden fixed z-20 right-3 top-3">
      <Hamburger />
    </header>
  );
};
