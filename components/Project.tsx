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
  const imageSource = props.image ?? "/images/projects/placeholder-project.svg";

  return (
    <article className="surface-panel flex h-[25.5rem] w-full flex-col overflow-hidden rounded-[1.5rem]">
      <div className="relative h-44 border-b border-[var(--line)] bg-[var(--surface-subtle)]">
        <Image
          aria-hidden
          src={imageSource}
          fill
          alt=""
          className="absolute h-full w-full scale-110 object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--surface-subtle)]/60" />
        <Image
          src={imageSource}
          fill
          alt="Project image"
          sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 95vw"
          className="absolute h-full w-full object-contain p-3 drop-shadow-[0_14px_24px_rgba(0,0,0,0.28)]"
        />
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
              className="secondary-button px-4 py-2 text-xs"
            >
              Demo
            </Link>
          )}
          {props.source != null && (
            <Link
              href={props.source}
              target="_blank"
              className="primary-button px-4 py-2 text-xs"
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
