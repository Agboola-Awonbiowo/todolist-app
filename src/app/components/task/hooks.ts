import { useCallback, useMemo, useState } from "react";

export const useTaskHooks = (
  initialTitle: string,
  onEdit: (newTitle: string) => void
) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(initialTitle);

  const handleEdit = useCallback(() => {
    onEdit(newTitle);
    setIsEditing(false);
  }, [newTitle, onEdit]);

  const handleKeyUp = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleEdit();
      }
    },
    [handleEdit]
  );

  const value = useMemo(
    () => ({
      isEditing,
      setIsEditing,
      newTitle,
      setNewTitle,
      handleEdit,
      handleKeyUp,
    }),
    [isEditing, newTitle, handleEdit, handleKeyUp]
  );

  return value;
};

