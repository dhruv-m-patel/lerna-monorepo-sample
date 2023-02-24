import { useState, useEffect } from 'react';

/**
 * A custom hook to know when the user is online having an internet connection
 * @returns true if user has internet connection, false otherwise
 */
export default function useOnline() {
  const [online, setOnline] = useState(navigator.onLine);

  function offlineHandler() {
    setOnline(false);
  }

  function onlineHandler() {
    setOnline(true);
  }

  useEffect(() => {
    setOnline(navigator.onLine);
    window.addEventListener('online', onlineHandler);
    window.addEventListener('offline', offlineHandler);

    return () => {
      window.removeEventListener('online', onlineHandler);
      window.removeEventListener('offline', offlineHandler);
    };
  }, []);

  return online;
}
