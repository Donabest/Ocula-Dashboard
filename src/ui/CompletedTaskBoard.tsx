import BoardTaskCard from "./BoardTaskCard";
import Assignee from "../assets/person-1.jpg";

const CompletedTask = [
  {
    priority: "High",
    title: "Trip Creation Flow",
    desc: "Outline step to create a new trip",
    Assignee,
  },
];

function CompletedTaskBoard() {
  return <BoardTaskCard Tasks={CompletedTask} />;
}

export default CompletedTaskBoard;
