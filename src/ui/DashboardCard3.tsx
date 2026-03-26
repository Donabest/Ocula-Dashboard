import { BiSolidShoppingBags } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa6";
import { FaRProject } from "react-icons/fa6";

type Projects = {
  projectContent: string;
  group: string;
};

const Projects = [
  {
    projectContent: "Project Lunch",
    group: "6 tasks",
  },
  {
    projectContent: "Team BrainStorm",

    group: "3 tasks",
  },
  {
    projectContent: "Branding Lunch",
    group: "4 tasks",
  },
];
function DashboardCard3() {
  return (
    <div className="bg-white p-7 rounded-2xl">
      <div className="flex items-center gap-4">
        <h1 className="flex items-center font-medium gap-1.5">
          <BiSolidShoppingBags className="text-blue-700/90" />
          Projects
        </h1>
        <p className="flex items-center text-gray-500 gap-1.5">
          Recents <FaChevronDown className="cursor-pointer" />
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 font-poppin mt-6 ">
        <div className="flex items-center gap-2  cursor-pointer">
          <span className="border-2 border-gray-300 border-dashed text-center text-xl px-4 py-2 rounded-lg ">
            +
          </span>
          <h1>Create new project</h1>
        </div>
        {Projects.map((project, index) => (
          <div className="flex items-center gap-2" key={index}>
            <span className=" bg-green-200 text-black px-4 py-3 rounded-lg">
              <FaRProject />
            </span>
            <h1 className="flex flex-col text-gray-800">
              {project.projectContent}
              <span className=" font-montserrat text-xs text-gray-500">
                {project.group}
              </span>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardCard3;
