import { useEffect, useState } from "react";
/**
 * useImageExists: Hook that verify if the url of the image is valid or not
 * @param url: string - url you want to verify
 * @returns boolean
 */
export const useImageExists = (url: string) => {
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
