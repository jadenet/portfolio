import { ReactNode, useState } from "react";

interface dropdownProps {
    text: string;
    children: ReactNode;
}

function Dropdown(props: dropdownProps) {
    const [display, setDisplay] = useState("hidden");

    return (
        <div className="flex flex-col items-center relative">
            <button onClick={() => { setDisplay(display === "block" ? "hidden" : "block") }} className="py-2 hover:scale-105 active:scale-95 transition text-black">{props.text}</button>
            <div className={`${display} absolute z-10 border-2 border-gray-800 top-full bg-white rounded-md flex flex-col items-center`}>
                {props.children}
            </div>
        </div>
    )
}

export default Dropdown
