import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../components/button";

describe("Button", () => {
  const mockOnClick = jest.fn();

  it("renders with default props", () => {
    render(<Button>Click Me</Button>);

    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("p-2 bg-blue-500 text-white rounded-lg");
  });

  it("calls onClick when button is clicked", () => {
    render(<Button onClick={mockOnClick}>Click Me</Button>);

    const buttonElement = screen.getByText("Click Me");
    fireEvent.click(buttonElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("renders with custom className", () => {
    render(<Button className="custom-class">Click Me</Button>);

    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toHaveClass("custom-class");
  });

  it("renders with type submit", () => {
    render(<Button type="submit">Submit</Button>);

    const buttonElement = screen.getByText("Submit");
    expect(buttonElement).toHaveAttribute("type", "submit");
  });
});
