import { useEffect, useState } from "react";

interface Size {
  width: number;
  height: number;
}
/**
 * useWindowSize: return the window width and hight
 *
 * @return { width: number hight: number }  {Size}
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<Size>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
