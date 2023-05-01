import React from "react";
export const SIZES = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};
/**
 * useMediaQuery: Hook that verify if a screen size matches the window size
 * @param screen: "sm" | "md" | "lg" | "xl" | "2xl" - screen you want to verify if the window matches or not
 * @returns boolean
 */
export const useMediaQuery = (screen: "sm" | "md" | "lg" | "xl" | "2xl") => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const query = `(min-width: ${SIZES[screen]})`;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, screen]);

  return matches;
};
