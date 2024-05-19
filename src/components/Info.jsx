import { useEffect } from 'react';
import { useWindowSize } from '../hooks/UseWindowSize.jsx';
import { useThemeSystem } from '../hooks/UseThemeSystem.jsx';
import UseLightMode from '../hooks/UseLightMode.jsx';
import LightModeToggle from './LightModeToggle.jsx';


function WindowSize(){
    const WindowSize = useWindowSize();

    return (
        <div className = ''>
            <span>WindowSize.with: { WindowSize.with }</span>
            <span>WindowSize.height: { WindowSize.height }</span>
        </div>        
    )
}

function ThemeSystem(){
    const ThemeSystem = useThemeSystem();
    
    return (
        <div className = ''>
            <span>ThemeSystem.themeSystem: { JSON.stringify(ThemeSystem) }</span>
        </div>
    )
}

function ThemeUser(){
    const [colorTheme, setTheme] = UseLightMode();

    useEffect(() => {
        //console.error(colorTheme)
    }, [colorTheme]);

    return (
        <div className = ''>
            <span>ThemeUser.themeUser: { colorTheme }</span>
        </div>
    )
}

function Info(){
    return (
        <>
            <WindowSize />
            <ThemeSystem />
            <ThemeUser />
            <LightModeToggle />
        </>
    )
}

export default Info;