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
  const {
    isEditing,
    setIsEditing,
    newTitle,
    setNewTitle,
    handleEdit,
    handleKeyUp,
  } = useTaskHooks(title, onEdit);

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
      {isEditing ? (
        <>
          <Inputfield
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyUp={handleKeyUp}
            className="flex-1 p-2 border border-gray-300 rounded-lg"
          />
          <Button
            onClick={handleEdit}
            className="ml-4 bg-green-500 text-white p-2 rounded"
          >
            Save
          </Button>
        </>
      ) : (
        <>
          <span
            className={`flex-1 cursor-pointer ${
              completed ? "line-through text-gray-500" : ""
            }`}
            onClick={onToggle}
          >
            {title}
          </span>
          <Button
            onClick={() => setIsEditing(true)}
            className="ml-4 bg-blue-500 text-white p-2 rounded"
          >
            Edit
          </Button>
        </>
      )}
      <Button className="ml-4 text-red-500" onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
};

export default Task;
