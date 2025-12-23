'use client';

import { useEffect, useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

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
      className={`bg-accent/80 backdrop-blur-md border border-white/20 size-11 right-4 bottom-6 p-1 rounded-full transition duration-200 hover:bg-accent cursor-pointer fixed z-20 shadow-md flex justify-center items-center active:scale-105 group/upArrow ${isVisible ? 'scale-100' : 'scale-50 opacity-0 pointer-events-none'}`}
    >
      <MdKeyboardArrowUp
        onClick={handleClick}
        className="text-primary size-full transition duration-200 group-hover/upArrow:-translate-y-0.5"
      />
    </div>
  );
};
