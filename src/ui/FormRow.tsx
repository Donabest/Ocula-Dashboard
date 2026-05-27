function FormRow({ label }: { label: string }) {
  return (
    <label
      htmlFor={label}
      className="text-sm font-medium text-gray-500 dark:text-slate-500"
    >
      {label}
    </label>
  );
}

export default FormRow;
