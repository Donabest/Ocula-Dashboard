import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import ChartTooltip from "./ChartTooltip";

type PieChartAnalyticsProps = {
  completedTasks: number;
  inProgressTasks: number;
  todoTasks: number;
  overDueTasks: number;
};

function PieChartAnalytics({
  completedTasks,
  inProgressTasks,
  todoTasks,
  overDueTasks,
}: PieChartAnalyticsProps) {
  const data = [
    { name: "Todo", value: todoTasks, color: "#9ca3af" },
    { name: "Completed", value: completedTasks, color: "#10b981" },
    { name: "Inprogress", value: inProgressTasks, color: "#facc15" },
    { name: "Overdue", value: overDueTasks, color: "#ef4444" },
  ];

  return (
    <div className="w-full border py-6 mb-3 rounded-lg bg-gray-200/10 dark:bg-slate-700/10 sm:mb-0">
      <h1 className="pl-8 text-sm ">Task by status</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart
          responsive
          accessibilityLayer={false}
          style={{ outline: "none" }}
        >
          <Pie
            data={data}
            nameKey="name"
            dataKey="value"
            innerRadius={85}
            outerRadius={120}
            cx="47%"
            cy="50%"
            paddingAngle={5}
          >
            {data.map((entry) => (
              <Cell fill={entry.color} stroke={entry.color} key={entry.name} />
            ))}
          </Pie>
          <Tooltip
            content={(props) => <ChartTooltip {...props} />}
            cursor={false}
          />

          <Legend
            verticalAlign="middle"
            align="right"
            width="34%"
            layout="vertical"
            iconSize={12}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieChartAnalytics;
