import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import ListTaskCard from "../../ui/ListTaskCard";
import { useTasks } from "../../services/useTasks";

type Props = {
  active: string | null;
  handler: (tab: string) => void;
};

function DashboardTodoTasksList({ active, handler }: Props) {
  const { todoTasks } = useTasks();
  const Todo = [...todoTasks].slice(0, 3);

  return (
    <div>
      <div className="flex items-center gap-3 pl-3">
        <span onClick={() => handler("Todo")}>
          {active === "Todo" ? <FaChevronUp /> : <FaChevronDown />}
        </span>{" "}
        <p className="bg-gray-200 text-sm font-poppin px-3 py-1 rounded-lg uppercase dark:bg-slate-700">
          To Do
        </p>
        <span className="font-medium text-gray-500 dark:text-slate-500">
          . {todoTasks.length} tasks
        </span>
      </div>

      {active === "Todo" && <ListTaskCard tasks={Todo} Assignee={false} />}
    </div>
  );
}

export default DashboardTodoTasksList;
