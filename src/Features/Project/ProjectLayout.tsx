import { useState } from "react";
import { useParams } from "react-router-dom";
import { useTasks } from "../../services/useTasks";
import PageHeader from "../../ui/PageHeader";
import Button from "../../ui/Button";
import { useProjects } from "./useProject";
import TaskTabs from "../MyTasks/TaskTabs";
import TasksOverview from "../MyTasks/TasksOverview";
import ListsTasksSection from "../MyTasks/ListsTasksSection";

function ProjectLayout() {
  const [activeTab, setactiveTab] = useState<string>("Overview");
  const { tasks, completedTasks, upCommingTasks, todoTasks, inProgressTasks } =
    useTasks();
  const { projects, isLoading } = useProjects();
  const { projectId } = useParams();
  const projectTasks = tasks.filter((t) => t.project_id === Number(projectId));
  const ProjectCompleted = completedTasks.filter(
    (t) => t.project_id === Number(projectId),
  );
  const projectUpcomming = upCommingTasks.filter(
    (t) => t.project_id === Number(projectId),
  );
  const projectTodo = todoTasks.filter(
    (t) => t.project_id === Number(projectId),
  );

  const projectInprogress = inProgressTasks.filter(
    (t) => t.project_id === Number(projectId),
  );

  const currentPage = projects.find(
    (project) => project.id === Number(projectId),
  );

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
      <TasksOverview
        active={activeTab}
        tasks={projectTasks}
        completedTasks={ProjectCompleted}
        inProgressTasks={projectInprogress}
      />
      <ListsTasksSection active={activeTab} />
    </div>
  );
}

export default ProjectLayout;
