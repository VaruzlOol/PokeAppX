import LightModeToggle from '../LightModeToggle.jsx';
import { useWindowSize } from '../../hooks/UseWindowSize';
import { useThemeSystem } from '../../hooks/UseThemeSystem.jsx';


export default function Header(props){
    const WindowSize = useWindowSize();
    const ThemeSystem = useThemeSystem();

    return (
        <header className = {`header ${ props?.className ? props.className : '' }`}>
            Header
            <div className = ''>
                <span>WindowSize.with: { WindowSize.with }</span>
                <span>WindowSize.height: { WindowSize.height }</span>
            </div>            
            <div className = ''>
                <span>ThemeSystem.themeSystem: { JSON.stringify(ThemeSystem) }</span>
            </div>
            <LightModeToggle />
            { props.children }
        </header>
    )
}