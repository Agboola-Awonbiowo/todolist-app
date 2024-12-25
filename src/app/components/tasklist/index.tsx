import Task from "../task";
import TaskFilter from "../taskfilter";
import useListTasks from "./hooks";

const TaskList: React.FC = () => {
    const {
        toggleTask,
        deleteTask,
        filter,
        setFilter,
        filteredTasks,
        editTask,
      } = useListTasks();

  return (
    <div>
      <TaskFilter filter={filter} setFilter={setFilter} />
      <div className="space-y-4">
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            completed={task.completed}
            onToggle={() => toggleTask(task.id)}
            onDelete={() => deleteTask(task.id)}
            onEdit={(newTitle) => editTask(task.id, newTitle)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
