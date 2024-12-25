import { useTasks } from "@/app/context";
import { useState } from "react";

const useListTasks = () => {
  const { tasks, toggleTask, deleteTask, setTasks } = useTasks();
  const [filter, setFilter] = useState<"all" | "completed" | "uncompleted">("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "uncompleted") return !task.completed;
  });

  const editTask = (id: number, newTitle: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  return {
    toggleTask,
    deleteTask,
    filter,
    setFilter,
    filteredTasks,
    editTask,
  };
};

export default useListTasks;