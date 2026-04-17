import { TodoTasks } from "../data/data-task";
import BoardTaskCard from "./BoardTaskCard";

function TodoTaskBoard() {
  return <BoardTaskCard Tasks={TodoTasks} />;
}

export default TodoTaskBoard;
