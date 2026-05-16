import { motion } from "motion/react";

import { GrShieldSecurity, GrUserSettings } from "react-icons/gr";
import {
  MdOutlineEditNotifications,
  MdOutlineModelTraining,
} from "react-icons/md";
import { PiMagicWandLight } from "react-icons/pi";
import { CgDanger } from "react-icons/cg";
import type { ListType } from "../../utilities/type";
import { useSearchParams } from "react-router-dom";

const settingList: ListType[] = [
  {
    icon: <GrUserSettings size={13} />,
    list: "Account",
  },
  {
    icon: <MdOutlineModelTraining size={15} />,

    list: "Appearance",
  },
  {
    icon: <MdOutlineEditNotifications size={17} />,
    list: "Notification",
  },
  {
    icon: <PiMagicWandLight size={15} />,
    list: "Ai preferences",
  },
  {
    icon: <GrShieldSecurity size={15} />,
    list: "Security",
  },
  {
    icon: <CgDanger />,
    list: "Danger Zone",
  },
];

function SettingSidebar({
  setCurrentTab,
  current,
}: {
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
  current: string;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const Tab = searchParams.get("TabTo") || "";
  function handleUrlChange(currentTab: string) {
    searchParams.set(Tab, currentTab);
    setSearchParams(searchParams);
  }

  return (
    <ul className="text-center pt-4 pr-2 space-y-2 border-r border-r-gray-200 w-50 h-[80vh] dark:border-r-slate-800">
      {settingList.map((setting) => (
        <motion.li
          className={`flex justify-start items-center gap-2 px-4 py-1.5 rounded-lg cursor-pointer hover:bg-gray-200 dark:text-slate-100 hover:dark:bg-slate-800 dark:hover:text-slate-300
            ${current === setting.list && "bg-gray-200 dark:bg-slate-800"}`}
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 800, damping: 20 }}
          onClick={() => {
            setCurrentTab(setting.list);
            handleUrlChange(setting.list);
          }}
          key={setting.list}
        >
          <span>{setting.icon}</span>
          <span>{setting.list}</span>
        </motion.li>
      ))}
    </ul>
  );
}

export default SettingSidebar;
