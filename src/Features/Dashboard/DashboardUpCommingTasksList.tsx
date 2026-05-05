import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import ListTaskCard from "../../ui/ListTaskCard";
import { useTasks } from "../../services/useTasks";

type Props = {
  active: string | null;
  handler: (tab: string) => void;
};
function DashboardUpCommingTasksList({ active, handler }: Props) {
  const { upCommingTasks } = useTasks();
  const upComming = [...upCommingTasks].slice(-3);
  return (
    <div>
      <div className="flex items-center gap-3 pl-3">
        <span onClick={() => handler("Upcomming")}>
          {active === "Upcomming" ? <FaChevronUp /> : <FaChevronDown />}
        </span>{" "}
        <p className="bg-yellow-200 text-sm text-center font-poppin px-3 py-1 rounded-lg uppercase dark:bg-yellow-800 dark:text-white">
          Up Comming
        </p>
        <span className="font-medium text-gray-500 dark:text-slate-500">
          . {upCommingTasks.length} tasks
        </span>
      </div>

      {active === "Upcomming" && (
        <ListTaskCard tasks={upComming} Assignee={false} />
      )}
    </div>
  );
}

export default DashboardUpCommingTasksList;
