import { useState } from "react";

const useTaskHooks = (initialTitle: string, onEdit: (newTitle: string) => void) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(initialTitle);

  const handleEdit = () => {
    onEdit(newTitle);
    setIsEditing(false);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleEdit();
    }
  };

  return {
    isEditing,
    setIsEditing,
    newTitle,
    setNewTitle,
    handleEdit,
    handleKeyUp
  };
};

export default useTaskHooks;