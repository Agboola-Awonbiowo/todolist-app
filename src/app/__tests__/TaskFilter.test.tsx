import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import TaskFilter from "../components/taskfilter";

describe("TaskFilter", () => {
  const mockSetFilter = jest.fn();

  const renderComponent = (filter: "all" | "completed" | "uncompleted") => {
    render(<TaskFilter filter={filter} setFilter={mockSetFilter} />);
  };

  it("renders all filter buttons", () => {
    renderComponent("all");

    expect(screen.getByText("All")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
    expect(screen.getByText("Uncompleted")).toBeInTheDocument();
  });

  it("highlights the 'All' button when filter is 'all'", () => {
    renderComponent("all");

    const allButton = screen.getByText("All");
    expect(allButton).toHaveClass("bg-blue-500 text-white");
  });

  it("highlights the 'Completed' button when filter is 'completed'", () => {
    renderComponent("completed");

    const completedButton = screen.getByText("Completed");
    expect(completedButton).toHaveClass("bg-blue-500 text-white");
  });

  it("highlights the 'Uncompleted' button when filter is 'uncompleted'", () => {
    renderComponent("uncompleted");

    const uncompletedButton = screen.getByText("Uncompleted");
    expect(uncompletedButton).toHaveClass("bg-blue-500 text-white");
  });

  it("calls setFilter with 'all' when 'All' button is clicked", () => {
    renderComponent("all");

    fireEvent.click(screen.getByText("All"));
    expect(mockSetFilter).toHaveBeenCalledWith("all");
  });

  it("calls setFilter with 'completed' when 'Completed' button is clicked", () => {
    renderComponent("all");

    fireEvent.click(screen.getByText("Completed"));
    expect(mockSetFilter).toHaveBeenCalledWith("completed");
  });

  it("calls setFilter with 'uncompleted' when 'Uncompleted' button is clicked", () => {
    renderComponent("all");

    fireEvent.click(screen.getByText("Uncompleted"));
    expect(mockSetFilter).toHaveBeenCalledWith("uncompleted");
  });
});