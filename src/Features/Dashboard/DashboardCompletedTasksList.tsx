import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import ListTaskCard from "../../ui/ListTaskCard";
import { useTasks } from "../../services/useTasks";

type Props = {
  active: string | null;
  handler: (tab: string) => void;
};
function DashboardCompletedTasksList({ active, handler }: Props) {
  const { completedTasks } = useTasks();
  const Completed = [...completedTasks].slice(0, 3);

  return (
    <div>
      <div className="flex items-center gap-3 pl-3">
        <span onClick={() => handler("Completed")}>
          {active === "Completed" ? <FaChevronUp /> : <FaChevronDown />}
        </span>
        <p className="bg-blue-200 text-sm text-center font-poppin px-3 py-1 rounded-lg uppercase dark:bg-blue-800 dark:text-white">
          Completed
        </p>
        <span className="font-medium text-gray-500 dark:text-slate-500">
          . {completedTasks.length} tasks
        </span>
      </div>
      {active === "Completed" && (
        <ListTaskCard tasks={Completed} Assignee={false} />
      )}
    </div>
  );
}

export default DashboardCompletedTasksList;
