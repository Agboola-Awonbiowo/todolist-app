import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Inputfield from "../components/inputfield";

describe("Inputfield", () => {
  const mockOnChange = jest.fn();
  const mockOnBlur = jest.fn();
  const mockOnKeyUp = jest.fn();

  it("renders with default props", () => {
    render(<Inputfield value="" onChange={mockOnChange} />);

    const inputElement = screen.getByPlaceholderText("Add a new task");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass("flex-1 p-2 border border-gray-300 rounded-lg");
  });

  it("calls onChange when input value changes", () => {
    render(<Inputfield value="" onChange={mockOnChange} />);

    const inputElement = screen.getByPlaceholderText("Add a new task");
    fireEvent.change(inputElement, { target: { value: "New Task" } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("calls onBlur when input loses focus", () => {
    render(<Inputfield value="" onChange={mockOnChange} onBlur={mockOnBlur} />);

    const inputElement = screen.getByPlaceholderText("Add a new task");
    fireEvent.blur(inputElement);

    expect(mockOnBlur).toHaveBeenCalledTimes(1);
  });

  it("calls onKeyUp when a key is released", () => {
    render(<Inputfield value="" onChange={mockOnChange} onKeyUp={mockOnKeyUp} />);

    const inputElement = screen.getByPlaceholderText("Add a new task");
    fireEvent.keyUp(inputElement, { key: "Enter", code: "Enter", charCode: 13 });

    expect(mockOnKeyUp).toHaveBeenCalledTimes(1);
  });
});