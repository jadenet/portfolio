import type { ReactElement } from 'react';

interface LayoutProps {
    children: ReactElement;
}

const links = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "About", link: "/about" },
]

function Layout({ children }: LayoutProps) {
    return (
        <>
            <nav className="absolute flex top-0 justify-start py-5 px-5 md:px-10 gap-8">
                {links.map((link) =>
                    <a href={link.link} className="font-bold py-2 px-5 hover:scale-105 active:scale-95 transition">{link.name}</a>
                )}
            </nav>
            <main className="flex-1">{children}</main>
            <footer className="flex items-center justify-center p-8 gap-4 bg-gray-900">
                ©Jaden Edwards. All Rights Reserved.
            </footer>
        </>
    )
}

export default Layout