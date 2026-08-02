import Link from "next/link";

function LogoLink(props: { href: string; src: any; label: string }) {
  return (
    <Link
      aria-label={props.label}
      className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-strong)] text-[var(--sage-deep)] transition duration-200 hover:bg-[var(--surface-hover)]"
      href={props.href}
      target="_blank"
    >
      <props.src width="24" height="24" />
    </Link>
  );
}

export default LogoLink;
