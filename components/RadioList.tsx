interface RadioListProps {
  default: string;
  options: string[];
  setFunction: Function;
}

function RadioList(props: RadioListProps) {
  return (
    <>
      {props.options.map((item, index) => {
        return (
          <label
            key={item}
            htmlFor={`radioItem${index}`}
            className="flex w-full cursor-pointer items-center gap-3 rounded-2xl px-3 py-2 text-[var(--ink)] transition hover:bg-[var(--surface-hover)]"
          >
            <input
              type="radio"
              id={`radioItem${index}`}
              name="date"
              defaultChecked={item === props.default ? true : false}
              value={item}
              onChange={() => {
                props.setFunction(item);
              }}
              className="h-4 w-4 accent-[var(--sage-deep)]"
            />
            <span className="text-sm font-semibold tracking-[0.08em]">
              {item}
            </span>
          </label>
        );
      })}
    </>
  );
}

export default RadioList;
