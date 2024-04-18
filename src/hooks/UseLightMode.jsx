import { useState, useEffect } from "react";

export default function UseLightMode() {
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