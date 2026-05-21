import type { tasktype } from "../utilities/type";
import { useState } from "react";
import ListTaskCardItem from "./ListTaskCardItem";
import AddNewTaskForm from "./AddNewTaskForm";

interface CardProps {
  tasks: tasktype[];
  Assignee: boolean;
}

function ListTaskCard({ tasks, Assignee }: CardProps) {
  const [OpenId, setOpenId] = useState<number | null>(null);
  const [isAddNewTask, setIsAddNewTask] = useState<boolean>();

  return (
    <section className="flex flex-col gap-4 pt-3 sm:gap-5 sm:pl-3">
      <div className="hidden lg:grid lg:grid-cols-3 text-gray-500 pb-2 border-b-2 border-b-gray-200 dark:text-gray-400 dark:border-b-slate-500">
        <h1 className="col-span-2">Name</h1>
        <div className="flex justify-between items-center">
          {Assignee && <span>Assignee</span>} <span>Priority</span>
          <span>Due Date</span>
        </div>
      </div>

      {tasks.map((task) => (
        <ListTaskCardItem
          task={task}
          key={task.id}
          AssignTo={Assignee}
          Open={OpenId}
          openMenu={setOpenId}
        />
      ))}

      {Assignee && (
        <button
          className="flex justify-start sm:pl-3 font-medium cursor-pointer"
          onClick={() => setIsAddNewTask(true)}
        >
          + Add Task
        </button>
      )}
      {isAddNewTask && (
        <AddNewTaskForm handleCancel={() => setIsAddNewTask(false)} />
      )}
    </section>
  );
}

export default ListTaskCard;
