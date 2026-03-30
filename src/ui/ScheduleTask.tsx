import { BsThreeDots } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import User from "../assets/person-1.jpg";

interface schedule {
  title: string;
  priority: string;
  meet: string;
  time: string;
}
const schedule: schedule[] = [
  {
    title: "Sprinting Planning",
    priority: "Starting soon",
    meet: "Zoom meeting",
    time: "05:00 PM - 06:00 PM",
  },
  {
    title: "Design Review",
    priority: "Schedule",
    meet: "Google meeting",
    time: "01:00 PM - 02:00 PM",
  },
];

function ScheduleTask() {
  return (
    <div className="flex flex-col bg-white  p-6 space-y-4">
      <div className="flex items-center justify-between font-poppin font-medium ">
        Schedule
        <BsThreeDots className="cursor-pointer" />
      </div>

      {schedule.map((schTask) => (
        <div className="bg-blue-100 p-5 space-y-3 rounded-xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h1 className=" text-sm font-medium">{schTask.title}</h1>
              <span
                className={`text-sm ${schTask.priority === "Starting soon" ? "text-yellow-600 bg-yellow-100" : "text-green-600 bg-green-100"} px-2 py-1.5 rounded-lg`}
              >
                {schTask.priority}
              </span>
            </div>
            <p className="text-gray-500">Start at</p>
          </div>
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-medium bg-white/80 px-4 py-1 rounded-lg">
              {schTask.meet}
            </h4>
            <p className="text-sm"> {schTask.time}</p>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-gray-300 ">
            <img src={User} alt={User} className="w-7 h-7 rounded-full" />
            <p className="flex  items-center gap-2 cursor-pointer">
              View Detail
              <MdOutlineKeyboardArrowRight />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ScheduleTask;
