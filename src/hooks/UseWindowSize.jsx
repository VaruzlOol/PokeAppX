import { useState, useLayoutEffect } from 'react';
import { useAddEventListener, useRemoveListener }  from './UseWindowListener.jsx'

export function useWindowSize(){
    const [windowSize, setWindowSize] = useState({ with: 0, height: 0 });

    const handleSize = () => {
        setWindowSize({
            with: window.innerWidth, 
            height: window.innerHeight
        });
      };

    useLayoutEffect(() => {
        handleSize();
        useAddEventListener("resize", handleSize);

        return () => useRemoveListener("resize", handleSize);
    }, []);

    return windowSize;
}