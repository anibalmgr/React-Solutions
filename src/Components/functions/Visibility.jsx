import { useState, useLayoutEffect } from "react";
import { useSpring } from "@react-spring/web";


function useVisibility(itemRef) {
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    const onScroll = () => {
      const topPosition = itemRef.current.getBoundingClientRect().top;
      const scrollPosition = window.innerHeight;
      topPosition < scrollPosition ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return isVisible;
}

function useAnimation(itemRef, extraStyle) {
    const item = useVisibility(itemRef);
    const style = useSpring({...extraStyle, opacity: item ? 1 : 0});
    return style;
  }


export { useVisibility, useAnimation };
