import { useState } from "react";
import DashboardCompletedTasksList from "../Features/Dashboard/DashboardCompletedTasksList";
import DashboardUpCommingTasksList from "../Features/Dashboard/DashboardUpCommingTasksList";
import DashboardTodoTasksList from "../Features/Dashboard/DashboardTodoTasksList";
import DashboardInprogressTasksList from "../Features/Dashboard/DashboardInprogressTasksList";
import { useTasks } from "../services/useTasks";
import Spinner from "./Spinner";

function DashboardTaskListCardItems() {
  const [activeTab, setActiveTab] = useState<string | null>("Inprogress");
  const { isLoading } = useTasks();
  function handleActiveTab(tab: string) {
    setActiveTab((prev) => (prev === tab ? null : tab));
  }

  if (isLoading) return <Spinner />;

  return (
    <>
      <DashboardInprogressTasksList
        active={activeTab}
        handler={handleActiveTab}
      />
      <DashboardTodoTasksList active={activeTab} handler={handleActiveTab} />
      <DashboardUpCommingTasksList
        active={activeTab}
        handler={handleActiveTab}
      />
      <DashboardCompletedTasksList
        active={activeTab}
        handler={handleActiveTab}
      />
    </>
  );
}

export default DashboardTaskListCardItems;
