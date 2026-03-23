import ProfileImage from "../assets/person-1.jpg";

function User() {
  return (
    <div className="flex justify-start items-center w-full  mx-auto gap-2 px-2 py-1  border border-gray-300 rounded-lg ">
      <img
        src={ProfileImage}
        alt={ProfileImage}
        className="h-8 w-8 rounded-full"
      />
      <div className="flex flex-col justify-center  items-center text-sm ">
        <p>Hi, Don</p>
        <div className="flex items-center gap-1.5">
          <span className=" bg-green-300 p-1 rounded-full"></span>
          <span className=" text-gray-400">online </span>
        </div>
        {/* <span>Online</span> */}
      </div>
    </div>
  );
}

export default User;
