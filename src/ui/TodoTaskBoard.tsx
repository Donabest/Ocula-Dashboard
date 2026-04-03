import Assignee from "../assets/person-1.jpg";
import BoardTaskCard from "./BoardTaskCard";

const TodoTask = [
  {
    priority: "Low",
    title: "Review Navigation",
    desc: "check smooth navigation,loading,display and so on",
    Assignee,
  },
  {
    priority: "High",
    title: "Trip Creation Flow",
    desc: "Outline step to create a new trip",
    Assignee,
  },

  {
    priority: "Med",
    title: "design Trip Structure",
    desc: "Design Itinerary nodel ad UI",
    Assignee,
  },
];

function TodoTaskBoard() {
  return <BoardTaskCard Tasks={TodoTask} />;
}

export default TodoTaskBoard;
