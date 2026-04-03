import Assignee from "../assets/person-1.jpg";
import BoardTaskCard from "./BoardTaskCard";

const UpcommingTask = [
  {
    priority: "Med",
    title: "design Trip Structure",
    desc: "Design Itinerary nodel ad UI",
    Assignee,
  },
  {
    priority: "High",
    title: "Review Navigation",
    desc: "check smooth navigation,loading,display and so on",
    Assignee,
  },
];

function UpcommingTaskBoard() {
  return <BoardTaskCard Tasks={UpcommingTask} />;
}

export default UpcommingTaskBoard;
