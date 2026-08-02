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
        newSelected = selected.filter((item2) => {
          return item2 != item;
        });
      } else {
        newSelected = [...selected, item];
      }
    }

    props.setFunction(newSelected);
    setSelected(newSelected);
  }

  return (
    <>
      <button
        onClick={() => {
          onChange(null);
        }}
        className={`w-full rounded-2xl px-3 py-2 text-left text-sm font-semibold uppercase tracking-[0.18em] transition hover:bg-[var(--surface-hover)] ${
          selected.length > 0 ? "text-[var(--gold)]" : "text-[var(--ink-soft)]"
        }`}
      >
        ✨ Clear
      </button>
      {props.options.map((item, index) => {
        return (
          <label
            key={item}
            htmlFor={`checklistItem${index}`}
            className="flex w-full cursor-pointer items-center gap-3 rounded-2xl px-3 py-2 text-[var(--ink)] transition hover:bg-[var(--surface-hover)]"
          >
            <input
              type="checkbox"
              id={`checklistItem${index}`}
              value={item}
              checked={selected.includes(item)}
              onChange={() => {
                onChange(item);
              }}
              className="h-4 w-4 rounded border-[var(--sage-deep)] accent-[var(--sage-deep)]"
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

export default CheckList;
