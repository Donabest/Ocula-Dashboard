import { Link } from "react-router-dom";

function ScheduleNow() {
  return (
    <Link
      to="/Calender"
      className="text-sm bg-blue-700 text-white px-6 py-1.5 rounded-lg cursor-pointer transition-all  hover:bg-blue-800"
    >
      Schedule Task Now
    </Link>
  );
}

export default ScheduleNow;
