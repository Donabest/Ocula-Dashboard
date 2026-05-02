import { useEffect, useState } from "react";

function useLocalStorage(
  initialize: boolean,
  key: string,
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialize;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
