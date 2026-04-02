import type { JSX } from "react";

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

export interface recentsCard {
  status: priorityBg;
  title: string;
  decs: string;
}

export type priorityBg = "High" | "Low" | "Med";
export type status = "Inprogress" | "Todo" | "Upcomming" | "Completed";

export type List = {
  head: string;
};

export interface ActiveProp {
  active: string;
}
