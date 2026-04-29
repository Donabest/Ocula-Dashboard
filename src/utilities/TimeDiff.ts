import { differenceInDays } from "date-fns";
import type { schedule, Task } from "./type";
import { parseReminder } from "./TimeParse";
import { useEffect, useState } from "react";

function TimeDiff(date: string) {
  const daysDiff = differenceInDays(date, new Date());

  if (daysDiff < 0) {
    return `${Math.abs(daysDiff)} days ago`;
  }
  if (daysDiff === 0) {
    return "Today";
  }
  if (daysDiff > 0) {
    return `in ${daysDiff} days`;
  }
}

export default TimeDiff;

function converTime(time: string) {
  const [hour, minutePart] = time.split(":");
  const [minutes, period] = minutePart.split(" ");

  let h = Number(hour);
  const m = Number(minutes);

  if (period === "PM" && h !== 12) h += 12;
  if (period === "AM" && h === 12) h = 0;

  return { hour: h, minutes: m };
}

function getStartDateTime(task: schedule) {
  const { hour, minutes } = converTime(task.StartTime);

  const date = new Date(task.Date);
  date.setHours(hour);
  date.setMinutes(minutes);
  date.setSeconds(0);

  return date;
}

function getEndDateTime(task: schedule) {
  const { hour, minutes } = converTime(task.EndTime);

  const date = new Date(task.Date);
  date.setHours(hour);
  date.setMinutes(minutes);
  date.setSeconds(0);

  return date;
}

export function ReminderCountDown(task: schedule) {
  const now = new Date();
  const startTime = getStartDateTime(task);
  const endTime = getEndDateTime(task);
  const reminderMinutes = parseReminder(task.Reminder);

  const reminderStart = new Date(startTime);
  reminderStart.setMinutes(startTime.getMinutes() - reminderMinutes);
  if (now < reminderStart) {
    return "Upcomming";
  }

  if (now >= reminderStart && now < startTime) {
    const diff = startTime.getTime() - now.getTime();
    const totalSec = Math.floor(diff / 1000);
    const hour = Math.floor(totalSec / 3600);
    const min = Math.floor((totalSec % 3600) / 60);
    const sec = totalSec % 60;

    return `Start in ${hour}h:${min}m:${sec}s`;
  }

  if (now >= startTime && now <= endTime) {
    const diff = endTime.getTime() - now.getTime();
    const totalSec = Math.floor(diff / 1000);
    const hour = Math.floor(totalSec / 3600);
    const min = Math.floor((totalSec % 3600) / 60);
    const sec = totalSec % 60;

    const format = (n: number) => n.toString().padStart(2, "0");

    return `Ongoing (${format(hour)}h:${format(min)}m:${format(sec)}s)`;
  }

  if (now > endTime) {
    return "overdue";
  }
}

export function LiveCountDown(task: schedule) {
  const [time, setTime] = useState<string | undefined>();

  useEffect(() => {
    const update = () => {
      const result = ReminderCountDown(task);
      setTime(result);
    };

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, [task]);

  return time;
}
