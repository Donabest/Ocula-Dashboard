import ProfileImage from "../assets/person-1.jpg";
import type { JSX } from "react";

import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { WiStars } from "react-icons/wi";
import { CiSettings } from "react-icons/ci";

type SidebarList = {
  icon: JSX.Element;
  list: string;
};

const SidebarList: SidebarList[] = [
  {
    icon: <MdOutlineDashboardCustomize />,
    list: "Dashboard",
  },
  {
    icon: <WiStars />,
    list: "Ocula Ai",
  },
  {
    icon: <BiTask />,
    list: "My Task",
  },
  {
    icon: <SlCalender />,
    list: "Calendar",
  },
  {
    icon: <LuChartNoAxesCombined />,
    list: "Analytics",
  },
];

const Projects: Array<string> = [
  "Project Lunch",
  "Team BrainStorm",
  "Branding Lunch",
];

function Sidebar() {
  return (
    <div className=" pb-4 px-10 pt-8">
      <div className="flex flex-col items-center justify-center ">
        <div className="flex justify-start items-center w-full  mx-auto gap-2 px-2 py-1  border border-gray-300 rounded-lg ">
          <img src={ProfileImage} alt="" className="h-8 w-8 rounded-full" />
          <div className="flex flex-col justify-center  items-center text-sm ">
            <p>Hi, Don</p>
            <span className=" text-gray-400">online </span>
            {/* <span>Online</span> */}
          </div>
        </div>

        <ul className="w-full space-y-2 mt-10">
          {SidebarList.map((item) => (
            <li
              className="flex items-center justify-start gap-3 px-3 py-2 cursor-pointer rounded-lg hover:bg-blue-100/30  hover:text-blue-800"
              key={item.list}
            >
              <span>{item.icon}</span>
              <span className="text-black font-poppin">{item.list}</span>
            </li>
          ))}
        </ul>

        <div className="w-full mt-5 border-b border-gray-200"></div>

        <div className="w-full mt-5">
          <div className="flex justify-between items-center">
            <h1>My Projects</h1>
            <button className="px-3 py-1 bg-violet-200 rounded-4xl cursor-pointer">
              +Add
            </button>
          </div>

          <ul className="mt-5 space-y-3">
            {Projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>

        <div className="mt-15">
          <h1 className="flex justify-start items-center gap-3">
            <CiSettings />
            Settings
          </h1>
          <div className="mt-2 p-2 bg-indigo-700 rounded-2xl text-white w-full ">
            <h1>Ocula,</h1>
            <p>
              New member will gain access to public Spaces,Docs and Dashboard
            </p>
            <button>Invite People Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
