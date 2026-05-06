import type { UseFormClearErrors } from "react-hook-form";
import type { tasktype } from "../utilities/type";
import { useEffect } from "react";

type formErrorType = {
  error: string | undefined;
  clear: UseFormClearErrors<tasktype>;
};
function FormError({ error, clear }: formErrorType) {
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        clear();
      }, 3000);

      return () => clearTimeout(timer);
    }
  });
  return <p className=" text-red-300 text-sm">{error}</p>;
}

export default FormError;
