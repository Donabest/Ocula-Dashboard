import { PiSpinnerBold } from "react-icons/pi";

function Spinner() {
  return (
    <div className="flex items-center justify-center ">
      <PiSpinnerBold
        size={28}
        className="animate-spin [animation-duration:1.6s]"
      />
    </div>
  );
}

export default Spinner;
