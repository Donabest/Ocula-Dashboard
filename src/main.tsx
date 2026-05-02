import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { CalenderProvider } from "./Context/useCalender";
import { DarkModeProvider } from "./Context/DarkModeContext";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DarkModeProvider>
      <CalenderProvider>
        <App />
      </CalenderProvider>
    </DarkModeProvider>
  </React.StrictMode>,
);
