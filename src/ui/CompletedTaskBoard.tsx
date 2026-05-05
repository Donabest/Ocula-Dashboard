import BoardTaskCard from "./BoardTaskCard";
import { useTasks } from "../services/useTasks";

function CompletedTaskBoard() {
  const { completedTasks } = useTasks();
  return <BoardTaskCard Tasks={completedTasks} />;
}

export default CompletedTaskBoard;
