import { supabase } from "./supabase";

export async function getTasks() {
  const { data, error } = await supabase.from("Tasks").select("*");

  if (error) {
    throw new Error("Tasks could not be loaded");
  }

  return data;
}
