import type { FormEvent } from "react";
import LogoSymbol from "../assets/logo-symbol.png";

type InputProps = {
  disabled?: boolean;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder: string;
  value?: string;
};

function Input({
  disabled = false,
  onChange,
  onSubmit,
  placeholder,
  value = "",
}: InputProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedValue = value.trim();

    if (!trimmedValue || disabled) return;

    onSubmit?.(trimmedValue);
  }

  return (
    <form
      className="relative flex w-full items-center justify-center"
      onSubmit={handleSubmit}
    >
      <input
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        className="w-full rounded-2xl border border-white/80 bg-white px-4 py-3 pr-16 text-sm shadow-xl shadow-slate-300/40 outline-0 transition  disabled:cursor-not-allowed disabled:opacity-70 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:shadow-slate-950/40"
        onChange={(event) => onChange?.(event.currentTarget.value)}
      />
      <button
        className="absolute right-2 rounded-xl bg-blue-700 p-1.5 transition hover:bg-blue-600 active:scale-95 disabled:cursor-not-allowed disabled:bg-blue-900"
        disabled={disabled || !value.trim()}
        type="submit"
      >
        <img src={LogoSymbol} alt="Ask Ocula" className="h-7 w-7 invert" />
      </button>
    </form>
  );
}

export default Input;
