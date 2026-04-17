import { UpCommingTasks } from "../data/data-task";
import BoardTaskCard from "./BoardTaskCard";

function UpcommingTaskBoard() {
  return <BoardTaskCard Tasks={UpCommingTasks} />;
}

export default UpcommingTaskBoard;
