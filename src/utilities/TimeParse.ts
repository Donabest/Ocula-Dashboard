export function parseTime(timeStr: string) {
  const [time, modifier] = timeStr.split(" ");
  const [hoursText, minutes] = time.split(":").map(Number);
  let hours = hoursText;
  if (modifier === "PM" && hours !== 12) {
    hours += 12;
  }
  if (modifier === "AM" && hours === 12) {
    hours = 0;
  }

  return hours * 60 + minutes;
}

export function parseTimeToLocal(time: string) {
  const date = new Date(`1970-01-01T${time}`);

  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export function parseReminder(reminder: string): number {
  if (!reminder) return 0;

  const value = parseInt(reminder);
  if (reminder.includes("min")) return value;
  if (reminder.includes("hour")) return value * 60;
  if (reminder.includes("day")) return value * 1440;

  return 0;
}
