import { useState, useEffect, useCallback } from 'react';

/**
 * A custom hook to use current geolocation available when component mounts
 * usage: const { latitude, longitude } = useGeolocation();
 * @returns geolocation coordinates available from window.event.coords
 */
export default function useGeolocation() {
  const [state, setState] = useState();
  let mounted = true;
  let watchId;

  const onEvent = useCallback((event) => {
    if (mounted) {
      setState(event.coords);
    }
  }, []);

  const onError = useCallback((error) => {
    setState(error);
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onEvent, onError);
    watchId = navigator.geolocation.watchPosition(onEvent, onError);

    return () => {
      mounted = false;
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return state;
}
