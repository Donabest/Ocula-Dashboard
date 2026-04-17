import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { UpCommingTasks } from "../../data/data-task";
import ListTaskCard from "../../ui/ListTaskCard";

type Props = {
  active: string | null;
  handler: (tab: string) => void;
};
function UpCommingTasksList({ active, handler }: Props) {
  const UpComming = [...UpCommingTasks].slice(0, 3);

  return (
    <div>
      <div className="flex items-center gap-3 pl-3">
        <span onClick={() => handler("Upcomming")}>
          {active === "Upcomming" ? <FaChevronUp /> : <FaChevronDown />}
        </span>{" "}
        <p className="bg-yellow-200 text-sm text-center font-poppin px-3 py-1 rounded-lg uppercase dark:bg-yellow-900 dark:text-white">
          Up Comming
        </p>
        <span className="font-medium text-gray-500 dark:text-slate-400">
          . {UpCommingTasks.length} tasks
        </span>
      </div>

      {active === "Upcomming" && (
        <ListTaskCard tasks={UpComming} Assignee={false} />
      )}
    </div>
  );
}

export default UpCommingTasksList;
