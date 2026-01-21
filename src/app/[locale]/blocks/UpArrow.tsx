'use client';

import { useEffect, useState } from 'react';
import { SlArrowUp } from 'react-icons/sl';

export const UpArrow = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`bg-accent/30 backdrop-blur-md border border-navigation/10 size-11 right-2 bottom-4 p-1 rounded-full transition duration-250 hover:bg-accent/50 cursor-pointer fixed z-20 flex justify-center items-center active:scale-105 group/upArrow ${isVisible ? 'scale-100' : 'scale-50 opacity-0 pointer-events-none'}`}
    >
      <SlArrowUp
        onClick={handleClick}
        className="text-navigation size-full p-2 transition duration-250 group-hover/upArrow:-translate-y-0.5"
      />
    </div>
  );
};
