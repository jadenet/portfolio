import { useState } from "react";

interface RadioListProps {
    default: string;
    options: string[];
    setFunction: Function;
}

function RadioList(props: RadioListProps) {
    const [selected, setSelected] = useState(props.default);

    function onChange(item: string) {
        let newSelected = selected === item ? props.default : item;

        props.setFunction(newSelected);
        setSelected(newSelected)
    }

    return (
        <>
            {props.options.map((item) => {
                return <button onClick={() => { onChange(item) }} className="text-text_secondary hover:scale-105 active:scale-95 transition">{`${selected.includes(item) ? "*" : ""}${item}`}</button>
            })}
        </>
    )
}

export default RadioList