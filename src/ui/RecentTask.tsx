import { useActiveTasks } from "../hooks/useActiveTasks";
import RecentTasksList from "./RecentTasksList";
import Spinner from "./Spinner";

function RecentTask() {
  const { tasks, isLoading } = useActiveTasks();

  const RecentTasks = [...tasks].slice(-2);

  return (
    <div className=" bg-white p-4 rounded-lg dark:bg-slate-800 dark:text-slate-100">
      <div className="flex items-center justify-between font-poppin font-medium ">
        Recents Tasks
      </div>

      <div className="flex flex-col items-stretch gap-4 mt-3 sm:mx-2">
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
