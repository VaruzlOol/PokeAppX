import { useState,useEffect } from 'react'
import { Pokedex } from 'pokeapi-js-wrapper';

const customOptions = {
    protocol: "https",
    versionPath: "/api/v2/",
    cache: false,
    cacheImages: false,
    timeout: 5 * 1000 // 5s
  }
  
  const P = new Pokedex(customOptions);

  function Home() {
    const [count, setCount] = useState(0);
    const [poke, setPoke] = useState('undefinded');
  
    useEffect(() => {
      P.getPokemonByName('eevee').then(function(response) {
        setPoke(JSON.stringify(response));
        console.log(response.forms);
      })
    },[setPoke]);
  
    return (
      <>
      <div className='container'>
        <h1 className='text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight underline'>Vite + React</h1>
        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
          <p className='text-slate-500 dark:text-slate-400 mt-2 text-sm'>
            {poke}
          </p>
        </div>
      </div>
      </>
    )
  }
  
  export default Home;
  