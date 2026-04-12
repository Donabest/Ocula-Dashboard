import { eachDayOfInterval, endOfMonth, getDay, startOfMonth } from "date-fns";
import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type CalenderContextType = {
  setCurrentDate: (date: Date) => void;
  currentDate: Date;
  WEEKDAYS: string[];
  days: Date[];
  emptyDays: unknown[];
};

const CalenderContext = createContext<CalenderContextType | null>(null);

function CalenderProvider({ children }: { children: ReactNode }) {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);
  const startDay = getDay(start);
  const emptyDays = Array.from({ length: startDay });

  const days = eachDayOfInterval({
    start,
    end,
  });

  return (
    <CalenderContext.Provider
      value={{ currentDate, setCurrentDate, WEEKDAYS, days, emptyDays }}
    >
      {children}
    </CalenderContext.Provider>
  );
}
function useCalendar(): CalenderContextType {
  const context = useContext(CalenderContext);
  if (context === undefined)
    throw new Error("CalenderConter was used outside ContextProvider");

  return context;
}

export { CalenderProvider, useCalendar };
