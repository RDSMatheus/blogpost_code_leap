import { useEffect, useRef } from 'react';

const useInfiniteScroll = (hasMore: boolean, onLoadMore: () => void) => {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) onLoadMore();
      },
      { threshold: [1] },
    );

    if (observerRef.current && hasMore) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [onLoadMore, hasMore]);
  return observerRef;
};

export default useInfiniteScroll;
