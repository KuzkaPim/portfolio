import { ToggleLocale, ToggleLocaleProps } from './ToggleLocale';
import { ToggleTheme } from './ToggleTheme';

export const Swithes = ({ keepMenuOpen }: ToggleLocaleProps) => {
  return (
    <div className="flex gap-2">
      <ToggleLocale keepMenuOpen={keepMenuOpen} />
      <ToggleTheme />
    </div>
  );
};
