import { useState, useLayoutEffect, useRef } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

function useAppearWithCss() {
    const [itemRef, isVisible] = useIntersectionObserver();
    const style = isVisible ? "aos-entered" : "aos";
    return [itemRef, style];
  }

export default useAppearWithCss;
