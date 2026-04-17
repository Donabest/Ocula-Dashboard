import { InprogressTasks } from "../data/data-task";
import BoardTaskCard from "./BoardTaskCard";

function InprogressTaskBoard() {
  return <BoardTaskCard Tasks={InprogressTasks} />;
}

export default InprogressTaskBoard;
