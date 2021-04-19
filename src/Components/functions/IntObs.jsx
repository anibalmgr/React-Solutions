import { useState, useEffect, useRef } from 'react';
import { useSpring } from "@react-spring/web";

function useIntObs(ref) {

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1
  }

  const itemRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  function callbackFunction(entries) {
      const [ entry ] = entries;
      setIsVisible(entry.isIntersecting);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (itemRef.current) observer.observe(itemRef.current)

    return () => {
      if(itemRef.current) observer.unobserve(itemRef.current)
    }
  }, [itemRef, options])

  return [itemRef, isVisible];
}

function useAppear(...extraStyle) {
    const [itemRef, isVisible] = useIntObs();
    const style = useSpring({...extraStyle, opacity: isVisible ? 1 : 0});
    return [itemRef, style];
  }

export { useIntObs, useAppear };
