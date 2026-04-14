import { differenceInDays } from "date-fns";

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
