import { useState } from "react";
import PasswordInput from "../../ui/PasswordInput";
import SettingHeader from "../../ui/SettingHeader";
import { toast } from "react-hot-toast";
import { useUpdatePassword } from "./useUpdatePassword";
import { cn } from "#lib/utils";

function SecuritySetting() {
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");

  const { updatePassword, isPending } = useUpdatePassword();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCurrentPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (confirmPassword !== newPassword) {
      toast.error("password need to match");
      return;
    }

    updatePassword(
      { currentPassword, newPassword },
      {
        onSuccess: () => {
          setConfirmPassword(" ");
          setCurrentPassword(" ");
          setNewPassword(" ");
        },
      },
    );
  }

  return (
    <div>
      <SettingHeader
        title="Password"
        description="The password will additionally protect from hacking"
      />
      <form onSubmit={handleSubmit}>
        <div className="border-t py-5">
          <PasswordInput
            className={cn(
              isPending && "bg-gray-200 dark:bg-slate-700 cursor-not-allowed",
            )}
            label="Current Password"
            text="Current Password"
            onChange={(e) => handleChange(e)}
            value={currentPassword}
          />
        </div>
        <div className="border-t py-5">
          <PasswordInput
            label="New Password"
            className={cn(
              isPending && "bg-gray-200 dark:bg-slate-700 cursor-not-allowed",
            )}
            value={newPassword}
            text="New Password"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="border-t py-5">
          <PasswordInput
            className={cn(
              isPending && "bg-gray-200 dark:bg-slate-700 cursor-not-allowed",
            )}
            value={confirmPassword}
            label="Confirm Password"
            text="Confirm Password"
            disabled={isPending}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="space-x-3">
          <button
            type="reset"
            className="border px-6 py-2 rounded-lg cursor-pointer active:scale-101"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded-lg cursor-pointer active:scale-101"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default SecuritySetting;
