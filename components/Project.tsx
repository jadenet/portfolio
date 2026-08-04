import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectProps {
  name: string;
  date: { year: number; month: number };
  tools: string[];
  description: string;
  demo?: string | null;
  source?: string | null;
  image?: StaticImageData | string;
}

function Project(props: ProjectProps) {
  const date = new Date(props.date.year, props.date.month);
  const customImage = props.image;

  return (
    <article className="surface-panel flex h-[29rem] w-full flex-col overflow-hidden rounded-[1.5rem]">
      <div className="relative h-96 border-b border-[var(--line)] bg-[var(--surface-subtle)]">
        {customImage != null ? (
          <>
            <Image
              aria-hidden
              src={customImage}
              fill
              alt=""
              className="absolute h-full w-full scale-110 object-cover opacity-40"
            />
            <Image
              src={customImage}
              fill
              alt="Project image"
              sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 95vw"
              className="absolute h-full w-full object-contain p-4"
            />
          </>
        ) : (
          <div className="absolute h-full inset-0 flex items-center justify-center bg-[var(--surface-muted)] px-6 text-center text-sm leading-6 text-[var(--ink-soft)]">
            No image available, sorry :(
          </div>
        )}
      </div>
      <div className="flex h-full flex-col justify-between gap-4 p-4">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">{`${date.toLocaleDateString("default", {
            month: "short",
          })} ${date.getFullYear()}`}</p>
          <h2 className="line-clamp-2 text-2xl font-semibold leading-tight text-[var(--ink)]">{props.name}</h2>
          <div className="flex flex-wrap gap-1.5">
            {props.tools.slice(0, 4).map((tag) => {
              return (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--line)] bg-[var(--surface-muted)] px-2 py-1 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-[var(--ink-soft)]"
                >
                  {tag}
                </span>
              );
            })}
          </div>
          <p className="line-clamp-4 text-sm leading-6 text-[var(--ink-soft)]">{props.description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {props.demo != null && (
            <Link
              href={props.demo}
              target="_blank"
              className="primary-button px-4 py-2 text-xs"
            >
              Demo
            </Link>
          )}
          {props.source != null && (
            <Link
              href={props.source}
              target="_blank"
              className="secondary-button px-4 py-2 text-xs"
            >
              Source Code
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default Project;
