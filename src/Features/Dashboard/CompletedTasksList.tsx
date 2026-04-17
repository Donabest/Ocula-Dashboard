import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { CompletedTasks } from "../../data/data-task";
import ListTaskCard from "../../ui/ListTaskCard";

type Props = {
  active: string | null;
  handler: (tab: string) => void;
};
function CompletedTasksList({ active, handler }: Props) {
  const Completed = [...CompletedTasks].slice(0, 3);

  return (
    <div>
      <div className="flex items-center gap-3 pl-3">
        <span onClick={() => handler("Completed")}>
          {active === "Completed" ? <FaChevronUp /> : <FaChevronDown />}
        </span>
        <p className="bg-blue-200 text-sm text-center font-poppin px-3 py-1 rounded-lg uppercase dark:bg-yellow-900 dark:text-white">
          Completed
        </p>
        <span className="font-medium text-gray-500 dark:text-slate-400">
          . {CompletedTasks.length} tasks
        </span>
      </div>
      {active === "Completed" && (
        <ListTaskCard tasks={Completed} Assignee={false} />
      )}
    </div>
  );
}

export default CompletedTasksList;
