import { useEffect, useState } from "react";

const useMediaQuery = (mediaQuery: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const eventName = "change";

    const mediaQueryList = window.matchMedia(mediaQuery);

    setMatches(mediaQueryList.matches);

    const changeHandler = ({ matches }: MediaQueryListEvent) =>
      setMatches(matches);

    mediaQueryList.addEventListener(eventName, changeHandler);

    return () => mediaQueryList.removeEventListener(eventName, changeHandler);
  }, [mediaQuery, setMatches]);

  return { matches };
};

export default useMediaQuery;
