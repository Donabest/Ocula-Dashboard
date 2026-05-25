import {
  Bar,
  BarChart,
  Cell,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { tasktype } from "../../utilities/type";
import ChartTooltip from "./ChartTooltip";

function PriorityBarChartAnalytics({ tasks }: { tasks: tasktype[] }) {
  const high = tasks.filter((t) => t.priority === "High").length;
  const med = tasks.filter((t) => t.priority === "Med").length;
  const low = tasks.filter((t) => t.priority === "Low").length;
  const data = [
    { name: "High", value: high, color: "#ef4444" },
    { name: "Med", value: med, color: "#10b981" },
    { name: "Low", value: low, color: "#9ca3af" },
  ];
  return (
    <div
      className="w-full border py-4 pr-4 rounded-lg bg-gray-200/10 dark:bg-slate-700/10"
      onMouseDown={(event) => event.preventDefault()}
    >
      <h1 className="pl-8 text-sm pb-4">Task by priority</h1>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 12, right: 12, left: 0, bottom: 0 }}
          accessibilityLayer={false}
          style={{ outline: "none" }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis allowDecimals={false} tickLine={false} axisLine={false} />
          <Tooltip
            content={(props) => <ChartTooltip {...props} />}
            cursor={false}
            shared={false}
            trigger="hover"
          />
          <Bar
            dataKey="value"
            name="tasks"
            barSize={90}
            activeBar={false}
            style={{ outline: "none" }}
          >
            {data.map((entry) => (
              <Cell fill={entry.color} key={entry.name} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PriorityBarChartAnalytics;
