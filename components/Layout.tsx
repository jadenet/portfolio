import type { ReactElement } from "react";
import Link from "next/link";

interface LayoutProps {
  children: ReactElement;
}

const links = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
];

function Layout({ children }: LayoutProps) {
  return (
    <>
      <nav className="flex top-0 py-5 px-5 md:px-10 gap-8">
        {links.map((link) => (
          <Link
            href={link.link}
            className="font-bold py-2 px-5 hover:scale-105 active:scale-95 transition"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <main className="flex-1">{children}</main>
      <footer className="flex items-center justify-center p-8 gap-4 bg-gray-900">
        ©Jaden Edwards. All Rights Reserved.
      </footer>
    </>
  );
}

export default Layout;
