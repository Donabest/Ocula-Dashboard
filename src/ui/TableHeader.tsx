import { useActiveTasks } from "../hooks/useActiveTasks";

function TableHeader() {
  const { tasks, isLoading } = useActiveTasks();
  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="font-medium text-xl">
          Task list
          <span className="text-slate-500 font-poppin font-normal text-[16px] dark:text-slate-400">
            . {isLoading ? "..." : tasks.length}
          </span>
        </h1>

        <div className="flex flex-wrap items-center gap-3">
          <label htmlFor="filter">Filter :</label>
          <select
            name="filter"
            id="filter"
            className="bg-gray-100 px-4 py-1 border-0 outline-0 rounded-lg dark:bg-slate-700"
          >
            <option value="By Completed">Completed First</option>
            <option value="By InProgress">InProgress First</option>
            <option value="By Todo">Todo First</option>
            <option value="By StartDate">By start Date</option>
            <option value="By EndDate">By End Date</option>
          </select>
        </div>
      </div>

      <div className="hidden min-w-[680px] grid-cols-[4fr_2fr_2fr] text-gray-400 font-medium mt-8 w-full lg:grid">
        <p>Name</p>
        <div className="flex items-center text-center gap-8 ">
          <span>Start Date</span>
          <span>Due Date</span>
        </div>
        <div className="flex text-right items-center gap-8 col-end-6">
          <span>Assignee</span>
          <span>Priority</span>
        </div>
      </div>
    </div>
  );
}

export default TableHeader;
