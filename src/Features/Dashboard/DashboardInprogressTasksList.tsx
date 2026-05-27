import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import ListTaskCard from "../../ui/ListTaskCard";
import { useTasks } from "../../services/useTasks";

type Props = {
  active: string | null;
  handler: (tab: string) => void;
};

function DashboardInprogressTasksList({ active, handler }: Props) {
  const { inProgressTasks } = useTasks();
  const Inprogress = [...inProgressTasks].slice(0, 3);

  return (
    <div>
      <div className="flex items-center gap-3 pl-3 ">
        <span onClick={() => handler("Inprogress")}>
          {active === "Inprogress" ? <FaChevronUp /> : <FaChevronDown />}
        </span>
        <p className="bg-green-300 text-black text-sm px-3 py-1 rounded-lg uppercase dark:bg-green-700 dark:text-white">
          Inprogress
        </p>
        <span className="font-poppin text-gray-500">
          . {Inprogress.length} tasks
        </span>
      </div>
      {active === "Inprogress" && (
        <ListTaskCard tasks={Inprogress} Assignee={false} />
      )}
    </div>
  );
}

export default DashboardInprogressTasksList;
