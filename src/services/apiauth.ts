import { supabase } from "./supabase";

export async function getcurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data.user;
}

export async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data: loginUser, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return loginUser;
}

export async function logOutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
