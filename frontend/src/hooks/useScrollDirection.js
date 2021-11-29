import { useRef, useState, useEffect } from 'react';

/**
 *
 * @param {String} initialState initial value for the scroll direction.
 */

const useScrollDirection = (initialState) => {
  const lastScrollTop = useRef(0);
  const [scrollDirection, setScrollDirection] = useState(initialState);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop.current) {
        lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
        setScrollDirection('down');
      } else {
        lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
        setScrollDirection('up');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollDirection;
};

export { useScrollDirection };
