import { useCallback, useEffect, useMemo, useState } from "react";

const TASKS_STORAGE_KEY = "tasks";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const useTaskState = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((title: string) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), title, completed: false },
    ]);
  }, []);

  const toggleTask = useCallback((id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const deleteTask = useCallback((id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, []);

  const value = useMemo(
    () => ({
      tasks,
      addTask,
      toggleTask,
      deleteTask,
      setTasks,
    }),
    [tasks, addTask, toggleTask, deleteTask]
  );

  return value;
};
