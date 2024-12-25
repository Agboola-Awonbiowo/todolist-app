import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTaskForm from "../components/addtaskform";
import "@testing-library/jest-dom";
import { jest } from '@jest/globals';

const mockOnAddTask = jest.fn();

jest.mock("../components/addtaskform/hooks", () => ({
  __esModule: true,
  default: (onAddTask: (title: string) => void) => ({
    title: "",
    setTitle: jest.fn(),
    handleSubmit: (e: React.FormEvent) => {
      e.preventDefault();
      onAddTask("New Task");
    },
  }),
}));

describe("AddTaskForm", () => {
  it("renders input field and button", () => {
    render(<AddTaskForm onAddTask={mockOnAddTask} />);

    expect(screen.getByPlaceholderText("Add a new task")).toBeInTheDocument();
    expect(screen.getByText("Add Task")).toBeInTheDocument();
  });

  it("calls onAddTask when form is submitted", () => {
    render(<AddTaskForm onAddTask={mockOnAddTask} />);

    fireEvent.change(screen.getByPlaceholderText("Add a new task"), {
      target: { value: "New Task" },
    });
    fireEvent.click(screen.getByText("Add Task"));

    expect(mockOnAddTask).toHaveBeenCalledWith("New Task");
  });
});