import type { ReactElement } from 'react';

const links: { name: string, link: string }[] = [
    { name: "Home", link: "/", },
    { name: "Projects", link: "/projects" },
]

function Layout({ children }: { children: ReactElement }): ReactElement {
    return (
        <>
            <nav className='flex justify-start p-5 px-10 gap-8'>
                {links.map((link) =>
                    <a href={link.link} className='font-bold py-2 px-5 hover:scale-105 active:scale-95 transition text-text_primary'>{link.name}</a>
                )}
            </nav>
            <main>{children}</main>
            <footer className='flex items-center justify-center p-8 gap-4 bg-background_darker'>
                @Jaden Edwards. All Rights Reserved.
            </footer>
        </>
    )
}

export default Layout