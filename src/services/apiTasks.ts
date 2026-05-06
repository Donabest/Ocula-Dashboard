import type { tasktype } from "../utilities/type";
import { supabase } from "./supabase";

export async function getTasks(): Promise<tasktype[]> {
  const { data, error } = await supabase.from("Tasks").select("*");

  if (error) {
    throw new Error("Tasks could not be loaded");
  }

  return data ?? [];
}

export async function createTask(createdTask: tasktype) {
  const { data, error } = await supabase
    .from("Tasks")
    .insert({ ...createdTask });

  if (error) throw new Error("Task could not be created");

  return data;
}

export async function deleteTask(id: number) {
  const { data, error } = await supabase.from("Tasks").delete().eq("id", id);

  if (error) throw new Error("Task could not be delete");

  return data;
}
