import { motion } from "motion/react";

const Projects: Array<string> = [
  "Project Lunch",
  "Team BrainStorm",
  "Branding Lunch",
  "Branding Lunch",
  "Branding Lunch",
];

function ProjectList() {
  //   const randomColor: string = Math.floor(Math.random() * 16777215)
  //     .toString(16)
  //     .padStart(6, "0");

  //   console.log(randomColor);

  return (
    <ul className="mt-5 space-y-3 cursor-pointer h-25 overflow-auto hide-scrollbar">
      {Projects.map((project, index) => (
        <li key={index} className="flex items-center justify-start gap-2">
          <span className=" bg-green-400 p-1 rounded-lg"></span>
          <motion.p
            className="py-1 px-4 w-full rounded-lg hover:bg-blue-100/30 hover:text-blue-800"
            whileHover={{ x: 8 }}
          >
            {project}
          </motion.p>
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
