import { useState } from "react";
import { RiArrowRightLongLine } from "react-icons/ri";

function AddEvent() {
  const [onHover, setOnHover] = useState<boolean>(true);

  return (
    <>
      {onHover && (
        <div className="bg-white/20 backdrop-blur-lg w-80 p-3 rounded-lg">
          <div className="flex justify-between items-center pt-2">
            <h3 className="text-[17px] font-raleway font-medium">New event</h3>
            <span className="cursor-pointer">x</span>
          </div>

          <form className="space-y-4.5 py-8">
            <input
              type="text"
              placeholder="Event title"
              className="w-full px-2 py-1 rounded-xl border border-gray-400 outline-0"
            />
            <div>
              <input
                type="date"
                className="w-full px-2 py-1  rounded-xl border border-gray-400 outline-0"
              />
            </div>
            <div className="flex justify-between items-center">
              <input
                type="time"
                value="12:00"
                className=" px-2 py-1 rounded-xl border border-gray-400 outline-0"
              />
              <span className="text-xl">
                <RiArrowRightLongLine />
              </span>
              <input
                type="time"
                value="01:00"
                className="px-2 py-1 rounded-xl border border-gray-400 outline-0"
              />
            </div>
            <div>
              <textarea
                name="description"
                id="description"
                className="w-full px-2 py-1 rounded-xl border border-gray-400 outline-0"
                placeholder="Description"
              ></textarea>
            </div>
          </form>
          <div className="flex justify-end gap-2">
            <button className="bg-transparent border border-gray-300 rounded-lg px-4 py-2 cursor-pointer active:scale-101">
              Cancel
            </button>
            <button className="bg-blue-700 text-white rounded-lg px-6 py-2 cursor-pointer active:scale-101">
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AddEvent;
