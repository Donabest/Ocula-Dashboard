import { motion } from "motion/react";
import Spinner from "./Spinner";
import { NavLink } from "react-router-dom";
import { useProjects } from "../Features/Project/useProject";

function ProjectList() {
  const { projects, isLoading } = useProjects();

  if (isLoading) return <Spinner />;
  return (
    <ul className="mt-5 space-y-3 cursor-pointer h-25 overflow-auto hide-scrollbar">
      {projects.map((project, index) => (
        <li>
          <NavLink
            to={`Project/${project.id}`}
            key={index}
            className={({ isActive }) =>
              `flex items-center justify-start  ${
                isActive &&
                "bg-blue-100/40 dark:bg-slate-800 px-2 w-full rounded-lg"
              }  `
            }
          >
            <span className=" bg-green-400 p-1 rounded-lg"></span>
            <motion.p
              className="py-1 px-4 w-full rounded-lg hover:bg-blue-100/30  hover:text-blue-800 dark:hover:text-white/80 dark:hover:bg-slate-800"
              whileHover={{ x: 8 }}
            >
              {project.projectName}
            </motion.p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
