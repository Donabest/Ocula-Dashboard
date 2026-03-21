import ProfileImage from "../assets/person-1.jpg";

function Sidebar() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="flex justify-center items-center gap-2 px-6 py-1 border">
          <img src={ProfileImage} alt="" className="h-8 w-8 rounded-full" />
          <div className="flex flex-col justify-center  items-center -space-y-0.8">
            <p className="text-sm">Hi, Don</p>
            <span className="text-sm text-gray-400">online </span>
            {/* <span>Online</span> */}
          </div>
        </div>

        <ul>
          <li>Dashboard</li>
          <li>Ocula Ai</li>
          <li>My Task</li>
          <li>Calender</li>
          <li>Report & Analytics</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
