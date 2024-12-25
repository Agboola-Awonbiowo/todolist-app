import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import TaskList from "../components/tasklist";
import useListTasks from "../components/tasklist/hooks";

jest.mock("../components/tasklist/hooks");

describe("TaskList", () => {
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

  it("renders TaskFilter when there are tasks", () => {
    render(<TaskList />);

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
    expect(screen.getByText("Uncompleted")).toBeInTheDocument();
  });

  it("renders tasks", () => {
    render(<TaskList />);

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
  });

  it("calls toggleTask when a task is toggled", () => {
    render(<TaskList />);

    fireEvent.click(screen.getByText("Task 1"));

    expect(mockToggleTask).toHaveBeenCalledWith(1);
  });

  it("calls deleteTask when a task is deleted", () => {
    render(<TaskList />);

    const deleteButtons = screen.getAllByText("Delete");
    fireEvent.click(deleteButtons[0]);

    expect(mockDeleteTask).toHaveBeenCalledWith(1);
  });

  it("calls editTask when a task is edited", () => {
    render(<TaskList />);

    const editButtons = screen.getAllByText("Edit");
    fireEvent.click(editButtons[0]);
    fireEvent.change(screen.getByPlaceholderText("Add a new task"), {
      target: { value: "Updated Task 1" },
    });
    fireEvent.click(screen.getByText("Save"));

    expect(mockEditTask).toHaveBeenCalledWith(1, "Updated Task 1");
  });
});