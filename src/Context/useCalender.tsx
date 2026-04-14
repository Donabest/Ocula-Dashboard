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

interface schedule {
  date: string;
  title: string;
  priority: string;
  meet: string;
  time: string;
}

const schedules: schedule[] = [
  {
    date: "Apr 23 2026",
    title: "Sprinting Planning",
    priority: "Starting soon",
    meet: "Zoom meeting",
    time: "05:30 AM - 12:00 PM",
  },
  {
    date: "Apr 14 2026",
    title: "Design Review",
    priority: "Schedule",
    meet: "Google meeting",
    time: "01:00 PM - 02:00 PM",
  },
  {
    date: "Apr 28 2026",
    title: "Design Review",
    priority: "Starting Sonn",
    meet: "Google meeting",
    time: "01:00 PM - 02:40 PM",
  },
  {
    date: "Apr 02 2026",
    title: "Design Review",
    priority: "Schedule",
    meet: "Google meeting",
    time: "09:00 AM - 12:00 PM",
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
    format(new Date(taskDate.date), "MMM dd yyyy"),
  );

  function handleNextDay(nextNum: number) {
    setCurrentDate(addDays(currentDate, nextNum));
  }

  function handlePrevDay(prevNum: number) {
    setCurrentDate(subDays(currentDate, prevNum));
  }

  const [selectDay, setSelectDay] = useState<string>(Today);

  const selectDayScheduleTask = schedules.filter(
    (task) => task.date === selectDay,
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
