import { useState, useEffect } from "react";

const tabletSize = 1028;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < tabletSize);
    };

    if (window !== undefined) {
      setIsMobile(window.innerWidth < tabletSize);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (window !== undefined) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
