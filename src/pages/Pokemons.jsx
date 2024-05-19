import { useCallback, useEffect } from "react";

export default function Pokes(){
    const randomIntFromInterval = useCallback((min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }, []);
    
      useEffect(() => {
        const num = randomIntFromInterval(0, 5);
        if (num == 0) {
          throw new Error("SOME RANDOM ERROR " + num);
        }
      }, [randomIntFromInterval]);

    return(
        <div>
            <span>
                Pokes
            </span>
        </div>
    )
}