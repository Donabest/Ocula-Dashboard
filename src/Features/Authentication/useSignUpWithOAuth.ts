import { useMutation } from "@tanstack/react-query";
import { signUpWithGoogle } from "../../services/apiauth";

export function useSignUpWithOAuth() {
  const { mutate: googleSignUp, isPending } = useMutation({
    mutationFn: signUpWithGoogle,
  });

  return { googleSignUp, isPending };
}
