import { motion } from "motion/react";
import Spinner from "./Spinner";
import { NavLink } from "react-router-dom";
import { useProjects } from "../Features/Project/useProject";
import Menu from "./Menu";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import CreateProjectForm from "./CreateProjectForm";

type ProjectListProps = {
  onNavigate?: () => void;
  onConfirmDelete: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  onOpenedId: React.Dispatch<React.SetStateAction<number | undefined>>;
};

function ProjectList({
  onNavigate,
  onConfirmDelete,
  onOpenedId,
}: ProjectListProps) {
  const [isEditing, setIsEditing] = useState<number | null>();
  const [isMenu, setIsMenu] = useState<number | null>();
  const { projects, isLoading } = useProjects();

  if (isLoading) return <Spinner />;
  return (
    <ul className="mt-5 space-y-3 cursor-pointer h-25 overflow-auto hide-scrollbar">
      {projects.map((project, index) => (
        <li key={index} className="flex justify-between items-center">
          <NavLink
            to={`Project/${project.id}`}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex items-center justify-start  ${
                isActive &&
                "bg-blue-100/40 dark:bg-slate-800 px-2 w-full rounded-lg"
              }  `
            }
          >
            <span className=" bg-green-400 p-1 rounded-lg"></span>
            <motion.p
              className="py-1 px-3 w-full rounded-lg hover:bg-blue-100/30  hover:text-blue-800 dark:hover:text-white/80 dark:hover:bg-slate-800"
              whileHover={{ x: 8 }}
            >
              {project.projectName}
            </motion.p>
          </NavLink>
          <BsThreeDotsVertical
            onClick={() => {
              setIsMenu(project.id);
              onOpenedId(project.id);
            }}
          />

          {isMenu === project.id && (
            <Menu
              handler={() => setIsMenu(null)}
              onDelete={onConfirmDelete}
              setEdit={() => setIsEditing(project.id)}
            />
          )}

          {isEditing === project.id && (
            <CreateProjectForm
              handler={() => setIsEditing(null)}
              projectToEdit={project}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
