import { AiOutlineEdit } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";

import UserImg from "../assets/person-1.jpg";

function UserQuestion() {
  return (
    <div className="flex items-start gap-3">
      <img src={UserImg} alt={UserImg} className="h-8 w-8 shrink-0 rounded-full" />
      <div className="min-w-0 space-y-4">
        <p className="text-wrap break-words text-gray-700 text-[15px] tracking-normal font-medium font-poppin dark:text-slate-100 sm:text-[17px]">
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
