import type { JSX } from "react";

export type priorityBg = "High" | "Low" | "Med" | string;
export type status = "Inprogress" | "Todo" | "Upcomming" | "Completed";

export type ListType = {
  icon: JSX.Element;
  list: string;
  To?: string;
};

export interface cardTab {
  icon: JSX.Element;
  status: string;
  total: number;
}

export interface Tasks {
  priority: priorityBg;
  title: string;
  desc: string;
  Assignee?: string;
}

export type List = {
  head: string;
};

export interface ActiveProp {
  active: string;
}

export interface schedule {
  title: string;
  priority: string;
  meet: string;
  time: string;
}

export interface Task {
  title: string;
  description: string;
  priority: string;
  date: string;
  Assignee: string;
  StartDate: string;
  EndDate: string;
  status: status;
}
