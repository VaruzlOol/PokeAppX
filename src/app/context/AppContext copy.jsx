import React, { useCallback, useState, useMemo } from "react";

export const AppContext = React.createContext({});

export default function AppProvider({ children }){
    const [theme, setTheme] = useState('light');

    const contextValue = useMemo(() => ({
        theme
    }) , [theme]);

    return(
        <AppContext.Provider value = { contextValue }>
            { children }
        </AppContext.Provider>
    );
}