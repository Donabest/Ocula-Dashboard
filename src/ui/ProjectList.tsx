import { motion } from "motion/react";
import { useProjects } from "../Project/useProject";
import Spinner from "./Spinner";

function ProjectList() {
  const { projects, isLoading } = useProjects();

  if (isLoading) return <Spinner />;
  return (
    <ul className="mt-5 space-y-3 cursor-pointer h-25 overflow-auto hide-scrollbar">
      {projects.map((project, index) => (
        <li key={index} className="flex items-center justify-start gap-2">
          <span className=" bg-green-400 p-1 rounded-lg"></span>
          <motion.p
            className="py-1 px-4 w-full rounded-lg hover:bg-blue-100/30 hover:text-blue-800 dark:hover:text-white"
            whileHover={{ x: 8 }}
          >
            {project.projectName}
          </motion.p>
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
