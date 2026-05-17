import type { projectType } from "../utilities/type";
import { supabase } from "./supabase";

export async function getProjects(): Promise<projectType[]> {
  const { data, error } = await supabase.from("Project").select("*");

  if (error) throw new Error("Project could not be loaded");

  return data ?? [];
}

export async function createProject(projectName: string) {
  const { data, error } = await supabase
    .from("Project")
    .insert({ projectName });

  if (error) throw new Error("Project Name could not be created");

  return data;
}

export async function editProject(NewProjectName: string, id: number) {
  const { data, error } = await supabase
    .from("Project")
    .update({ projectName: NewProjectName })
    .eq("id", id)
    .select();

  if (error) throw new Error("Project Name could not be Edited");

  return data;
}

export async function deleteProject(id: number | undefined) {
  const { data, error } = await supabase.from("Project").delete().eq("id", id);
  if (error) throw new Error("Project could not be deleted");
  return data;
}
