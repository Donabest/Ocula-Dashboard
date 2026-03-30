interface headerProp {
  title: string;
  description: string;
}

function MyTasksHeader({ title, description }: headerProp) {
  return (
    <div>
      <h1 className="text-xl font-poppin font-medium">{title}</h1>
      <p className="text-gray-500 text-sm pt-1">{description}</p>
    </div>
  );
}

export default MyTasksHeader;
