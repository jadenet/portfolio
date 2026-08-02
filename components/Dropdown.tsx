import { ReactNode } from "react";

interface dropdownProps {
  text: string;
  children: ReactNode;
}

function Dropdown(props: dropdownProps) {
  return (
    <details className="relative">
      <summary className="secondary-button cursor-pointer gap-2 px-5 py-3 text-xs uppercase tracking-[0.18em]">
        <span>{props.text}</span>
        <span className="text-base leading-none">+</span>
      </summary>
      <div className="surface-panel absolute right-0 top-[calc(100%+0.75rem)] z-10 min-w-[14rem] rounded-[1.5rem] p-3">
        {props.children}
      </div>
    </details>
  );
}

export default Dropdown;
