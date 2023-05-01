import React from "react";
/**
 * useOutsideClick: Hook that execute a callback on an HTML Element after clicking outside of it
 * @param ref: any - ref to the element you want to apply
 * @param callback: () => void - callback you want to executing when clicking outside the element
 * @returns boolean
 */
export const useOutsideClick = (ref: any, callback: () => void) => {
  const handleClick = (e: MouseEvent | any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
