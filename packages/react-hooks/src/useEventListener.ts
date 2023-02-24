import { useRef, useEffect } from 'react';

/**
 * Executes a handler function when a dom event gets triggered
 * Usage: useEventListener("mousemove", handler);
 * @param domEvent dom event to trigger the handler function i.e. mousemove
 * @param handler Handler function to execute
 * @param element Optional target element to set event listener on. Default is window.
 */
export default function useEventListener(
  domEvent: string,
  handler: () => void,
  element = window
) {
  const savedHandler = useRef<(e) => void>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler, savedHandler]);

  useEffect(() => {
    if (!element?.addEventListener) {
      return;
    }

    const eventListener = (event) => {
      if (savedHandler?.current) {
        savedHandler.current(event);
      }
    };
    element.addEventListener(domEvent, eventListener);

    return () => {
      element.removeEventListener(domEvent, eventListener);
    };
  }, [domEvent, element]);
}
