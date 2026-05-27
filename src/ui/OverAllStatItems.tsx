import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import type { cardTab } from "../utilities/type";

type Props = {
  card: cardTab;
  loading: boolean;
};
function OverAllStatItems({ card, loading }: Props) {
  return (
    <div className="grow bg-white p-4 space-y-6 rounded-lg shadow-md dark:bg-slate-800 dark:text-white">
      <div className="flex justify-between items-center ">
        {card.icon}
        <p className="flex items-center font-medium text-gray-500 text-sm cursor-pointer dark:text-slate-500">
          View details
          <MdOutlineKeyboardArrowRight className="text-xl" />
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-500 dark:text-slate-300">{card.status}</p>
        <span className="text-2xl font-raleway font-medium ">
          {loading ? ".." : card.total}
        </span>
      </div>
    </div>
  );
}

export default OverAllStatItems;
