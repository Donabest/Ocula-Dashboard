import { SiRobotframework } from "react-icons/si";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GiEmptyHourglass } from "react-icons/gi";

function Welcome() {
  return (
    <div className="flex flex-col px-7 py-6 gap-3">
      <div>
        <span className="font-poppin text-gray-400">Thursday, 26th March</span>
        <h1 className=" font-medium  tracking-wide text-[30px] capitalize">
          Good Evening! Don,
        </h1>
        <div className="flex items-center gap-8 pt-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 bg-white px-4 py-1.5 rounded-full cursor-pointer">
              <SiRobotframework className="text-red-400" />
              Ask Ocula
            </div>

            <div className="flex items-center gap-1.5 font-medium bg-white px-4 py-1.5 rounded-full cursor-pointer">
              <IoMdCheckmarkCircleOutline className="text-green-400" />
              24{" "}
              <span className="font-normal text-gray-700">
                Project completed
              </span>
            </div>

            <div className="flex items-center gap-1.5 font-medium bg-white px-4 py-1.5 rounded-full cursor-pointer">
              <GiEmptyHourglass className="text-blue-800" />7
              <span className="font-normal text-gray-700">
                {" "}
                Projects in progress
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
