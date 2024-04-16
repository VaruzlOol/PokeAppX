export default function Footer(props){
    return (
        <footer className = {`footer ${ props?.className ? props.className : '' }`}>
            Footer
        </footer>
    )
}