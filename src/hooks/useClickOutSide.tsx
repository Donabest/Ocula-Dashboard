import { useEffect, useRef } from "react";

function useClickOutSide(handler: () => void, listenCapturing = true) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event?.target as Node)) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("mousedown", handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return { ref };
}

export default useClickOutSide;
