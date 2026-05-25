import { useActiveTasks } from "#hooks/useActiveTasks";
import { BiTask } from "react-icons/bi";
import PageHeader from "../../ui/PageHeader";
import type { cardTab } from "../../utilities/type";
import { PiSpinnerGapLight } from "react-icons/pi";
import { FaRegCircleCheck } from "react-icons/fa6";
import OverAllStatItems from "../../ui/OverAllStatItems";
import { FaExclamationTriangle } from "react-icons/fa";
import { RiTodoFill } from "react-icons/ri";
import PieChartAnalytics from "./PieChartAnalytics";
import PriorityBarChartAnalytics from "./PriorityBarChartAnalytics";
import TaskCreatedOverTimeAreaChart from "./TaskCreatedOverTimeAreaChart";

function AnalyticsLayout() {
  const {
    isLoading,
    tasks,
    inProgressTasks,
    completedTasks,
    todoTasks,
    overDueTask,
  } = useActiveTasks();

  const Tab: cardTab[] = [
    {
      icon: <BiTask className="text-purple-400 " />,
      status: "Total Tasks",
      total: tasks.length,
    },
    {
      icon: <PiSpinnerGapLight className="text-yellow-400 " />,
      status: "In progress",
      total: inProgressTasks.length,
    },
    {
      icon: <RiTodoFill className="text-gray-400 " />,
      status: "Todo",
      total: todoTasks.length,
    },

    {
      icon: <FaRegCircleCheck className="text-emerald-500 " />,
      status: "Completed",
      total: completedTasks.length,
    },
    {
      icon: <FaExclamationTriangle className="text-red-500 " />,
      status: "Overdue",
      total: overDueTask.length,
    },
  ];
  return (
    <section className="max-w-6xl pt-24 pl-4">
      <PageHeader
        title="Analytics"
        description="manage,view and track your task data"
      />

      <div className="flex items-center justify-start gap-2 mt-4">
        {Tab.map((card, index) => (
          <OverAllStatItems card={card} key={index} loading={isLoading} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-10">
        <PieChartAnalytics
          completedTasks={completedTasks.length}
          inProgressTasks={inProgressTasks.length}
          todoTasks={todoTasks.length}
          overDueTasks={overDueTask.length}
        />
        <PriorityBarChartAnalytics tasks={tasks} />
      </div>
      <TaskCreatedOverTimeAreaChart tasks={tasks} />
    </section>
  );
}

export default AnalyticsLayout;
