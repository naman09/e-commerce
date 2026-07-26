export interface ButtonProps {
  label: string;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  return (
      <button
        className={`bg-gray-900 text-white rounded-lg hover:bg-gray-800 cursor transition px-4 py-2 ${props.className}`}
      >
        {props.label}
      </button>
  );
};
