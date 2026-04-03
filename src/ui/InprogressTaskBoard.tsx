import Assignee from "../assets/person-1.jpg";
import BoardTaskCard from "./BoardTaskCard";

const InprogressTask = [
  {
    priority: "High",
    title: "Trip Creation Flow",
    desc: "Outline step to create a new trip",
    Assignee,
  },
  {
    priority: "Low",
    title: "Plan Requirement",
    desc: "determine which feature work with ahyjukiugyqtfagvbhnjm",
    Assignee,
  },
  {
    priority: "Med",
    title: "design Trip Structure",
    desc: "Design Itinerary nodel ad UI",
    Assignee,
  },
  {
    priority: "Low",
    title: "Review Navigation",
    desc: "check smooth navigation,loading,display and so on",
    Assignee,
  },
];

function InprogressTaskBoard() {
  return <BoardTaskCard Tasks={InprogressTask} />;
}

export default InprogressTaskBoard;
