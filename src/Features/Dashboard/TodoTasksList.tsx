import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { TodoTasks } from "../../data/data-task";
import ListTaskCard from "../../ui/ListTaskCard";

type Props = {
  active: string | null;
  handler: (tab: string) => void;
};

function TodoTasksList({ active, handler }: Props) {
  const Todo = [...TodoTasks].slice(0, 3);

  return (
    <div>
      <div className="flex items-center gap-3 pl-3">
        <span onClick={() => handler("Todo")}>
          {active === "Todo" ? <FaChevronUp /> : <FaChevronDown />}
        </span>{" "}
        <p className="bg-gray-200 text-sm font-poppin px-3 py-1 rounded-lg uppercase dark:bg-slate-700">
          To Do
        </p>
        <span className="font-medium text-gray-500 dark:text-slate-400">
          . {TodoTasks.length} tasks
        </span>
      </div>

      {active === "Todo" && <ListTaskCard tasks={Todo} Assignee={false} />}
    </div>
  );
}

export default TodoTasksList;
