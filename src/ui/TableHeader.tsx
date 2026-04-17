import { Tasks } from "../data/data-task";

function TableHeader() {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-medium text-xl">
          Task list
          <span className="text-slate-500 font-poppin font-normal text-[16px] dark:text-slate-400">
            . {Tasks.length}
          </span>
        </h1>

        <div className="flex items-center gap-3">
          <label htmlFor="filter">Filter :</label>
          <select
            name="filter"
            id="filter"
            className="bg-gray-100 px-4 py-1 border-0 outline-0 rounded-lg dark:bg-slate-700"
          >
            <option value="By start Date">Start Date</option>
            <option value="By End Date">End Date</option>
            <option value="By Priority">Priority</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-[4fr_2fr_2fr] text-gray-400 font-medium mt-8 w-full">
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
