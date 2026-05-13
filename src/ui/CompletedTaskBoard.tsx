import BoardTaskCard from "./BoardTaskCard";
import { useActiveTasks } from "../hooks/useActiveTasks";
import { IoIosArrowUp } from "react-icons/io";

function CompletedTaskBoard() {
  const { completedTasks } = useActiveTasks();
  return (
    <section>
      <div className="header">
        <h2 className="title">
          Completed
          <span className="text-gray-600 font-raleway dark:text-slate-300">
            .{completedTasks.length}
          </span>
        </h2>
        <span>
          <IoIosArrowUp className="text-gray-500 cursor-pointer dark:text-slate-400" />
        </span>
      </div>
      <BoardTaskCard Tasks={completedTasks} />
    </section>
  );
}

export default CompletedTaskBoard;
