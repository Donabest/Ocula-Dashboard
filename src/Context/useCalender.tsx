import {
  addDays,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  startOfMonth,
  subDays,
} from "date-fns";
import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { schedule } from "../utilities/type";

const schedules: schedule[] = [
  {
    Date: "Apr 23 2026",
    EventTitle: "Sprinting Planning",
    Meet: "Zoom meeting",
    StartTime: "05:30 AM",
    EndTime: "12:00 PM",
    Reminder: "none",
    Description: "What",
  },
  {
    Date: "Apr 27 2026",
    EventTitle: "Design Review",
    Meet: "Google meeting",
    StartTime: "06:00 PM",
    EndTime: "09:00 PM",
    Reminder: "5 min before",
    Description: "Agree",
  },
  {
    Date: "Apr 27 2026",
    EventTitle: "Design Review",
    Meet: "Google meeting",
    StartTime: "4:40 PM",
    EndTime: "8:40 PM",
    Reminder: "20 min before",
    Description: "HMMMM",
  },
  {
    Date: "Apr 02 2026",
    EventTitle: "Design Review",
    Meet: "Google meeting",
    StartTime: "09:00 AM",
    EndTime: "12:00 PM",
    Reminder: "2 days before",
    Description: "Okay",
  },
];

type CalenderContextType = {
  setCurrentDate: (date: Date) => void;
  currentDate: Date;
  WEEKDAYS: string[];
  days: Date[];
  emptyDays: unknown[];
  schedules: schedule[];
  handleNextDay: (nextNum: number) => void;
  handlePrevDay: (prevNum: number) => void;
  hasTask: string[];
  setSelectDay: React.Dispatch<React.SetStateAction<string>>;
  selectDayScheduleTask: schedule[];
  index: number;
  selectDay: string;
};

const CalenderContext = createContext<CalenderContextType | null>(null);

function CalenderProvider({ children }: { children: ReactNode }) {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);
  const startDay = getDay(start);
  const emptyDays = Array.from({ length: startDay });
  const Today = format(new Date(), "MMM dd yyyy");

  const days = eachDayOfInterval({
    start,
    end,
  });

  const hasTask = schedules.map((taskDate) =>
    format(new Date(taskDate.Date), "MMM dd yyyy"),
  );

  function handleNextDay(nextNum: number) {
    setCurrentDate(addDays(currentDate, nextNum));
  }

  function handlePrevDay(prevNum: number) {
    setCurrentDate(subDays(currentDate, prevNum));
  }

  const [selectDay, setSelectDay] = useState<string>(Today);

  const selectDayScheduleTask = schedules.filter(
    (task) => task.Date === selectDay,
  );

  const index = days.findIndex(
    (day) => format(day, "MMM dd yyyy") === format(currentDate, "MMM dd yyyy"),
  );

  return (
    <CalenderContext.Provider
      value={{
        currentDate,
        setCurrentDate,
        WEEKDAYS,
        days,
        emptyDays,
        schedules,
        hasTask,
        selectDayScheduleTask,
        index,
        selectDay,
        handleNextDay,
        handlePrevDay,
        setSelectDay,
      }}
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
