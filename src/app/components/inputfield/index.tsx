interface InputfieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  onBlur: () => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Inputfield = ({
  value,
  onChange,
  onBlur,
  placeholder = "Add a new task",
  className = "flex-1 p-2 border border-gray-300 rounded-lg",
  onKeyUp
}: InputfieldProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      onBlur={onBlur}
      onKeyUp={onKeyUp}
    />
  );
};

export default Inputfield;
