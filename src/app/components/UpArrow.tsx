'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

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
    <FaArrowUp
      onClick={handleClick}
      className={`bg-primary text-accent size-8 sm:size-10 w-max fixed right-3 sm:right-5 bottom-3 sm:bottom-5 p-1.5 sm:p-2 rounded-full shadow-md transition hover:scale-105 active:scale-100 ${isVisible ? 'scale-100' : 'scale-50 opacity-0 pointer-events-none'}`}
    />
  );
};
