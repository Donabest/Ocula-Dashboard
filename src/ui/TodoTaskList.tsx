import { useState } from "react";
import ListTaskCard from "./ListTaskCard";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useActiveTasks } from "../hooks/useActiveTasks";

function TodoTaskList() {
  const [isTodo, setIsTodo] = useState<boolean>(true);
  const { todoTasks } = useActiveTasks();

  return (
    <div className="space-y-4 bg-white p-4 mt-6 rounded-lg cursor-pointer dark:bg-slate-800 dark:text-white sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="cursor-pointer"
          onClick={() => setIsTodo((show) => !show)}
        >
          {isTodo ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
        <p className="bg-gray-200 text-gray-900 px-4 py-1 rounded-lg">Todo</p>
        <span> . {todoTasks.length} Tasks</span>
      </div>
      {isTodo && <ListTaskCard tasks={todoTasks} Assignee={true} />}
    </div>
  );
}

export default TodoTaskList;
