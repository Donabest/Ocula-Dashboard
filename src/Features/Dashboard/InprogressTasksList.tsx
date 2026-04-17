import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { InprogressTasks } from "../../data/data-task";
import ListTaskCard from "../../ui/ListTaskCard";

type Props = {
  active: string | null;
  handler: (tab: string) => void;
};

function InprogressTasksList({ active, handler }: Props) {
  return (
    <div>
      <div className="flex items-center gap-3 pl-3">
        <span onClick={() => handler("Inprogress")}>
          {active === "Inprogress" ? <FaChevronUp /> : <FaChevronDown />}
        </span>
        <p
          className={`bg-green-300 text-black text-sm px-3 py-1 rounded-lg uppercase`}
        >
          Inprogress
        </p>
        <span className="font-poppin text-gray-500">
          . {InprogressTasks.length} tasks
        </span>
      </div>
      {active === "Inprogress" && (
        <ListTaskCard tasks={InprogressTasks} Assignee={false} />
      )}
    </div>
  );
}

export default InprogressTasksList;
