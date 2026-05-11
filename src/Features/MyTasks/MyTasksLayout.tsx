import { useState } from "react";

import TaskTabs from "./TaskTabs";
import TasksOverview from "./TasksOverview";
import ListsTasksSection from "./ListsTasksSection";
import MyTasksBoardView from "./MyTasksBoardView";
import MyTasksCalendar from "./MyTasksCalendar";
import PageHeader from "../../ui/PageHeader";
import AddNewTaskForm from "../../ui/AddNewTaskForm";
import Button from "../../ui/Button";

function MyTasksLayout() {
  const [activeTab, setactiveTab] = useState<string>("Overview");
  const [isAddNewTask, setIsAddNewTask] = useState<boolean>();

  function handleCancel() {
    setIsAddNewTask(false);
  }

  return (
    <div className="pt-20 pb-10 px-8 max-w-7xl">
      <div className="flex justify-between items-center">
        <PageHeader
          title={`${activeTab}`}
          description="Monitor all your projects and tasks here"
        />

        <Button open={() => setIsAddNewTask(true)}>New Task</Button>
      </div>

      <TaskTabs active={activeTab} handleActive={setactiveTab} />
      <TasksOverview active={activeTab} />
      <ListsTasksSection active={activeTab} />
      <MyTasksBoardView active={activeTab} />
      <MyTasksCalendar active={activeTab} />

      {isAddNewTask && <AddNewTaskForm handleCancel={handleCancel} />}
    </div>
  );
}

export default MyTasksLayout;
