import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Todo from "../components/todo";
import { useTasks } from "@/app/context";
import useListTasks from "../components/tasklist/hooks";

jest.mock("@/app/context");
jest.mock("../components/tasklist/hooks");

describe("Todo", () => {
  const mockAddTask = jest.fn();
  const mockToggleTask = jest.fn();
  const mockDeleteTask = jest.fn();
  const mockSetFilter = jest.fn();
  const mockEditTask = jest.fn();

  const mockTasks = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    (useTasks as jest.Mock).mockReturnValue({
      addTask: mockAddTask,
    });
    (useListTasks as jest.Mock).mockReturnValue({
      toggleTask: mockToggleTask,
      deleteTask: mockDeleteTask,
      filter: "all",
      setFilter: mockSetFilter,
      filteredTasks: mockTasks,
      editTask: mockEditTask,
      tasks: mockTasks,
    });
  });

  it("renders the To-Do App title", () => {
    render(<Todo />);

    expect(screen.getByText("To-Do App")).toBeInTheDocument();
  });

  it("renders AddTaskForm and TaskList components", () => {
    render(<Todo />);

    expect(screen.getByPlaceholderText("Add a new task")).toBeInTheDocument();
    expect(screen.getByText("Add Task")).toBeInTheDocument();
  });

  it("calls addTask when a new task is added", () => {
    render(<Todo />);

    const inputElement = screen.getByPlaceholderText("Add a new task");
    const addButton = screen.getByText("Add Task");

    fireEvent.change(inputElement, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(mockAddTask).toHaveBeenCalledWith("New Task");
  });
});