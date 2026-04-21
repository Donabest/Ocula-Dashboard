import Assignee from "../assets/person-1.jpg";
import type { Task } from "../utilities/type";

export const Tasks: Task[] = [
  {
    priority: "High",
    title: "Design System Updates",
    description:
      "Update component libary with new color tosken and typography scales.",
    date: "Apr 20 2026",
    Assignee,
    StartDate: "Apr 4 2026",
    EndDate: "Apr 10 2026",
    status: "Inprogress",
  },
  {
    priority: "Low",
    title: "Design System Updates",
    description:
      "Update component libary with new color tosken and typography scales.",
    date: "Apr 20 2026",
    Assignee,
    StartDate: "Apr 4 2026",
    EndDate: "Apr 20 2026",
    status: "Inprogress",
  },
  {
    priority: "Med",
    title: "Design System Updates",
    description:
      "Update component libary with new color tosken and typography scales.",
    date: "Apr 20 2026",
    Assignee,
    StartDate: "Apr 4 2026",
    EndDate: "Apr 15 2026",
    status: "Inprogress",
  },
  {
    priority: "High",
    title: "Review Navigation",
    description: "check smooth navigation,loading,display and so on",
    date: "Apr 20 2026",
    Assignee,
    StartDate: "Apr 4 2026",
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
    StartDate: "Apr 4 2026",
    EndDate: "jan 28,2027",
    status: "Completed",
  },
  {
    priority: "Med",
    title: "User Research Analytics",
    description:
      "Update component libary with new color tosken and typography scales.",
    date: "Apr 30 2026",
    Assignee,
    StartDate: "Apr 4 2026",
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
    StartDate: "Oct 4 2026",
    EndDate: "jan 28,2027",
    status: "Todo",
  },
  {
    title: "Trip Creation Flow",
    priority: "Med",
    date: "Apr 25 2026",
    description: "Outline step to create a new trip",
    Assignee,
    StartDate: "Sep 4 2026",
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
    StartDate: "Aug 4 2026",
    EndDate: "jan 28,2027",
    status: "Inprogress",
  },
  {
    title: "One-on-One-Meeting",
    priority: "High",
    date: "Apr 15 2026",
    description:
      "Update component libary with new color tosken and typography scales.",
    Assignee,
    StartDate: "Dec 4 2026",
    EndDate: "jan 28,2027",
    status: "Completed",
  },
  {
    title: "Trip Creation Flow",
    priority: "Med",
    date: "Apr 25 2026",
    description: "Outline step to create a new trip",
    Assignee,
    StartDate: "Sep 4 2026",
    EndDate: "jan 28,2027",
    status: "Todo",
  },
  {
    priority: "Med",
    title: "User Research Analytics",
    description:
      "Update component libary with new color tosken and typography scales.",
    date: "Apr 30 2026",
    Assignee,
    StartDate: "jun 4 2026",
    EndDate: "jan 28,2027",
    status: "Completed",
  },
];

export const InprogressTasks = Tasks.filter(
  (task) => task.status === "Inprogress",
);
export const CompletedTasks = Tasks.filter(
  (task) => task.status === "Completed",
);
export const TodoTasks = Tasks.filter((task) => task.status === "Todo");
export const isUpComming = Tasks.filter(
  (upcomming) => new Date(upcomming.StartDate) > new Date(),
);
