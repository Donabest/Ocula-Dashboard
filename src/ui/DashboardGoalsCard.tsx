import { TbTargetArrow } from "react-icons/tb";
type Goals = {
  head: string;
  desc: string;
  prog: string;
};
const Goals: Goals[] = [
  {
    head: " Check Emails and Messages",
    desc: "Product Launch . My Projects",
    prog: "73",
  },
  {
    head: "Prepare a brief status update to a client",
    desc: "Product Launch . My Projects",
    prog: "13",
  },
  {
    head: "Update project documentation",
    desc: "Team brainstorm . My Projects",
    prog: "63",
  },
];

function DashboardGoalsCard() {
  return (
    <div className="bg-white mt-6 xl:mt-12 mb-4 px-4 sm:px-6 py-5 rounded-2xl dark:bg-slate-800 dark:text-white">
      <h1 className="flex items-center gap-2 font-poppin font-medium mb-2">
        <TbTargetArrow className="text-blue-800/80 dark:text-emerald-400" />
        My Goals
      </h1>

      {Goals.map((goal) => (
        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4"
          key={goal.head}
        >
          <div className="min-w-0">
            <h1 className="font-poppins font-medium ">{goal.head}</h1>
            <p className="text-sm text-gray-400">{goal.desc}</p>
          </div>

          <div className="flex items-center gap-2 sm:shrink-0">
            <div className="w-full sm:w-30 min-w-28 bg-gray-300 rounded-full h-2 dark:bg-slate-700">
              <div
                className={`${goal.prog <= "49" ? "bg-red-500" : "bg-green-500"} h-2 rounded-full `}
                style={{ width: `${goal.prog}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-500 dark:text-slate-400">
              {goal.prog}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardGoalsCard;
