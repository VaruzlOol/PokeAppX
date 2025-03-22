import { useEffect } from 'react';
import { useWindowSize } from '../hooks/UseWindowSize.jsx';
import useThemeSystem from '../hooks/UseThemeSystem.jsx';
import UseLightMode, { UseLightMode2 } from '../hooks/UseLightMode.jsx';
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
    const [mode, setMode] = UseLightMode2();

    return (
        <div className = ''>
            <span>ThemeUser.colorTheme: { colorTheme }</span>
            <br />
            <span>ThemeUser.mode: { mode }</span>
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