import { useState, useEffect } from "react";

interface WindowSize {
  windowWidth: number;
  windowHeight: number;
}

export function useWindowSize(debounceMs: number = 200): WindowSize {
  const [size, setSize] = useState<WindowSize>({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  });

  useEffect(() => {
    let timeout: number
    const handleResize = () => {
      clearTimeout(timeout)
      timeout = window.setTimeout(() => {
        setSize({
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
        });
      }, debounceMs)
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // inicializa

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}
