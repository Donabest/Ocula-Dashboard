import { useState } from "react";
import type { tasktype } from "../utilities/type";
import BoardTaskCardItem from "./BoardTaskCardItem";
import AddNewTaskForm from "./AddNewTaskForm";

function BoardTaskCard({ Tasks }: { Tasks: tasktype[] }) {
  const [isAddNewTask, setIsAddNewTask] = useState<boolean>();
  return (
    <>
      <div className=" space-y-4 bg-slate-200/60 p-3 h-fit rounded-lg dark:bg-slate-800">
        {Tasks.map((task, index) => (
          <BoardTaskCardItem task={task} key={index} />
        ))}
        <button
          className="flex justify-start text-start pl-3 font-medium cursor-pointer dark:text-gray-200 "
          onClick={() => setIsAddNewTask(true)}
        >
          + Add Task
        </button>
      </div>
      {isAddNewTask && (
        <AddNewTaskForm handleCancel={() => setIsAddNewTask(false)} />
      )}
    </>
  );
}

export default BoardTaskCard;
