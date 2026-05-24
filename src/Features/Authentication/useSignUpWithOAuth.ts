import { useMutation } from "@tanstack/react-query";
import { signUpWithGoogle } from "../../services/apiauth";
import { toast } from "react-hot-toast";

export function useSignUpWithOAuth() {
  const { mutate: googleSignUp, isPending } = useMutation({
    mutationFn: signUpWithGoogle,
  });

  return { googleSignUp, isPending };
}
