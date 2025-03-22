import { useState } from "react";
import localforage from "localforage";
import DarkModeToggle from "react-dark-mode-toggle";
import UseLightMode, { UseLightMode2 } from "../hooks/UseLightMode.jsx";
 

export default function LightModeToggle() {
    const [colorTheme, setTheme] = UseLightMode2();
    const [LightSide, setLightSide] = useState(colorTheme === "dark" ? true : false);

    console.log(`colorTheme: ${ colorTheme }`);
    console.log(`LightSide: ${ LightSide }`);

    const toggleLightMode = (checked) => {
      setLightSide(checked);
      setTheme(checked ? 'dark' : 'light');  
    };

    /*
    localforage.setDriver([
        localforage.INDEXEDDB,
        localforage.WEBSQL,
        localforage.LOCALSTORAGE
        ]).then(function() {
        var key = 'STORE_KEY';
        // var value = 'What we save offline';
        var value = 'asdf';
        var UNKNOWN_KEY = 'unknown_key';
      
        localforage.setItem(key, value, function() {
          console.log('Using:' + localforage.driver());
          console.log('Saved: ' + value);
      
          localforage.getItem(key).then(function(readValue) {
            console.log('Read: ', readValue);
          });
      
          // Since this key hasn't been set yet, we'll get a null value
          localforage.getItem(UNKNOWN_KEY, function(err, readValue) {
            console.log('Result of reading ' + UNKNOWN_KEY, readValue);
          });
        });
      });
      
    */
    return (
        <>
            <DarkModeToggle
                className = {'Light-mode-toggle'}
                checked = { LightSide }
                onChange = { toggleLightMode }
                size = { 80 }
            />
        </>
    );
}