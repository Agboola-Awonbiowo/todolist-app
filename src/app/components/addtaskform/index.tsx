import Button from "../button";
import Inputfield from "../inputfield";
import useAddTaskForm from "./hooks";

interface AddTaskFormProps {
  onAddTask: (title: string) => void;
}

const AddTaskForm = ({ onAddTask }:AddTaskFormProps) => {
  const { title, setTitle, handleSubmit } = useAddTaskForm(onAddTask);

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
      <Inputfield
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 p-2 border border-gray-300 rounded-lg"
      />
      <Button type="submit" className="p-2 bg-blue-500 text-white rounded-lg">
        Add Task
      </Button>
    </form>
  );
};

export default AddTaskForm;
