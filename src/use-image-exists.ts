import { useEffect, useState } from "react";

const useImageExists = (url: string) => {
  const [isExists, setIsExists] = useState<boolean>(false);

  useEffect(() => {
    function checkIfImageExists() {
      if (url.length < 6) return setIsExists(false);
      else setIsExists(true);
      const img = new Image();
      img.src = url;
      img.referrerPolicy = "no-referrer";

      if (img.complete) {
        setIsExists(true);
      } else {
        img.onload = () => {
          setIsExists(true);
        };

        img.onerror = () => {
          setIsExists(false);
        };
      }
    }
    checkIfImageExists();
  }, [url]);
  return isExists;
};
export default useImageExists;
