import { GoPlus } from "react-icons/go";
import Avatar from "../../assets/person-1.jpg";
import { PhoneInput } from "#components/reui/phone-input";

function AccoutSetting() {
  return (
    <div className="pl-3">
      <div className="flex justify-between items-center border-b border-b-gray-200 pb-4 dark:border-b-slate-800">
        <div>
          <h1 className="text-xl font-medium">Account Information</h1>
          <span className="text-sm text-gray-500">
            Update your photo and personal details here.
          </span>
        </div>
        <div className="space-x-3 ">
          <button
            type="button"
            className="text-sm px-6 py-1 border border-gray-500 rounded-2xl cursor-pointer hover:active:scale-102"
          >
            cancel
          </button>
          <button
            type="button"
            className="text-sm px-4 py-1.5 rounded-3xl bg-blue-700 text-white cursor-pointer hover:active:scale-102"
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="flex items-center justify-start gap-6 py-5 border-b border-b-gray-200 dark:border-b-slate-800">
        <img
          src={Avatar}
          alt="Avatar image"
          className="h-15 w-15 rounded-full"
        />
        <div className="text-sm space-y-1.5">
          <div className="flex items-center justify-start gap-2">
            <button className="flex items-center gap-1 px-4 py-1.5  bg-black text-white rounded-lg cursor-pointer dark:bg-slate-800 ">
              <GoPlus />
              Change Image
            </button>
            <button className="  px-4 py-1.5 bg-gray-200 border border-gray-300 rounded-lg cursor-pointer  dark:border-slate-700 dark:bg-slate-900">
              Remove Image
            </button>
          </div>
          <span className=" text-xs tracking-wide text-gray-500">
            We support PNGs, JPEGs and GIFs under 2MB
          </span>
        </div>
      </div>

      <form>
        <div className="flex justify-between items-center py-8 border-b border-b-gray-200 dark:border-b-slate-800 ">
          <h3 className="font-medium ">Name</h3>
          <div className="flex justify-center items-center gap-4 ">
            <div className="flex flex-col text-gray-600 gap-1.5">
              <label htmlFor="FirstName">First Name</label>
              <input type="text" className="input" />
            </div>
            <div className="flex flex-col text-gray-600 gap-1.5">
              <label htmlFor="LastName">Last Name</label>
              <input type="text" className="input" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center py-8  border-b border-b-gray-200 dark:border-b-slate-800">
          <h3 className="font-medium ">Email Address</h3>
          <div className=" text-gray-600 gap-1.5">
            <input type="email" className="input w-118" />
          </div>
        </div>
        <div className="flex justify-between items-center py-8 border-b border-b-gray-200 dark:border-b-slate-800 ">
          <h3 className="font-medium ">Phone Number</h3>
          <div className=" text-gray-600 gap-1.5">
            <PhoneInput
              placeholder="Enter phone number"
              defaultCountry="US"
              className="input w-118"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AccoutSetting;
