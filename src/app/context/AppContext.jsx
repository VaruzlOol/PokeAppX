import React, { createContext, useCallback, useState, useMemo } from "react";

const AppContext = createContext({});
const value = 'VALUE FROM APP CONTEXT';

function AppProvider({ children }){
    const contextValue = useMemo(() => ({
        value
    }) , [value]);

    return(
        <AppContext.Provider value = { contextValue }>
            { children }
        </AppContext.Provider>
    );
}

export default AppProvider;
export { AppContext };