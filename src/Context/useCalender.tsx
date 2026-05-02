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
    id: 1,
    Date: "May 07 2026",
    EventTitle: "Sprinting Planning",
    Meet: "Zoom meeting",
    StartTime: "8:30 AM",
    EndTime: "1:00 PM",
    Reminder: "40 min before",
    Description: "What",
  },
  {
    id: 2,
    Date: "May 10 2026",
    EventTitle: "build my project",
    Meet: "One on One meeting",
    StartTime: "2:00 PM",
    EndTime: "4:00 PM",
    Reminder: "30 min before",
    Description: "Agree",
  },
  {
    id: 3,
    Date: "May 02 2026",
    EventTitle: "Design Review",
    Meet: "Google meeting",
    StartTime: "8:30 PM",
    EndTime: "09:00 PM",
    Reminder: "40 min before",
    Description: "HMMMM",
  },
  {
    id: 4,
    Date: "Apr 29 2026",
    EventTitle: "Design Review",
    Meet: "Google meeting",
    StartTime: "02:00 AM",
    EndTime: "12:00 PM",
    Reminder: "10 min before",
    Description: "Welll Welll",
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
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CalenderContext = createContext<CalenderContextType | null>(null);

function CalenderProvider({ children }: { children: ReactNode }) {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
        isOpen,
        setIsOpen,
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
