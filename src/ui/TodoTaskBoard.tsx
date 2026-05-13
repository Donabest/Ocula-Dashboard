import { IoIosArrowUp } from "react-icons/io";
import { useActiveTasks } from "../hooks/useActiveTasks";
import BoardTaskCard from "./BoardTaskCard";

function TodoTaskBoard() {
  const { todoTasks } = useActiveTasks();
  return (
    <section>
      <div className="header">
        <h2 className="title">
          Todo
          <span className="text-gray-600 font-raleway dark:text-slate-300">
            .{todoTasks.length}
          </span>
        </h2>
        <span>
          <IoIosArrowUp className="text-gray-500 cursor-pointer dark:text-slate-400" />
        </span>
      </div>
      <BoardTaskCard Tasks={todoTasks} />
    </section>
  );
}

export default TodoTaskBoard;
