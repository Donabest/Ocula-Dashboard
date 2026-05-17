import { motion } from "motion/react";
import User from "./User";
import SidebarList from "./SidebarList";
import ProjectList from "./ProjectList";
import Invite from "./Invite";
import CreateProjectForm from "./CreateProjectForm";
import { useState } from "react";
import Setting from "./Setting";
import ConfirmDelete from "./ConfirmDelete";
import { useDeleteProject } from "../Features/Project/useDeleteProject";

type SidebarProps = {
  isDrawer?: boolean;
  onNavigate?: () => void;
};

function Sidebar({ isDrawer = false, onNavigate }: SidebarProps) {
  const [isCreate, setIsCreate] = useState<boolean>();

  const [isConfirm, setIsConfirm] = useState<boolean>();
  const [openedId, setOpenedId] = useState<number>();
  const { deleteProject, isDeleting } = useDeleteProject();

  function close() {
    setIsCreate(false);
  }
  return (
    <>
      {isConfirm && (
        <ConfirmDelete
          handleClick={() => setIsConfirm(false)}
          handleDelete={() =>
            deleteProject(openedId, {
              onSuccess: () => setIsConfirm(false),
            })
          }
          pending={isDeleting}
        />
      )}
      <div
        className={`${isDrawer ? "relative w-full" : "fixed w-66"} pb-4 px-7 pt-10`}
      >
        <div className="flex flex-col items-center justify-center">
          <User />
          <SidebarList onNavigate={onNavigate} />

          {/* divide line */}
          <div className="w-full mt-5 border-b border-gray-200 dark:border-slate-500"></div>

          <div className="relative w-full mt-5">
            <div className="flex justify-between items-center">
              <h1>My Projects</h1>
              <motion.button
                className="px-3 py-1 bg-violet-200 rounded-4xl cursor-pointer hover:bg-violet-300 dark:bg-blue-800 dark:hover:bg-blue-700"
                whileHover={{ y: -2 }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  setIsCreate((show) => !show);
                }}
              >
                +Add
              </motion.button>
            </div>

            <ProjectList
              onNavigate={onNavigate}
              onConfirmDelete={setIsConfirm}
              onOpenedId={setOpenedId}
            />

            {isCreate && <CreateProjectForm handler={close} />}
          </div>

          <div className="mt-10">
            <Setting />
            <Invite />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
