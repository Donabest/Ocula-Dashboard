import { useState } from "react";
import PageHeader from "../../ui/PageHeader";
import Button from "../../ui/Button";
import TaskTabs from "../MyTasks/TaskTabs";
import TasksOverview from "../MyTasks/TasksOverview";
import ListsTasksSection from "../MyTasks/ListsTasksSection";
import { useActiveTasks } from "../../hooks/useActiveTasks";

function ProjectLayout() {
  const [activeTab, setactiveTab] = useState<string>("Overview");
  const { isLoading, currentPage } = useActiveTasks();
  return (
    <div className="pt-20 pb-10 px-8 max-w-7xl">
      <div className="flex justify-between items-center">
        <PageHeader
          title={`${isLoading ? "..." : currentPage?.projectName}`}
          description=""
        />
        <Button open={() => console.log("hey")}>New Task</Button>
        {/* <TasksOverview active={activeTab} />
      <ListsTasksSection active={activeTab} />
      <MyTasksBoardView active={activeTab} />
      <MyTasksCalendar active={activeTab} /> */}
      </div>
      <TaskTabs active={activeTab} handleActive={setactiveTab} />
      <TasksOverview active={activeTab} />
      <ListsTasksSection active={activeTab} />
    </div>
  );
}

export default ProjectLayout;
