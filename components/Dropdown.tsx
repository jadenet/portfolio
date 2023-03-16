import { ReactNode } from "react";

interface dropdownProps {
  text: string;
  children: ReactNode;
}

function Dropdown(props: dropdownProps) {
  return (
    <details className="flex flex-col items-center relative">
      <summary className="py-2 hover:scale-105 active:scale-95 transition text-black">
        {props.text}
      </summary>
      <div className="absolute z-10 border-2 border-gray-800 top-full bg-white rounded-md flex flex-col items-center">
        {props.children}
      </div>
    </details>
  );
}

export default Dropdown;
