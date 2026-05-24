import { Currency } from "lucide-react";
import type { signUpType } from "../utilities/type";
import { supabase, supabaseUrl } from "./supabase";

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

export async function updateCurrentUser({
  avatar,
  firstName,
  lastName,
}: {
  avatar?: File | null;
  firstName?: string | undefined;
  lastName?: string | undefined;
}) {
  let updateData;

  const fullName = firstName + " " + lastName;
  if (firstName && lastName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser({ ...updateData });
  if (error) throw new Error(error.message);

  if (!avatar) return data;

  const fileName = `Avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("Avatar")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);
  // https://vvmxejfpbgcakdpnsacz.supabase.co/storage/v1/object/public/Avatar/cropped-image-of-basketball-player-playing-basketb-2022-12-16-20-45-01-utc.jpg

  const { data: updateUser, error: updateError } =
    await supabase.auth.updateUser({
      data: {
        avatar_url: `${supabaseUrl}/storage/v1/object/public/Avatar/${fileName}`,
      },
    });

  if (updateError) throw new Error(updateError.message);

  return updateUser;
}

export async function removeUserAvatar() {
  const { data, error } = await supabase.auth.updateUser({
    data: {
      avatar_url: null,
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function updatePassword({
  currentPassword,
  newPassword,
}: {
  currentPassword: string;
  newPassword: string;
}) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error: signInError } = await supabase.auth.signInWithPassword({
    email: user?.email || "",
    password: currentPassword,
  });

  if (signInError) throw new Error("Current Password is incorrect");

  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) throw new Error(error.message);
}
