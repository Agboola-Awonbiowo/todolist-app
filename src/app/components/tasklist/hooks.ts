import { useTasks } from "@/app/context";
import { useCallback, useMemo, useState } from "react";

export const useListTasks = () => {
  const { tasks, toggleTask, deleteTask, setTasks } = useTasks();
  const [filter, setFilter] = useState<"all" | "completed" | "uncompleted">(
    "all"
  );

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === "all") return true;
      if (filter === "completed") return task.completed;
      if (filter === "uncompleted") return !task.completed;
    });
  }, [tasks, filter]);

  const editTask = useCallback(
    (id: number, newTitle: string) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, title: newTitle } : task
        )
      );
    },
    [tasks, setTasks]
  );

  const value = useMemo(
    () => ({
      tasks,
      toggleTask,
      deleteTask,
      filter,
      setFilter,
      filteredTasks,
      editTask,
    }),
    [tasks, toggleTask, deleteTask, filter, setFilter, filteredTasks, editTask]
  );

  return value;
};
