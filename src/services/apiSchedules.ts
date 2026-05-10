import type { schedule } from "../utilities/type";
import { supabase } from "./supabase";

export async function getScheduleTasks(): Promise<schedule[]> {
  const { data, error } = await supabase.from("SchedulesTask").select("*");
  if (error) throw new Error("Schedules Task could not be loaded");

  return data ?? [];
}

export async function createScheduleTask(newScheduleTask: schedule) {
  const { data, error } = await supabase
    .from("SchedulesTask")
    .insert({ ...newScheduleTask });

  if (error) throw new Error("SchedulesTask could not be created");

  return data;
}

export async function deleteScheduleTask(id: number) {
  const { data, error } = await supabase
    .from("SchedulesTask")
    .delete()
    .eq("id", id);

  if (error) throw new Error("Schedule Task Could not be Created");

  return data;
}

export async function dismissedNotification(id: number) {
  const { data, error } = await supabase
    .from("SchedulesTask")
    .update({ notificationDismissed: true })
    .eq("id", id);

  if (error) throw new Error("Notification Can't be dismissed");

  return data;
}
