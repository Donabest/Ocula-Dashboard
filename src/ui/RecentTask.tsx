import { useTasks } from "../services/useTasks";
import type { tasktype } from "../utilities/type";
import RecentTasksList from "./RecentTasksList";
import Spinner from "./Spinner";

function RecentTask({ tasks: propTasks }: { tasks?: tasktype[] }) {
  const { tasks, isLoading } = useTasks();

  const RecentTasks = [...(propTasks ?? tasks)].slice(-2);

  return (
    <div className=" bg-white p-4 rounded-lg  dark:bg-slate-800 dark:text-slate-100">
      <div className="flex items-center justify-between font-poppin font-medium ">
        Recents Tasks
      </div>

      <div className="flex flex-col items-center gap-4 mt-3 mx-2">
        {isLoading ? (
          <Spinner />
        ) : (
          RecentTasks.map((recent, index) => (
            <RecentTasksList task={recent} key={index} />
          ))
        )}
      </div>
    </div>
  );
}

export default RecentTask;
