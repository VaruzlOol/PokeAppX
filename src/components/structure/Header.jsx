import LightModeToggle from "../LightModeToggle.jsx";

export default function Header(props){
    return (
        <header className = {`header ${ props?.className ? props.className : '' }`}>
            Header
            <LightModeToggle />
            { props.children }
        </header>
    )
}