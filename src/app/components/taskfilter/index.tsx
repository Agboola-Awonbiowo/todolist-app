import React from "react";
import Button from "../button";

interface TaskFilterProps {
  filter: "all" | "completed" | "uncompleted";
  setFilter: (filter: "all" | "completed" | "uncompleted") => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="flex space-x-2 mb-4">
      <Button
        onClick={() => setFilter("all")}
        className={`p-2 ${
          filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        All
      </Button>
      <Button
        onClick={() => setFilter("completed")}
        className={`p-2 ${
          filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Completed
      </Button>
      <Button
        onClick={() => setFilter("uncompleted")}
        className={`p-2 ${
          filter === "uncompleted" ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        Uncompleted
      </Button>
    </div>
  );
};

export default TaskFilter;
