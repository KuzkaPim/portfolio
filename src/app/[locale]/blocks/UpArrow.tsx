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
      className={`bg-accent/60 backdrop-blur-sm border border-white/20 size-11 right-4 bottom-4 p-1 rounded-full transition duration-250 hover:bg-accent/70 cursor-pointer fixed z-20 shadow-md flex justify-center items-center active:scale-105 group/upArrow ${isVisible ? 'scale-100' : 'scale-50 opacity-0 pointer-events-none'}`}
    >
      <MdKeyboardArrowUp
        onClick={handleClick}
        className="text-content-secondary size-full transition duration-250 group-hover/upArrow:-translate-y-0.5"
      />
    </div>
  );
};
