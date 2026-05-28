import { MdEditNote } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import useClickOutSide from "../hooks/useClickOutSide";
import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";

type menuType = {
  icon: ReactNode;
  text: string;
};

const menus: menuType[] = [
  {
    icon: <MdEditNote color="gray" size={20} />,
    text: "Edit",
  },
  {
    icon: <RiDeleteBinLine color="gray" size={20} />,
    text: "Delete",
  },
];
function Menu({
  handler,
  onDelete,
  setEdit: onEdit,
}: {
  handler: () => void;
  onDelete: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  setEdit: () => void;
}) {
  const { ref } = useClickOutSide(handler);
  return (
    <AnimatePresence>
      <motion.div
        className="absolute top-9 right-5 bg-white/4 space-y-2 py-2 w-50 border border-black/5 shadow-xl backdrop-blur-md rounded-lg z-99 dark:bg-black/30 dark:text-slate-300"
        ref={ref}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 1 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ ease: "easeInOut" }}
      >
        {menus.map((menu, i) => (
          <div
            className="flex items-center gap-2  px-4 py-1  hover:bg-black/5 hover:transition-all 
            duration-150 cursor-pointer"
            key={i}
          >
            {menu.icon}
            <button
              className="cursor-pointer"
              onClick={() => {
                if (menu.text === "Delete") {
                  onDelete(true);
                }
                if (menu.text === "Edit") {
                  onEdit();
                }
              }}
            >
              {menu.text}
            </button>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default Menu;
