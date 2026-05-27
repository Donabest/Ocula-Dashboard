import { useNavigate } from "react-router-dom";
import NotFoundSvg from "../assets/404_page.svg";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      <img
        src={NotFoundSvg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover "
      />

      <div className="absolute  bottom-20  z-10 flex flex-col items-center text-center px-6 sm:bottom-10 lg:bottom-5 ">
        <h2 className="text-4xl font-bold mt-4 text-black">Page not found</h2>
        <p className="text-gray-500 pt-2">
          Sorry, We can't find the page you are looking for
        </p>
        <button
          onClick={() => navigate("/Dashboard")}
          className="mt-8 px-6 py-2.5 bg-black text-white rounded-lg cursor-pointer hover:opacity-80 transition"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
