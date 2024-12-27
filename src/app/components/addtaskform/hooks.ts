import { useCallback, useState } from "react";

const useAddTaskForm = (onAddTask: (title: string) => void) => {
  const [title, setTitle] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (title.trim()) {
        onAddTask(title);
        setTitle("");
      }
    },
    [title, onAddTask]
  );

  return {
    title,
    setTitle,
    handleSubmit,
  };
};

export default useAddTaskForm;
