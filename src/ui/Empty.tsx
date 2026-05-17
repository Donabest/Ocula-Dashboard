import { useMoveBack } from "#hooks/useMoveBack";
import { HiOutlineFingerPrint } from "react-icons/hi";

function Empty({ resourseName }: { resourseName: string }) {
  const back = useMoveBack();
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-2">
      <h1 className="text-[15rem] font-raleway font-medium">404</h1>
      <h2 className="text-lg">{resourseName} not found.</h2>
      <p className="mt-1.5 dark:text-gray-200">
        This {resourseName} may have been deleted or no longer exists.
      </p>

      <span
        className="flex flex-col items-center  mt-2 cursor-pointer "
        onClick={back}
      >
        <HiOutlineFingerPrint size={40} />
        Go Back to Dashboard
      </span>
    </div>
  );
}

export default Empty;
