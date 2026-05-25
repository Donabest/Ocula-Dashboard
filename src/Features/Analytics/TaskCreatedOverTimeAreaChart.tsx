import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { tasktype } from "../../utilities/type";
import ChartTooltip from "./ChartTooltip";

type Props = {
  tasks: tasktype[];
};

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function TaskCreatedOverTimeAreaChart({ tasks }: Props) {
  const data = MONTHS.map((month, i) => ({
    month,
    Tasks: tasks.filter((t) => new Date(t.StartDate).getMonth() === i).length,
  }));

  return (
    <div className="mt-10 w-full border py-6 rounded-lg bg-gray-200/10 dark:bg-slate-700/10">
      <h1 className="pl-8 text-sm ">Task created over time</h1>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          accessibilityLayer={false}
          style={{ outline: "none" }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="rgba(0,0,0,0.06)"
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
            allowDecimals={false}
          />
          <Tooltip
            cursor={false}
            content={(props) => <ChartTooltip {...props} />}
          />
          <Area
            type="monotone"
            dataKey="Tasks"
            stroke="#378ADD"
            fill="rgba(55,138,221,0.15)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TaskCreatedOverTimeAreaChart;
