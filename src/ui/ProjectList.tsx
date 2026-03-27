import { motion } from "motion/react";
import { useEffect, useState } from "react";

const Projects: Array<string> = [
  "Project Lunch",
  "Team BrainStorm",
  "Branding Lunch",
  "Branding Lunch",
  "Branding Lunch",
];

function ProjectList() {
  // const [randomColor, setRandomColor] = useState("");

  // const color = ["bg-purple-400", "bg-blue-400", "bg-green-500"];

  // useEffect(() => {
  //   const random: string = color[Math.floor(Math.random() * color.length)];
  //   // setRandomColor(random)
  //   // cl
  //   //;
  // }, [color]);

  return (
    <ul className="mt-5 space-y-3 cursor-pointer h-25 overflow-auto hide-scrollbar">
      {Projects.map((project, index) => (
        <li key={index} className="flex items-center justify-start gap-2">
          <span className=" bg-green-400 p-1 rounded-lg"></span>
          <motion.p
            className="py-1 px-4 w-full rounded-lg hover:bg-blue-100/30 hover:text-blue-800 dark:hover:text-white"
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
