import { useState } from "react";
import PageHeader from "../../ui/PageHeader";
import Button from "../../ui/Button";
import TaskTabs from "../MyTasks/TaskTabs";
import TasksOverview from "../MyTasks/TasksOverview";
import ListsTasksSection from "../MyTasks/ListsTasksSection";
import { useActiveTasks } from "../../hooks/useActiveTasks";
import AddNewTaskForm from "../../ui/AddNewTaskForm";
import MyTasksBoardView from "../MyTasks/MyTasksBoardView";
import MyTasksCalendar from "../MyTasks/MyTasksCalendar";
import { FaRProject } from "react-icons/fa";
import Empty from "../../ui/Empty";

function ProjectLayout() {
  const [activeTab, setactiveTab] = useState<string>("Overview");
  const [isAddNewTask, setIsAddNewTask] = useState<boolean>();
  const { isLoading, currentPage } = useActiveTasks();

  if (!currentPage) return <Empty resourseName="Project" />;

  return (
    <section className="pt-20 pb-10 px-8 max-w-7xl">
      <div className="flex flex-col items-start md:justify-between md:items-center md:flex-row ">
        <div className="flex justify-center items-center gap-3">
          <FaRProject className="text-blue-400 text-5xl" />
          <PageHeader
            title={`${isLoading ? "..." : currentPage?.projectName}`}
            description=""
          />
        </div>
        <Button open={() => setIsAddNewTask(true)}>New Task</Button>
      </div>
      <TaskTabs active={activeTab} handleActive={setactiveTab} />
      <TasksOverview active={activeTab} />
      <ListsTasksSection active={activeTab} />
      <MyTasksBoardView active={activeTab} />
      <MyTasksCalendar active={activeTab} />

      {isAddNewTask && (
        <AddNewTaskForm handleCancel={() => setIsAddNewTask(false)} />
      )}
    </section>
  );
}

export default ProjectLayout;
