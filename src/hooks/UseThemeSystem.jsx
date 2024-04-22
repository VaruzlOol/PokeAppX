import { useState, useEffect } from 'react';
import { useAddEventListener, useRemoveListener } from './UseWindowListener.jsx';
import UseMatchMedia from './UseMatchMedia';

const MatchMedia = new UseMatchMedia();
let mediaQuery = '(prefers-color-scheme: dark)';

export function useThemeSystem() {
    const [themeSystem, setThemeSystem] = useState(undefined);
    let matchMedia = MatchMedia.getMatchMedia(mediaQuery);

    const handleTheme = () => {
        setThemeSystem(GetPrefersColorScheme());
      };
    
    useEffect(() => {
        handleTheme();
        useAddEventListener('change', handleTheme, matchMedia);

        return () => useRemoveListener('change', handleTheme, matchMedia);
    }, []);

    return themeSystem;
}

export function GetPrefersColorScheme() {
    if(!MatchMedia.existsMatchMedia)
        return 'light';
    return MatchMedia.getMatches(mediaQuery) ? 'dark' : 'light';
}

export default useThemeSystem;