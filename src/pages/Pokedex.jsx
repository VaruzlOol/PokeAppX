import { useCallback, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom"

import { UseWindowTitle } from '../hooks/UseWindowTitle.jsx';

export default function Pokedex(){
    const context = useOutletContext();

    const [titleCurrent, setTitleCurrent] = UseWindowTitle();

    useEffect(() => {
        setTitleCurrent('[PokeDex]');
    } , []);
    //console.error(titleCurrent);

    return(
        <div>
            <span>
            Pokedex { context.App }
            </span>
        </div>
    )
}