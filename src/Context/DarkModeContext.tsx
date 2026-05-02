import { createContext, useContext, useEffect, type ReactNode } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type DarkModeContextType = {
  isDarkMode: boolean;
  ToogleDarkMode: () => void;
};
const DarkModeContext = createContext<DarkModeContextType | null>(null);

function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(
    window.matchMedia("(prefers-color-scheme:dark)").matches,
    "isDarkMode",
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [isDarkMode]);

  function ToogleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, ToogleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDark() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside DarkModeProvider");

  return context;
}
export { useDark, DarkModeProvider };
