import { useState, useEffect } from "react";

export const useMediaQuery = () => {
  const setQuery = (queryConfig: string) => {
    const [verified, setVerified] = useState(false);
    const query = window.matchMedia(queryConfig);
    
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches !== verified) setVerified(event.matches);
      query.removeEventListener("change", handleChange);
    };

    useEffect(() => {
      setVerified(query.matches);
      query.addEventListener("change", handleChange);
    }, [verified]);

    return verified;
  };
  const isWidthLarger = (value: number) => setQuery(`(min-width: ${value}px)`);
  const isWidthSmaller = (value: number) => setQuery(`(max-width: ${value}px)`);
  const isHeightLarger = (value: number) => setQuery(`(min-height: ${value}px)`);
  const isHeightSmaller = (value: number) => setQuery(`(max-height: ${value}px)`);
  return { isWidthSmaller, isWidthLarger, isHeightSmaller, isHeightLarger };
};
