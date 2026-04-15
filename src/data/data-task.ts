import Assignee from "../assets/person-1.jpg";
import type { status } from "../utilities/type";

interface Task {
  title: string;
  description: string;
  priority: string;
  date: string;
  Assignee: string;
  StartDate: string;
  EndDate: string;
  status: status;
}

export const Tasks: Task[] = [
  {
    priority: "High",
    title: "Design System Updates",
    description:
      "Update component libary with new color tosken and typography scales.",
    date: "Apr 20 2026",
    Assignee,
    StartDate: "jan 26,2027",
    EndDate: "jan 28,2027",
    status: "Inprogress",
  },
  {
    priority: "Med",
    title: "User Research Analytics",
    description:
      "Update component libary with new color tosken and typography scales.",
    date: "Apr 30 2026",
    Assignee,
    StartDate: "jan 26,2027",
    EndDate: "jan 28,2027",
    status: "Completed",
  },
  {
    title: "Send a summary email to stakeholders",
    priority: "Med",
    date: "Apr 25 2026",
    description:
      "Update component libary with new color tosken and typography scales.",
    Assignee,
    StartDate: "jan 26,2027",
    EndDate: "jan 28,2027",
    status: "Todo",
  },
  {
    title: "One-on-One-Meeting",
    priority: "High",
    date: "Apr 15 2026",
    description:
      "Update component libary with new color tosken and typography scales.",
    Assignee,
    StartDate: "jan 26,2027",
    EndDate: "jan 28,2027",
    status: "Upcomming",
  },
];
