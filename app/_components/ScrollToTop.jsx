'use client';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-12  right-1/2 bg-color-primary text-color-secondary p-3 rounded-full shadow-lg transition-all ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      } hover:bg-color-primary`}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
