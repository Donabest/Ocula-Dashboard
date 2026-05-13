import { IoIosArrowUp } from "react-icons/io";
import { useActiveTasks } from "../hooks/useActiveTasks";
import BoardTaskCard from "./BoardTaskCard";

function InprogressTaskBoard() {
  const { inProgressTasks } = useActiveTasks();
  return (
    <section>
      <div className="header">
        <h2 className="title">
          Inprogress
          <span className="text-gray-600 font-raleway dark:text-slate-300">
            .{inProgressTasks.length}
          </span>
        </h2>
        <span>
          <IoIosArrowUp className="text-gray-500 cursor-pointer dark:text-slate-400" />
        </span>
      </div>
      <BoardTaskCard Tasks={inProgressTasks} />
    </section>
  );
}

export default InprogressTaskBoard;
