import { useTasks } from "../services/useTasks";
import BoardTaskCard from "./BoardTaskCard";

function InprogressTaskBoard() {
  const { inProgressTasks } = useTasks();
  return <BoardTaskCard Tasks={inProgressTasks} />;
}

export default InprogressTaskBoard;
