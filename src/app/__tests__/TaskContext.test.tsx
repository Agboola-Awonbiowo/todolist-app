import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { TaskProvider, useTasks } from "../context";

jest.mock("../context/useTaskState");

const mockUseTaskState = jest.requireMock("../context/useTaskState");

describe("TaskProvider", () => {
  const mockTasks = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
  ];

  const mockTaskState = {
    tasks: mockTasks,
    addTask: jest.fn(),
    toggleTask: jest.fn(),
    deleteTask: jest.fn(),
    setTasks: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseTaskState.useTaskState.mockReturnValue(mockTaskState);
  });

  const TestComponent = () => {
    const { tasks, addTask, toggleTask, deleteTask, setTasks } = useTasks();
    return (
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
        <button onClick={() => addTask("New Task")}>Add Task</button>
        <button onClick={() => toggleTask(1)}>Toggle Task</button>
        <button onClick={() => deleteTask(1)}>Delete Task</button>
        <button onClick={() => setTasks([])}>Set Tasks</button>
      </div>
    );
  };

  it("provides tasks and actions to the component", () => {
    render(
      <TaskProvider>
        <TestComponent />
      </TaskProvider>
    );

    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();

    screen.getByText("Add Task").click();
    expect(mockTaskState.addTask).toHaveBeenCalledWith("New Task");

    screen.getByText("Toggle Task").click();
    expect(mockTaskState.toggleTask).toHaveBeenCalledWith(1);

    screen.getByText("Delete Task").click();
    expect(mockTaskState.deleteTask).toHaveBeenCalledWith(1);

    screen.getByText("Set Tasks").click();
    expect(mockTaskState.setTasks).toHaveBeenCalledWith([]);
  });
});