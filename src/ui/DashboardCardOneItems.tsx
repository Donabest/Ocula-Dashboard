import InprogressTasksList from "../Features/Dashboard/InprogressTasksList";
import TodoTasksList from "../Features/Dashboard/TodoTasksList";
import UpCommingTasksList from "../Features/Dashboard/UpCommingTasksList";
import CompletedTasksList from "../Features/Dashboard/CompletedTasksList";
import { useState } from "react";

function DashboardCardOneItems() {
  const [activeTab, setActiveTab] = useState<string | null>("Inprogress");

  function handleActiveTab(tab: string) {
    setActiveTab((prev) => (prev === tab ? null : tab));
  }
  return (
    <>
      <InprogressTasksList active={activeTab} handler={handleActiveTab} />
      <TodoTasksList active={activeTab} handler={handleActiveTab} />
      <UpCommingTasksList active={activeTab} handler={handleActiveTab} />
      <CompletedTasksList active={activeTab} handler={handleActiveTab} />
    </>
  );
}

export default DashboardCardOneItems;
