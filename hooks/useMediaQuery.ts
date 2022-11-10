import { useState, useEffect } from "react";

interface DefaultQueries {
  isWidthLarger: (value: number) => boolean;
  isWidthSmaller: (value: number) => boolean;
  isHeightLarger: (value: number) => boolean;
  isHeightSmaller: (value: number) => boolean;
}

export function useMediaQuery(): DefaultQueries;
export function useMediaQuery(customQuery: string): boolean;
export function useMediaQuery(customQuery?: string) {
  const setQuery = (queryConfig: string): boolean => {
    const [verified, setVerified] = useState(false);
    const query = matchMedia(queryConfig);

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
  if (customQuery) return setQuery(customQuery);
  const isWidthLarger = (value: number) => setQuery(`(min-width: ${value}px)`);
  const isWidthSmaller = (value: number) => setQuery(`(max-width: ${value}px)`);
  const isHeightLarger = (value: number) => setQuery(`(min-height: ${value}px)`);
  const isHeightSmaller = (value: number) => setQuery(`(max-height: ${value}px)`);
  return { isWidthSmaller, isWidthLarger, isHeightSmaller, isHeightLarger };
}
