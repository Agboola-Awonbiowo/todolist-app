import { useTasks } from "@/app/context";
import AddTaskForm from "../addtaskform";
import TaskList from "../tasklist";

const Todo = () => {
  const { addTask } = useTasks();

  return (
    <div className="container mx-auto p-4 w-[500px]">
      <h1 className="text-2xl font-bold mb-4">To-Do App</h1>
      <AddTaskForm onAddTask={addTask} />
      <TaskList />
    </div>
  );
};

export default Todo;
