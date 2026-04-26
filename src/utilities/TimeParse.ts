export function parseTime(timeStr: string) {
  const [time, modifier] = timeStr.split(" ");
  let [hours, minutes] = time.split(":").map(Number);
  if (modifier === "PM" && hours !== 12) {
    hours += 12;
  }
  if (modifier === "AM" && hours === 12) {
    hours = 0;
  }

  return hours * 60 + minutes;
}

export function parseReminder(reminder: string): number {
  if (!reminder) return 0;

  const value = parseInt(reminder);
  if (reminder.includes("min")) return value;
  if (reminder.includes("hour")) return value * 60;
  if (reminder.includes("day")) return value * 1440;

  return 0;
}
