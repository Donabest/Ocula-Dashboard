import type { tasktype } from "../utilities/type";
import BoardTaskCardItem from "./BoardTaskCardItem";

function BoardTaskCard({ Tasks }: { Tasks: tasktype[] }) {
  return (
    <>
      <div className=" space-y-4 bg-white/90 p-3 h-fit rounded-lg dark:bg-slate-800">
        {Tasks.map((task, index) => (
          <BoardTaskCardItem task={task} key={index} />
        ))}
      </div>
    </>
  );
}

export default BoardTaskCard;
