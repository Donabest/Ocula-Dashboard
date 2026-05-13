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
    <section className="w-full max-w-7xl px-4 pb-10 pt-20 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
    </section>
  );
}

export default MyTasksLayout;
