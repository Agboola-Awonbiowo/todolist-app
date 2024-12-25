import { useState } from "react";

const useTaskHooks = (initialTitle: string, onEdit: (newTitle: string) => void) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(initialTitle);

  const handleEdit = () => {
    onEdit(newTitle);
    setIsEditing(false);
  };

  return {
    isEditing,
    setIsEditing,
    newTitle,
    setNewTitle,
    handleEdit,
  };
};

export default useTaskHooks;