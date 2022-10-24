function LogoLink(props: { href: string; src: any }) {
    return (
        <a className='w-8 h-8 shadow-md text-button_primary' href={props.href} target='_blank'>
            <props.src width='inherit' height='inherit' />
        </a>
    )
}

export default LogoLink