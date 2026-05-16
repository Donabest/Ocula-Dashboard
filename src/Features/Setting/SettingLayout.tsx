import { CiSettings } from "react-icons/ci";
import PageHeader from "../../ui/PageHeader";
import SettingSidebar from "./SettingSidebar";
import { useState } from "react";
import SettingContent from "./SettingContent";

function SettingLayout() {
  const [selectedTab, setSelectedTab] = useState<string>("Account");

  return (
    <section className="pt-22 pb-10 px-8 max-w-7xl ">
      <div className="flex justify-start items-start border-b border-b-gray-200 pb-5 dark:border-b-slate-800">
        <PageHeader title="Account Settings" description="" />
        <CiSettings size={16} className="dark:text-slate-200" />
      </div>

      <div className="flex justify-start gap-2 items-start h-[80vh]">
        <SettingSidebar setCurrentTab={setSelectedTab} current={selectedTab} />
        <SettingContent currentTab={selectedTab} />
      </div>
    </section>
  );
}

export default SettingLayout;
