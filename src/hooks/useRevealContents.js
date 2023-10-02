import { useEffect, useRef, useState } from "react";

export function useRevealContents(options) {
  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  function callbackFuction(entries) {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }

  useEffect(
    function () {
      const observer = new IntersectionObserver(callbackFuction, options);
      if (containerRef.current) observer.observe(containerRef.current);

      return () => observer.disconnect();
    },
    [options]
  );

  return { isVisible, containerRef };
}
