/* eslint-disable */

import { useState, useEffect } from "react";

export default function useOnScreen(section: React.MutableRefObject<HTMLElement>) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
  
    useEffect(() => {
      observer.observe(section.current);
      return () => {
        observer.disconnect();
      };
    }, []);
  
    return isIntersecting ? "active" : "";
  }