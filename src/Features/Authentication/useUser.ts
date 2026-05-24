import { useQuery } from "@tanstack/react-query";
import { getcurrentUser } from "../../services/apiauth";
import { toast } from "react-hot-toast";
import type { User, UserMetadata } from "@supabase/supabase-js";

export function useUser() {
  const {
    data: user,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getcurrentUser,
  });

  if (error) {
    toast.error(error.message);
  }

  return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
}
