import type { JSX } from "react";

export type priorityBg = "High" | "Low" | "Med" | string;
export type status = "Inprogress" | "Todo" | "Completed";

export type ListType = {
  icon: JSX.Element;
  list: string;
  To?: string;
};

export interface cardTab {
  icon: JSX.Element;
  status: string;
  total?: number;
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

export type schedule = {
  id: number;
  eventTitle: string;
  date: string;
  startTime: string;
  endTime: string;
  reminder: string;
  description: string;
  meet: string;
  notificationDismissed: boolean;
  userId: string | undefined;
};

export interface tasktype {
  EndDate: string;
  StartDate: string;
  description: string;
  priority: string;
  project_id: number | null;
  id: number;
  status: status;
  title: string;
  userId: string | undefined;
}

export interface projectType {
  id: number;
  userId: string;
  projectName: string;
}
