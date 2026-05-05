import type { tasktype } from "../utilities/type";
import { supabase } from "./supabase";

export async function getTasks(): Promise<tasktype[]> {
  const { data, error } = await supabase.from("Tasks").select("*");

  if (error) {
    throw new Error("Tasks could not be loaded");
  }

  return data ?? [];
}
