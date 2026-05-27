import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { tasktype } from "../../utilities/type";
import ChartTooltip from "./ChartTooltip";

function CompletionRateByPriorityChart({ tasks }: { tasks: tasktype[] }) {
  const CompleteByPriority = tasks.filter((t) => t.status === "Completed");
  const HighCompleted = CompleteByPriority.filter(
    (t) => t.priority === "High",
  ).length;
  const LowCompleted = CompleteByPriority.filter(
    (t) => t.priority === "Low",
  ).length;
  const MedCompleted = CompleteByPriority.filter(
    (t) => t.priority === "Med",
  ).length;
  const totalComplete = CompleteByPriority.length;

  const High = Math.ceil((HighCompleted / totalComplete) * 100);
  const Low = Math.ceil((LowCompleted / totalComplete) * 100);
  const Med = Math.ceil((MedCompleted / totalComplete) * 100);

  const data = [
    {
      name: "High",
      value: High,
      color: "red",
      percentage: "Completion",
    },
    {
      name: "Low",
      value: Low,
      color: "green",
      percentage: "Completion",
    },
    {
      name: "Med",
      value: Med,
      color: "blue",
      percentage: "Completion",
    },
  ];
  return (
    <div
      className="w-full border py-4 pr-4 my-4 rounded-lg bg-gray-200/10 dark:bg-slate-700/10"
      onMouseDown={(event) => event.preventDefault()}
    >
      <h1 className="pl-8 text-sm pb-4">Completion rate by priority</h1>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          accessibilityLayer={false}
          style={{ outline: "none" }}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis
            allowDecimals={false}
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
            tickLine={false}
          />
          <Tooltip
            content={(props) => <ChartTooltip {...props} />}
            cursor={false}
            shared={false}
            trigger="hover"
          />
          <Bar
            dataKey="value"
            name="tasks"
            activeBar={false}
            style={{ outline: "none" }}
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CompletionRateByPriorityChart;
