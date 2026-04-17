import { useState } from "react";
import { TodoTasks } from "../data/data-task";
import ListTaskCard from "./ListTaskCard";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function TodoTaskList() {
  const [isTodo, setIsTodo] = useState<boolean>(true);

  return (
    <div className="space-y-4 bg-white p-6 mt-6 rounded-lg  cursor-pointer dark:bg-slate-800 dark:text-white">
      <div className="flex items-center gap-2">
        <span
          className="cursor-pointer"
          onClick={() => setIsTodo((show) => !show)}
        >
          {isTodo ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
        <p className="bg-gray-200 text-gray-900 px-4 py-1 rounded-lg">
          Completed
        </p>
        <span> . {TodoTasks.length} Tasks</span>
      </div>
      {isTodo && <ListTaskCard tasks={TodoTasks} Assignee={true} />}
    </div>
  );
}

export default TodoTaskList;
