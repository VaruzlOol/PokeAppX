export default function Header(props){
    return (
        <header className = {`header ${ props?.className ? props.className : '' }`}>
            Header
            { props.children }
        </header>
    )
}