import type { schedule } from "../utilities/type";
import { supabase } from "./supabase";

export async function getScheduleTasks(): Promise<schedule[]> {
  const { data, error } = await supabase.from("SchedulesTask").select("*");
  if (error) throw new Error("Schedules Task could not be loaded");

  return data ?? [];
}
