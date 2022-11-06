interface RadioListProps {
    default: string;
    options: string[];
    setFunction: Function;
}

function RadioList(props: RadioListProps) {
    return (
        <>
            {props.options.map((item, index) => {
                return <div className="flex gap-2 px-2 py-1 w-full hover:bg-gray-900 hover:bg-opacity-10 transition">
                    <input type="radio" id={`radioItem${index}`} name="date" defaultChecked={item === props.default ? true : false} value={item} onClick={() => { props.setFunction(item) }} className="accent-blue-400" />
                    <label htmlFor={`radioItem${index}`} className="text-black hover:scale-[1.02] active:scale-[.97] transition select-none">{item}</label>
                </div>
            })}
        </>
    )
}

export default RadioList
