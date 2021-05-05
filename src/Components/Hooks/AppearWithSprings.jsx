import { useState, useLayoutEffect, useRef } from 'react';
import { useSpring } from "@react-spring/web";

import { useIntersectionObserver, useIntersectionObserverVisible } from './useIntersectionObserver';
import useBoundingClientRect from './useBoundingClientRect';


function useAppearSpringsIntObs() {
    const [itemRef, isVisible] = useIntersectionObserverVisible();
    const style = useSpring({opacity: isVisible ? 1 : 0});
    return [itemRef, style];
  }

  function useAppearSpringsBCR(itemRef, extraStyle) {
      const item = useBoundingClientRect(itemRef);
      const style = useSpring({...extraStyle, opacity: item ? 1 : 0});
      return style;
    }

export { useAppearSpringsIntObs, useAppearSpringsBCR };
