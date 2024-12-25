import React from "react";

interface TaskProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

const Task = ({ title, completed, onToggle, onDelete }: TaskProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
      <span
        className={`flex-1 ${completed ? "line-through text-gray-500" : ""}`}
        onClick={onToggle}
      >
        {title}
      </span>
      <button className="ml-4 text-red-500" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Task;
