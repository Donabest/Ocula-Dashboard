import { IoCheckmarkCircle } from "react-icons/io5";

type AppearancePreviewCardProps = {
  title: string;
  description?: string;
  selected: boolean;
  variant: "light" | "dark";
  onSelect: () => void;
};

const previewStyle = {
  light: {
    shell: "bg-gray-100",
    panel: "bg-white",
    muted: "bg-gray-200",
    soft: "bg-gray-100",
    text: "bg-gray-500",
    accent: "bg-blue-700",
  },
  dark: {
    shell: "bg-slate-950",
    panel: "bg-slate-800",
    muted: "bg-slate-700",
    soft: "bg-slate-900",
    text: "bg-slate-400",
    accent: "bg-blue-500",
  },
};

function AppearancePreviewCard({
  title,
  description,
  selected,
  variant,
  onSelect,
}: AppearancePreviewCardProps) {
  const style = previewStyle[variant];

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={`group w-full rounded-xl border p-3 text-left transition hover:-translate-y-0.5 hover:shadow-md ${
        selected
          ? "border-blue-700 ring-2 ring-blue-700/20 dark:border-blue-500 dark:ring-blue-500/20"
          : "border-gray-200 dark:border-slate-700"
      }`}
    >
      <div
        className={`relative overflow-hidden rounded-lg  border border-black/5 ${style.shell} p-3 dark:border-white/5`}
      >
        {selected && (
          <IoCheckmarkCircle className="absolute right-2 top-2 text-blue-600 dark:text-blue-400" />
        )}

        <div className="flex h-32 gap-3">
          <div className={`w-14 rounded-md ${style.panel} p-2`}>
            <div className={`mb-4 h-4 w-4 rounded-full ${style.accent}`} />
            <div className="space-y-2">
              <div className={`h-2 w-8 rounded-full ${style.muted}`} />
              <div className={`h-2 w-10 rounded-full ${style.muted}`} />
              <div className={`h-2 w-7 rounded-full ${style.muted}`} />
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-3">
            <div className={`rounded-md ${style.panel} p-2`}>
              <div className="flex items-center justify-between">
                <div className={`h-2 w-20 rounded-full ${style.text}`} />
                <div className={`h-5 w-5 rounded-full ${style.muted}`} />
              </div>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-2">
              <div className={`rounded-md ${style.panel} p-2`}>
                <div className={`mb-3 h-2 w-12 rounded-full ${style.text}`} />
                <div className={`h-8 rounded-md ${style.soft}`} />
              </div>
              <div className={`rounded-md ${style.panel} p-2`}>
                <div className={`mb-3 h-2 w-10 rounded-full ${style.text}`} />
                <div className={`h-8 rounded-md ${style.soft}`} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-medium text-gray-900 dark:text-slate-100">
            {title}
          </h3>
          {description && (
            <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
              {description}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}

export default AppearancePreviewCard;
