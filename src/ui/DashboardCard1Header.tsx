import { AiOutlineExpandAlt } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";

function DashboardCard1Header() {
  return (
    <div className="flex justify-between ">
      <div className="flex items-center gap-2 font-poppin font-medium">
        <CiBoxList />
        <BiTask className="text-blue-800/80 dark:text-purple-500 " />
        <p>My Task</p>
      </div>

      <div className="flex items-center font-medium gap-3 ">
        <span className="cursor-pointer">+</span>
        <AiOutlineExpandAlt className="cursor-pointer" />
        <BsThreeDots className="cursor-pointer" />
      </div>
    </div>
  );
}

export default DashboardCard1Header;
