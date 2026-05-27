import { toast } from "react-hot-toast";
import { GoPlus } from "react-icons/go";
import Avatar from "../../assets/default-avatar.jpg";
import { PhoneInput } from "../../components/reui/phone-input";
import { useUser } from "../Authentication/useUser";
import { useRef, useState } from "react";
import { useUpdateUser } from "../Authentication/useUpdateUser";
import { useRemoveAvatar } from "./useRemoveAvatar";

function AccoutSetting() {
  const { user } = useUser();
  const { updateUser } = useUpdateUser();
  const { removeAvatar, isPending } = useRemoveAvatar();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>();

  const { firstName: first, lastName: last } = user?.user_metadata ?? {};

  const [firstName, setFirstName] = useState<string>(first);
  const [lastName, setLastName] = useState<string>(last);
  const [avatar, setAvatar] = useState<File | null>(null);

  function handleSubmit() {
    if (!firstName && !lastName) return;
    updateUser(
      { firstName, lastName, avatar },
      {
        onSuccess: () => {
          toast.success("Changes Saved");
        },
      },
    );
  }
  return (
    <div className="pl-0 sm:pl-3">
      <div className="flex flex-col border-b border-b-gray-200 pb-4 dark:border-b-slate-800 sm:justify-between sm:items-center sm:flex-row">
        <div>
          <h1 className="text-xl font-medium">Account Information</h1>
          <span className="text-sm text-gray-500">
            Update your photo and personal details here.
          </span>
        </div>
        <div className="flex justify-end space-x-1 pt-2 sm:space-x-3 sm:pt-0">
          <button
            type="button"
            className="text-sm px-2 py-1 border border-gray-500 rounded-2xl cursor-pointer hover:active:scale-102 sm:px-6"
            onClick={() => {
              setFirstName(first);
              setLastName(lastName);
              setAvatar(user?.user_metadata.custom_avatar);
            }}
          >
            cancel
          </button>

          <button
            type="button"
            className="text-sm px-2 py-1.5 rounded-3xl bg-blue-700 text-white cursor-pointer hover:active:scale-102 sm:px-4"
            onClick={handleSubmit}
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="flex items-center justify-start gap-6 py-5 border-b border-b-gray-200 dark:border-b-slate-800">
        <img
          src={
            preview ??
            (user?.user_metadata?.has_custom_avatar
              ? user?.user_metadata?.custom_avatar
              : user?.user_metadata?.picture) ??
            Avatar
          }
          alt="Avatar image"
          className="h-15 w-15 rounded-full"
        />
        <div className="text-sm space-y-1.5">
          <div className="flex items-center justify-start gap-2">
            <button
              className="flex items-center gap-1 px-4 py-1.5  bg-black text-white rounded-lg cursor-pointer dark:bg-slate-800"
              onClick={() => fileInputRef.current?.click()}
            >
              <GoPlus />
              Change Image
            </button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/png, image/jpeg, image/gif"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setPreview(URL.createObjectURL(file));
                  setAvatar(file);
                }
              }}
            />

            <button
              className="  px-4 py-1.5 bg-gray-200 border border-gray-300 rounded-lg cursor-pointer  dark:border-slate-700 dark:bg-slate-900"
              onClick={() => {
                setPreview(null);
                removeAvatar();
              }}
              disabled={isPending}
            >
              Remove Image
            </button>
          </div>
          <span className=" text-xs tracking-wide text-gray-500">
            We support PNGs, JPEGs and GIFs under 2MB
          </span>
        </div>
      </div>

      <form>
        <div className="Account_Form_Group ">
          <h3 className="font-medium ">Name</h3>
          <div className="flex justify-center items-center gap-4 ">
            <div className="flex flex-col text-gray-600 gap-1.5">
              <label htmlFor="FirstName">First Name</label>
              <input
                type="text"
                className="input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex flex-col text-gray-600 gap-1.5">
              <label htmlFor="LastName">Last Name</label>
              <input
                type="text"
                className="input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="Account_Form_Group">
          <h3 className="font-medium ">Email Address</h3>
          <div className=" text-gray-600 gap-1.5">
            <input
              type="email"
              className="input w-118 bg-gray-200 dark:bg-slate-800 cursor-not-allowed"
              value={user?.email}
              disabled
            />
          </div>
        </div>
        <div className="Account_Form_Group ">
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
