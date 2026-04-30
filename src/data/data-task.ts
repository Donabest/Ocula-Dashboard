import Assignee from "../assets/person-1.jpg";
import type { Task } from "../utilities/type";

export const Tasks: Task[] = [
  {
    id: 1,
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
    id: 2,

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
    id: 3,

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
    id: 4,

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
    id: 5,

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
    id: 6,

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
    id: 7,

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
    id: 8,

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
    id: 9,

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
    id: 10,

    title: "One-on-One-Meeting",
    priority: "High",
    date: "Apr 26 2026",
    description:
      "Update component libary with new color tosken and typography scales.",
    Assignee,
    StartDate: "Dec 4 2026",
    EndDate: "jan 28,2027",
    status: "Completed",
  },
  {
    id: 11,

    title: "Trip Creation Flow",
    priority: "Med",
    date: "Apr 26 2026",
    description: "Outline step to create a new trip",
    Assignee,
    StartDate: "Sep 4 2026",
    EndDate: "jan 28,2027",
    status: "Todo",
  },
  {
    id: 12,

    priority: "Med",
    title: "User Research Analytics",
    description:
      "Update component libary with new color tosken and typography scales.",
    date: "Apr 26 2026",
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
