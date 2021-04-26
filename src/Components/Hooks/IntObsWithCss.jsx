import { useState, useLayoutEffect, useRef } from 'react';

function useIntObs() {

  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);


  function callbackFunction(entries) {
      const entry = entries[0].isIntersecting;
      entry && setIsVisible(true);
  }

  useLayoutEffect(() => {
      const localRef = itemRef;
      const options = { root: null, rootMargin: "0px", threshold: 0.5 }
      const observer = new IntersectionObserver(callbackFunction, options)
      if (localRef.current) observer.observe(localRef.current)

      return () => {
        if(localRef.current) observer.unobserve(localRef.current)
      }

  }, [])
  return [itemRef, isVisible];
}

function useAppearWithCss() {
    const [itemRef, isVisible] = useIntObs();
    const style = isVisible ? "aos-entered" : "aos";
    return [itemRef, style];
  }

export { useIntObs, useAppearWithCss };
