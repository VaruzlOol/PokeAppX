import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const UseWindowTitleRoot = () => {
  const location = useLocation();
  const [titleRoot, setTitleRoot] = useState(window.document.title); 

  useEffect(() => {
      var currentTitle = location.pathname.split('/')[1];
      currentTitle = !currentTitle || currentTitle.length == 1 
        ? '' 
        : `${ currentTitle.substring(0, 1).toUpperCase() +  currentTitle.substring(1)}`;
      window.document.title = `${ currentTitle } ${currentTitle && currentTitle.length > 0 ? ' | ' : ''} ${ titleRoot }`;
    }, [location]);
}

function UseWindowTitle (){
  const [titleCurrent, setTitleCurrent] = useState('');
  const title = '[PokeAppX]';

  window.document.title = titleCurrent + ' | ' + title;

    return [titleCurrent, setTitleCurrent]
}

export default UseWindowTitleRoot;
export { UseWindowTitle };