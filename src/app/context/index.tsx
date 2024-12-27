import React, { createContext, ReactNode, useContext } from "react";
import { useTaskState } from "./useTaskState"; // Import the custom hook

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskContextProps {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  setTasks: (tasks: Task[]) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const taskState = useTaskState();

  return (
    <TaskContext.Provider value={taskState}>{children}</TaskContext.Provider>
  );
};
