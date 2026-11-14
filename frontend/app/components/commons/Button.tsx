import type { EventHandler } from "react";

export interface ButtonProps {
  label: string;
  className?: string;
  onClick?: EventHandler<any>;
}
// text-white hover:bg-gray-700
export const Button = (props: ButtonProps) => {
  return (
      <button
        className={`bg-gray-900  rounded-lg  cursor-pointer transition px-4 py-2 ${props.className}`}
        onClick={props.onClick}
      >
        {props.label}
      </button>
  );
};
