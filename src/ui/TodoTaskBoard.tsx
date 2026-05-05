import { useTasks } from "../services/useTasks";
import BoardTaskCard from "./BoardTaskCard";

function TodoTaskBoard() {
  const { todoTasks } = useTasks();
  return <BoardTaskCard Tasks={todoTasks} />;
}

export default TodoTaskBoard;
