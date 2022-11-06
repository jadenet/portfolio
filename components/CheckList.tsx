import { useState } from "react";

interface CheckListProps {
    default: string[];
    options: string[];
    setFunction: Function;
}

function CheckList(props: CheckListProps) {
    const [selected, setSelected] = useState<string[]>(props.default);

    function onChange(item: string | null) {
        let newSelected: string[] = [];

        if (item) {
            if (selected.includes(item)) {
                newSelected = selected.filter((item2) => { return item2 != item; });
            } else {
                newSelected = [...selected, item];
            }
        }

        props.setFunction(newSelected);
        setSelected(newSelected);
    }

    return (
        <>
            <button onClick={() => { onChange(null) }} className={`px-2 py-1 w-full hover:bg-gray-900 hover:bg-opacity-10 hover:scale-[1.02] active:scale-[.97] transition select-none text-left ${selected.length > 0 && "text-red-600 font-medium"}`}>✨ Clear</button>
            {props.options.map((item, index) => {
                return <div className="flex gap-2 px-2 py-1 w-full hover:bg-gray-900 hover:bg-opacity-10 transition bg-white text-white">
                    <input type="checkbox" id={`checklistItem${index}`} value={item} checked={selected.includes(item)} onClick={() => { onChange(item) }} className="accent-blue-400" />
                    <label htmlFor={`checklistItem${index}`} className="text-black hover:scale-[1.02] active:scale-[.97] transition select-none">{item}</label>
                </div>
            })}
        </>
    )
}

export default CheckList
