import Assignee from "../assets/person-1.jpg";
import ListTaskCard from "./ListTaskCard";

const InprogessTask = [
  {
    title: "One-on-One-Meeting",
    priority: "High",
    day: "feb 2,2027",
    Assignee,
  },
  {
    title: "Send a summary email to stakeholders",
    priority: "Low",
    day: "jan 20,2027",
    Assignee,
  },
];

function InprogressTaskList() {
  return (
    <div className="space-y-4 bg-white p-6 mt-6 rounded-lg  cursor-pointer dark:bg-slate-800 dark:text-white">
      <ListTaskCard Tasks={InprogessTask} status="Inprogress" Assignee={true} />
    </div>
  );
}

export default InprogressTaskList;
