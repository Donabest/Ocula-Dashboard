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
  status: string;
  title: string;
  decs: string;
}

export type priorityBg = {
  High: string;
  Low: string;
  Medium: string;
};

export type List = {
  head: string;
};
