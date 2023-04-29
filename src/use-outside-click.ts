import React from "react";

const useOutsideClick = (ref: any, callback: () => void) => {
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

export default useOutsideClick;
