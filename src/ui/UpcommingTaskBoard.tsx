import { isUpComming } from "../data/data-task";
import BoardTaskCard from "./BoardTaskCard";

function UpcommingTaskBoard() {
  return <BoardTaskCard Tasks={isUpComming} />;
}

export default UpcommingTaskBoard;
