import PasswordInput from "../../ui/PasswordInput";
import SettingHeader from "../../ui/SettingHeader";

function SecuritySetting() {
  return (
    <div>
      <SettingHeader
        title="Password"
        description="The password will additionally protect from hacking"
      />
      <form>
        <div className="border-t py-5">
          <PasswordInput label="Current Password" text="Current Password" />
        </div>
        <div className="border-t py-5">
          <PasswordInput label="New Password" text="New Password" />
        </div>
        <div className="border-t py-5">
          <PasswordInput label="Confirm Password" text="Confirm Password" />
        </div>

        <div className="space-x-3">
          <button className="border px-6 py-2 rounded-lg cursor-pointer active:scale-101">
            Cancel
          </button>
          <button className="bg-blue-700 text-white px-6 py-2 rounded-lg cursor-pointer active:scale-101">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default SecuritySetting;
