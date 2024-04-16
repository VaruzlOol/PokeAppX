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
        <h1 className='text-3xl font-bold underline'>Vite + React</h1>
        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
          <p>
            {poke}
          </p>
        </div>
      </div>
      </>
    )
  }
  
  export default Home;
  