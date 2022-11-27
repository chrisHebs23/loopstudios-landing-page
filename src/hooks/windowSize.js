import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowWidth, setWidowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // call on initial load
    handleResize();

    // function clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
}
