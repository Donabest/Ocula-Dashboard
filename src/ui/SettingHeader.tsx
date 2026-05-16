function SettingHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="pb-4 ">
      <h1 className="font-medium">{title}</h1>
      <span className="text-sm text-gray-500 dark:text-slate-400">
        {description}
      </span>
    </div>
  );
}

export default SettingHeader;
