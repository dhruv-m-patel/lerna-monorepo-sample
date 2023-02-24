import { useState, useEffect } from 'react';

/**
 * Provides a way for a useState based value to be debounced and captured through delayed update
 * Example Usage:
 * const [searchTerm, setSearchTerm] = useState("");
 * const debouncedSearchTerm = useDebounce(searchTerm, 500);
 * return ( <input onChange={(e) => setSearchTerm(e.target.value)} /> )
 * @param value value coming from state set using useState hook for tracking an input value
 * @param delayInMilliseconds Number of milliseconds delay to wait before debouncing the value
 * @returns debounced value at the end of delay
 */
export default function useDebounce(value: string, delayInMilliseconds = 500) {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delayInMilliseconds);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delayInMilliseconds]);

  return debouncedValue;
}
