interface InputfieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const Inputfield = ({
  value,
  onChange,
  placeholder = "Add a new task",
  className = "flex-1 p-2 border border-gray-300 rounded-lg",
}: InputfieldProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Inputfield;
