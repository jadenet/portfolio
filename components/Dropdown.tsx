import { ReactNode, useState } from "react";

interface dropdownProps {
    text: string;
    children: ReactNode;
}

function Dropdown(props: dropdownProps) {
    const [display, setDisplay] = useState("hidden");

    return (
        <div className="flex flex-col relative">
            <button onClick={() => { setDisplay(display === "block" ? "hidden" : "block") }} className="py-2 hover:scale-105 active:scale-95 transition text-text_secondary">{props.text}</button>
            <div className={`${display} absolute top-10 p-2 shadow-lg bg-background_secondary rounded-md`}>
                {props.children}
            </div>
        </div>
    )
}

export default Dropdown
