import React from "react";
import Button from "../button";
import Inputfield from "../inputfield";
import useTaskHooks from "./hooks";

interface TaskProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: (newTitle: string) => void;
}

const Task = ({ title, completed, onToggle, onDelete, onEdit }: TaskProps) => {
  const { isEditing, setIsEditing, newTitle, setNewTitle, handleEdit } =
    useTaskHooks(title, onEdit);

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
      {isEditing ? (
        <Inputfield
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleEdit}
          onKeyUp={(e: { key: string }) => e.key === "Enter" && handleEdit()}
          className="flex-1 p-2 border border-gray-300 rounded-lg"
        />
      ) : (
        <span
          className={`flex-1 ${completed ? "line-through text-gray-500" : ""}`}
          onClick={onToggle}
        >
          {title}
        </span>
      )}
      <Button onClick={() => setIsEditing(true)}>Edit</Button>
      <Button className="ml-4 text-red-500" onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
};

export default Task;
