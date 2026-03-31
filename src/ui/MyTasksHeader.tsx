interface headerProp {
  title: string;
  description: string;
}

function MyTasksHeader({ title, description }: headerProp) {
  return (
    <div>
      <h1 className="text-xl font-poppin font-medium dark:text-slate-100">
        {title}
      </h1>
      <p className="text-gray-500 text-sm pt-1.5 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}

export default MyTasksHeader;
