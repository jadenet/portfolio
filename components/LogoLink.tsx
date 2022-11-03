function LogoLink(props: { href: string; src: any }) {
    return (
        <a className='font-bold hover:scale-105 active:scale-95 transition text-button_primary w-8 h-8' href={props.href} target='_blank'>
            <props.src width='inherit' height='inherit' />
        </a>
    )
}

export default LogoLink