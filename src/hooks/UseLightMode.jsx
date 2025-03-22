import { useState, useEffect } from "react";
import useThemeSystem from "./UseThemeSystem";

function UseLightMode() {
    const [theme, setTheme] = useState(localStorage.theme || window.document.documentElement.classList[0]);
    const colorTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);

        if (localStorage.theme == "light")
            localStorage.removeItem("theme");
        else 
            localStorage.setItem("theme", theme);
    }, [theme, colorTheme]);
 
    return [colorTheme, setTheme];
}


function UseLightMode2(){
    //const themeSystem = useThemeSystem();
    const [mode, setMode] = useState(localStorage.theme || GetPrefersColorScheme());
    const opposedMode = mode === "light" ? "dark" : "light";

    useEffect(()=> {
        const root = window.document.documentElement;
        root.classList.remove(opposedMode);
        root.classList.add(mode);

        if (localStorage?.theme) {
            localStorage.removeItem("theme");
        }

        localStorage.setItem("theme", mode);
    }, [mode]);

    return [mode, setMode]
}

export default UseLightMode;
export { UseLightMode2 };