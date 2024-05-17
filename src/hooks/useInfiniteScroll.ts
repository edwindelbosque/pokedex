import { useEffect, useRef, useState } from 'react';

export const useInfiniteScroll = (fetchMoreData: () => void) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    });

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      fetchMoreData();
    }
  }, [isIntersecting]);

  return { targetRef };
};
