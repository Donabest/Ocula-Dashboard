import { LogOut } from "lucide-react";
import SettingHeader from "../../ui/SettingHeader";

function DangerZone() {
  return (
    <div>
      <SettingHeader
        title="Danger Zone"
        description="Action in this section are permanent and cannot be undo."
      />

      <div className="notify-pref">
        <SettingHeader
          title="Delete Data"
          description="permanently delete all data."
        />
        <button className="px-3 py-2 text-white text-sm bg-red-600 rounded-lg cursor-pointer active:scale-101">
          Delete All Data
        </button>
      </div>
      <div className="notify-pref">
        <SettingHeader
          title="Delete Account"
          description="permanently delete your account and all data."
        />
        <button className="px-3 py-2 text-white text-sm bg-red-600 rounded-lg cursor-pointer active:scale-101">
          Delete Account
        </button>
      </div>
      <div className="notify-pref">
        <SettingHeader
          title="Sign Out"
          description="Sign Out of your account on this device."
        />
        <button className="flex justify-center items-center gap-1.5 px-3 py-2 text-sm border rounded-lg cursor-pointer active:scale-101">
          <LogOut size={15} />
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default DangerZone;
