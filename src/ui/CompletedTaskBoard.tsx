import BoardTaskCard from "./BoardTaskCard";
import { CompletedTasks } from "../data/data-task";

function CompletedTaskBoard() {
  return <BoardTaskCard Tasks={CompletedTasks} />;
}

export default CompletedTaskBoard;
