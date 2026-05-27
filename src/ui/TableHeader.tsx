import { useSearchParams } from "react-router-dom";
import { useActiveTasks } from "../hooks/useActiveTasks";
import type React from "react";

function TableHeader() {
  const { tasks, isLoading } = useActiveTasks();

  const [searchParamas, setSearchParams] = useSearchParams();
  function handleSortedUrl(e: React.ChangeEvent<HTMLSelectElement>) {
    searchParamas.set("Sorted", e.currentTarget.value);
    setSearchParams(searchParamas);
  }

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
          <label htmlFor="sort">Sort :</label>
          <select
            name="sort"
            id="sort"
            className="bg-gray-100 px-4 py-1 border-0 outline-0 rounded-lg dark:bg-slate-700"
            onChange={handleSortedUrl}
          >
            <option value="ByCompleted">Completed First</option>
            <option value="ByInprogress">InProgress First</option>
            <option value="ByTodo">Todo First</option>
            <option value="ByStartDate"> start Date</option>
            <option value="ByDueDate"> Due Date</option>
          </select>
        </div>
      </div>

      <div className="hidden min-w-170 grid-cols-[4fr_2fr_2fr] text-gray-400 font-medium mt-8 w-full lg:grid">
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
