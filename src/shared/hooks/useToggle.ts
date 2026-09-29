import { useState } from 'react';

export const useToggle = (initialValue: boolean) => {
  const [isToggled, setToggle] = useState<boolean>(initialValue);

  const toggle = () => setToggle((prev) => !prev);

  return [isToggled, toggle, setToggle] as const;
};
