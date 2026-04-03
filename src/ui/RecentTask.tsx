import { BsThreeDots } from "react-icons/bs";
import type { priorityBg, Tasks } from "../utilities/type";
import { CiFlag1 } from "react-icons/ci";

const Recents: Tasks[] = [
  {
    priority: "High",
    title: "Design System Updates",
    desc: "Update component libary with new color tosken and typography scales.",
  },
  {
    priority: "Med",
    title: "User Research Analytics",
    desc: "Update component libary with new color tosken and typography scales.",
  },
];

const priorityBg: Record<priorityBg, string> = {
  High: "bg-red-200 text-red-600 dark:bg-red-300 ",
  Low: "bg-gray-200 text-gray-700 dark:bg-slate-200",
  Med: "bg-green-200 text-emerald-700 dark:bg-emerald-200",
};

function RecentTask() {
  return (
    <div className=" bg-white p-4 rounded-lg  dark:bg-slate-800 dark:text-slate-100">
      <div className="flex items-center justify-between font-poppin font-medium ">
        Recents Tasks
        <BsThreeDots className="cursor-pointer" />
      </div>

      <div className="flex flex-col items-center gap-4 mt-3">
        {Recents.map((rcard, index) => (
          <div
            className=" bg-gray-100 py-3 px-4 rounded-lg space-y-3  dark:bg-slate-700 dark:text-slate-100"
            key={index}
          >
            <div className=" flex justify-between items-center">
              <p
                className={`flex items-center gap-1 ${priorityBg[rcard.priority]} px-2 py-1 rounded-lg `}
              >
                <CiFlag1 />
                {rcard.priority}
              </p>
              <BsThreeDots className="cursor-pointer" />
            </div>

            <div className="space-y-1">
              <h1 className="font-poppin font-[420]">{rcard.title} </h1>
              <p className="text-slate-600 text-sm text-wrap dark:text-slate-400">
                {rcard.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentTask;
