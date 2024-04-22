import { useWindowSize } from "../../hooks/UseWindowSize"

export default function Footer(props){
    const WindowSize = useWindowSize();

    return (
        <footer className = {`footer ${ props?.className ? props.className : '' }`}>
            Footer
            <div>
                <span>WindowSize.with: { WindowSize.with }</span>
                <span>WindowSize.height: { WindowSize.height }</span>
            </div>
        </footer>
    )
}