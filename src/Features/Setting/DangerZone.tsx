import { LogOut } from "lucide-react";
import SettingHeader from "../../ui/SettingHeader";
import { useLogOut } from "../Authentication/useLogOut";
import Spinner from "../../ui/Spinner";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useTasks } from "../../services/useTasks";
import { toast } from "react-hot-toast";
import { useDeleteAllData } from "./useDeleteAllData";
import { useScheduleTask } from "../Calender/useScheduleTask";
import { useProjects } from "../Project/useProject";
import { useDeleteAccount } from "./useDeleteAccount";

function DangerZone() {
  const { logOut, isLogingOut } = useLogOut();
  const [isDeleteAccount, setIsDeleteAccount] = useState<boolean>(false);
  const [isDeleteData, setIsDeleteData] = useState<boolean>(false);
  const { tasks } = useTasks();
  const { schedules } = useScheduleTask();
  const { projects } = useProjects();
  const { deleteAllData, isDeletingAll } = useDeleteAllData();
  const { deleteAccount, isPending: isAccountDeleting } = useDeleteAccount();

  function handleDeleteData() {
    if (!tasks.length || !schedules.length || !projects.length) {
      toast.error("No data to delete");
      setIsDeleteAccount(false);
      return;
    }
    deleteAllData();
    setIsDeleteData(false);
  }

  function handleDeleteAccount() {
    deleteAccount();
    setIsDeleteAccount(false);
  }

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
        <button
          className="px-3 py-2 text-white text-sm bg-red-600 rounded-lg cursor-pointer active:scale-101"
          onClick={() => setIsDeleteData(true)}
        >
          {isDeletingAll ? <Spinner /> : " Delete All Data"}
        </button>
      </div>
      <div className="notify-pref">
        <SettingHeader
          title="Delete Account"
          description="permanently delete your account and all data."
        />
        <button
          className="px-3 py-2 text-white text-sm bg-red-600 rounded-lg cursor-pointer active:scale-101"
          onClick={() => setIsDeleteAccount(true)}
        >
          Delete Account
        </button>
      </div>
      <div className="notify-pref">
        <SettingHeader
          title="Sign Out"
          description="Sign Out of your account on this device."
        />
        <button
          className="flex justify-center items-center gap-1.5 px-3 py-2 text-sm border rounded-lg cursor-pointer active:scale-101"
          onClick={() => logOut()}
        >
          {isLogingOut ? <Spinner /> : <LogOut size={15} />}
          {!isLogingOut && "Sign Out"}
        </button>
      </div>

      {isDeleteData && (
        <ConfirmDelete
          handleClick={() => setIsDeleteData(false)}
          handleDelete={handleDeleteData}
          pending={isDeletingAll}
        />
      )}

      {isDeleteAccount && (
        <ConfirmDelete
          handleClick={() => setIsDeleteAccount(false)}
          handleDelete={handleDeleteAccount}
          pending={isAccountDeleting}
        />
      )}
    </div>
  );
}

export default DangerZone;
