import type { EventHandler } from "react";

export interface ButtonProps {
  label: string;
  className?: string;
  onClick?: EventHandler<any>;
}

export const Button = (props: ButtonProps) => {
  return (
      <button
        className={`bg-gray-900 text-white rounded-lg hover:bg-gray-700 cursor-pointer transition px-4 py-2 ${props.className}`}
        onClick={props.onClick}
      >
        {props.label}
      </button>
  );
};
