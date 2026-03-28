import { AiOutlineEdit } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";

import UserImg from "../assets/person-1.jpg";

function UserQuestion() {
  return (
    <div className="flex items-start gap-3">
      <img src={UserImg} alt={UserImg} className="h-8 w-8 rounded-full" />
      <div className="space-y-4">
        <p className="text-wrap text-gray-700 text-[17px] tracking-normal font-medium font-poppin dark:text-slate-100">
          "Create an Agenda for the meeting 'Project kickoff' with the following
          points:1.Project Overview,2.Role and responsibilities,3.Timeline
          Review,4.Q&A."Create notes with this agenda and set a reminder to read
          this in !hour"
        </p>
        <div className="flex items-center gap-3">
          <AiOutlineEdit className="cursor-pointer" />
          <FiCopy className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default UserQuestion;
