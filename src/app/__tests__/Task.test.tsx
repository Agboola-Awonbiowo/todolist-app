import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Task from "../components/task";
import useTaskHooks from "../components/task/hooks";

jest.mock("../components/task/hooks");

describe("Task", () => {
  const mockOnToggle = jest.fn();
  const mockOnDelete = jest.fn();
  const mockOnEdit = jest.fn();

  const defaultProps = {
    title: "Test Task",
    completed: false,
    onToggle: mockOnToggle,
    onDelete: mockOnDelete,
    onEdit: mockOnEdit,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useTaskHooks as jest.Mock).mockReturnValue({
      isEditing: false,
      setIsEditing: jest.fn(),
      newTitle: "Test Task",
      setNewTitle: jest.fn(),
      handleEdit: jest.fn(),
      handleKeyUp: jest.fn(),
    });
  });

  it("renders task with title", () => {
    render(<Task {...defaultProps} />);

    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  it("calls onToggle when task title is clicked", () => {
    render(<Task {...defaultProps} />);

    fireEvent.click(screen.getByText("Test Task"));

    expect(mockOnToggle).toHaveBeenCalledTimes(1);
  });

  it("calls onDelete when delete button is clicked", () => {
    render(<Task {...defaultProps} />);

    fireEvent.click(screen.getByText("Delete"));

    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });

  it("enters edit mode when edit button is clicked", () => {
    const { rerender } = render(<Task {...defaultProps} />);

    fireEvent.click(screen.getByText("Edit"));

    (useTaskHooks as jest.Mock).mockReturnValue({
      isEditing: true,
      setIsEditing: jest.fn(),
      newTitle: "Test Task",
      setNewTitle: jest.fn(),
      handleEdit: jest.fn(),
      handleKeyUp: jest.fn(),
    });

    rerender(<Task {...defaultProps} />);

    expect(screen.getByPlaceholderText("Add a new task")).toBeInTheDocument();
  });

  it("calls onEdit when save button is clicked", () => {
    (useTaskHooks as jest.Mock).mockReturnValue({
      isEditing: true,
      setIsEditing: jest.fn(),
      newTitle: "Test Task",
      setNewTitle: jest.fn(),
      handleEdit: () => mockOnEdit("Test Task"),
      handleKeyUp: jest.fn(),
    });

    render(<Task {...defaultProps} />);

    fireEvent.click(screen.getByText("Save"));

    expect(mockOnEdit).toHaveBeenCalledWith("Test Task");
  });
});