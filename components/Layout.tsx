import type { ReactElement } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactElement;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

const links = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "About", link: "/about" },
];

function Layout({ children, theme, onToggleTheme }: LayoutProps) {
  const router = useRouter();

  return (
    <>
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-6 pt-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-40 mb-8">
          <nav className="surface-panel flex items-center justify-between gap-4 rounded-2xl px-4 py-3 sm:px-6">
            <Link href="/" className="font-display text-2xl font-semibold tracking-[0.18em] text-[var(--ink)]">
              JE
            </Link>

            <div className="flex flex-wrap items-center justify-end gap-2">
              {links.map((link) => {
                const isActive = router.pathname === link.link;

                return (
                  <Link
                    key={link.link}
                    href={link.link}
                    className={`rounded-full px-4 py-2 text-sm font-semibold tracking-[0.08em] transition duration-200 ${
                      isActive
                        ? "bg-[var(--sage-deep)] text-white"
                        : "text-[var(--ink-soft)] hover:bg-[var(--surface-hover)] hover:text-[var(--ink)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <button
                type="button"
                onClick={onToggleTheme}
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-strong)] px-4 text-sm font-semibold tracking-[0.08em] text-[var(--ink)] transition duration-200 hover:bg-[var(--surface-hover)]"
              >
                <span aria-hidden="true" className="text-base leading-none">
                  {theme === "light" ? "☾" : "☀"}
                </span>
                <span>{theme === "light" ? "Dark" : "Light"}</span>
              </button>
            </div>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-12 border-t border-[var(--line)] py-6 text-center text-sm text-[var(--ink-soft)]">
          © Jaden Edwards. All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default Layout;
