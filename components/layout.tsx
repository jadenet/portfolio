import type { ReactElement } from 'react';

interface LayoutProps {
    children: ReactElement;
}

const links = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
]

function Layout({ children }: LayoutProps) {
    return (
        <>
            <nav className="absolute flex top-0 justify-start p-5 px-10 gap-8">
                {links.map((link) =>
                    <a href={link.link} className="font-bold py-2 px-5 hover:scale-105 active:scale-95 transition text-text_primary">{link.name}</a>
                )}
            </nav>
            <main>{children}</main>
            <footer className="flex items-center justify-center p-8 gap-4 bg-background_darker">
                @Jaden Edwards. All Rights Reserved.
            </footer>
        </>
    )
}

export default Layout