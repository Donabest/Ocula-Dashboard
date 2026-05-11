import { GoPlus } from "react-icons/go";
import { motion } from "motion/react";
import type { ReactNode } from "react";

function Button({ children, open }: { children: ReactNode; open: () => void }) {
  return (
    <motion.button
      className="flex items-center gap-0.5 px-4 py-2 bg-blue-700 text-white rounded-lg cursor-pointer"
      whileHover={{ y: -1.6, background: "blue" }}
      onClick={open}
    >
      <GoPlus />
      {children}
    </motion.button>
  );
}

export default Button;
