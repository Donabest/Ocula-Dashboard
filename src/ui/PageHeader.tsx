interface headerProp {
  title: string | undefined;
  description: string;
}

function PageHeader({ title, description }: headerProp) {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-roboto dark:text-slate-100">{title}</h1>
      {description && (
        <p className="text-gray-500 text-sm pt-1.5 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default PageHeader;
