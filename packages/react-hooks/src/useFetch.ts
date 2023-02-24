import { useState } from 'react';
import useEffectWithDeepCompare from './useEffectWithDeepCompare';

/**
 * A custom hook to make external api calls using fetch api
 * @param url API call url or RequestInfo to make api call
 * @param options Options to apply to the request
 * @returns
 * loading: whether api call is in progress.
 * error: the error due to api call failure.
 * data: the data result after api call
 */
export default function useFetch(url: RequestInfo, options?: RequestInit) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffectWithDeepCompare(() => {
    let isMounted = true;
    setLoading(true);

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setData(data);
          setError(null);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error);
          setData(null);
        }
      })
      .finally(() => isMounted && setLoading(false));

    return () => (isMounted = false);
  }, [url, options]);

  return { loading, error, data };
}
