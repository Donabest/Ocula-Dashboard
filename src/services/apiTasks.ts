import type { status, tasktype } from "../utilities/type";
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
    .insert({ ...createdTask, project_id: createdTask.project_id || null });

  if (error) throw new Error("Task could not be created");

  return data;
}

export async function editTask(
  taskToEdit: tasktype,
  id: number,
): Promise<tasktype> {
  const { data, error } = await supabase
    .from("Tasks")
    .update({ ...taskToEdit })
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error("Task could not be Edited");

  return data;
}

export async function deleteTask(id: number) {
  const { data, error } = await supabase.from("Tasks").delete().eq("id", id);

  if (error) throw new Error("Task could not be delete");

  return data;
}

export async function updateStatus({
  id,
  newStatus,
}: {
  id: number;
  newStatus: status;
}) {
  const { data, error } = await supabase
    .from("Tasks")
    .update({ status: newStatus })
    .eq("id", id);

  if (error) throw new Error("Task status could not be change");

  return data;
}
