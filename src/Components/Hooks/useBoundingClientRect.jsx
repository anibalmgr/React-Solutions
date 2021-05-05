import React, { useState, useLayoutEffect } from 'react';

function useBoundingClientRect(itemRef) {
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    const onScroll = () => {
      const topPosition = itemRef.current.getBoundingClientRect().top;
      const scrollPosition = window.innerHeight;
      topPosition < scrollPosition ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  return isVisible;
}

export default useBoundingClientRect;
