import type { TooltipContentProps, TooltipValueType } from "recharts";

type ChartPayload = {
  name?: string | number;
  value?: TooltipValueType;
  color?: string;
};

function formatValue(value: TooltipValueType | undefined) {
  return Array.isArray(value) ? value.join(" - ") : value;
}

function ChartTooltip({
  active,
  payload,
}: TooltipContentProps<TooltipValueType, string | number>) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-white/70 bg-white/90 px-2 py-1 text-xs shadow-lg shadow-slate-900/10 backdrop-blur-md ring-1 ring-slate-900/5 dark:border-slate-700/70 dark:bg-slate-950/90 dark:ring-white/10">
      {payload.map((item) => {
        const chartData = item.payload as ChartPayload;
        const color = chartData.color ?? item.color ?? item.fill ?? "#475569";
        const name = chartData.name ?? item.name;
        const value = formatValue(chartData.value ?? item.value);

        return (
          <p
            className="flex items-center gap-1.5 font-medium leading-tight"
            key={`${name}-${value}`}
            style={{ color }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: color }}
            ></span>
            <span>
              {name}: {value}
            </span>
          </p>
        );
      })}
    </div>
  );
}

export default ChartTooltip;
