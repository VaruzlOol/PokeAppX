function Header(props){
    return (
        <header className = {`header ${ props?.className ? props.className : '' }`}>
            { props.children }
        </header>
    )
}

export default Header;