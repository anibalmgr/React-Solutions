import { useState, useLayoutEffect, useRef } from 'react';
import { useSpring } from "@react-spring/web";

function useIntObs() {

  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);


  function callbackFunction(entries) {
      const [ entry ] = entries;
      setIsVisible(entry.isIntersecting);
  }

  useLayoutEffect(() => {
      const localRef = itemRef;
      const options = { root: null, rootMargin: "0px", threshold: 1 }
      const observer = new IntersectionObserver(callbackFunction, options)
      if (localRef.current) observer.observe(localRef.current)

      return () => {
        if(localRef.current) observer.unobserve(localRef.current)
      }

  }, [])

  return [itemRef, isVisible];
}

function useAppearWithSprings() {
    const [itemRef, isVisible] = useIntObs();
    const style = useSpring({opacity: isVisible ? 1 : 0});
    return [itemRef, style];
  }

export { useIntObs, useAppearWithSprings };
