import { useEffect, useRef } from "react";

function useClickOutSide(handler: () => void) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event?.target as Node)) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [handler]);

  return { ref };
}

export default useClickOutSide;
