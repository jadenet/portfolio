import { useState } from "react";

interface CheckListProps {
    default: string[];
    options: string[];
    setFunction: Function;
}

function CheckList(props: CheckListProps) {
    const [selected, setSelected] = useState<string[]>(props.default);

    function onChange(item: string) {
        let newSelected = null;

        if (selected.includes(item)) {
            newSelected = selected.filter((item2) => { return item2 != item; });
        } else {
            newSelected = [...selected, item];
        }

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

export default CheckList