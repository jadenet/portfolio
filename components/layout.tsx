import type { ReactElement } from 'react';

function Layout({ children }: { children: ReactElement }): ReactElement {
    return (
        <>
            <main>{children}</main>
        </>
    )
}

export default Layout