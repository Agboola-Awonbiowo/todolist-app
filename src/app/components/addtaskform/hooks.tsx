import { useState } from "react";

const useAddTaskForm = (onAddTask: (title: string) => void) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title);
      setTitle("");
    }
  };

  return {
    title,
    setTitle,
    handleSubmit,
  };
};

export default useAddTaskForm;
