import { useTasks } from "../services/useTasks";
import BoardTaskCard from "./BoardTaskCard";
import Spinner from "./Spinner";

function UpcommingTaskBoard() {
  const { upCommingTasks, isLoading } = useTasks();
  if (isLoading) return <Spinner />;

  return <BoardTaskCard Tasks={upCommingTasks} />;
}

export default UpcommingTaskBoard;
