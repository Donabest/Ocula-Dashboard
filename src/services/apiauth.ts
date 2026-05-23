import { id } from "date-fns/locale";
import type { signUpType } from "../utilities/type";
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

export async function signUpUser({ fullName, email, password }: signUpType) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function signUpWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/Dashboard`,
      queryParams: {
        prompt: "select_account",
      },
    },
  });

  if (error) throw new Error(error.message);
}
export async function deleteAccount() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/delete-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({ user_id: user?.id }),
  });

  await supabase.auth.signOut();
}
