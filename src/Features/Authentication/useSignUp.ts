import { useMutation } from "@tanstack/react-query";
import { signUpUser } from "../../services/apiauth";
import { toast } from "react-hot-toast";

export function useSignUp() {
  const { mutate: signUp, isPending: isSigning } = useMutation({
    mutationFn: signUpUser,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address.",
      );
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signUp, isSigning };
}
