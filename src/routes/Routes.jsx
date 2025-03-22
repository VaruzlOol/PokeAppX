import { Suspense, lazy } from 'react';

import RoutesLoader from '../components/loaders/RoutesLoader.jsx';
import PokeBallLoader from '../components/loaders/pokeBall/PokeBallLoader.jsx';
import ErrorsRoute from '../components/boundaries/ErrorRoute.jsx';

// import Layout from '../components/structure/Layout.jsx';
// import Home from '../pages/Home.jsx';
// import Error from '../pages/Error.jsx';
// import Pokemons from '../pages/Pokemons.jsx';
// import Pokedex from '../pages/Pokedex.jsx';
// import Information from '../pages/Information.jsx';
// import Status from '../pages/Status.jsx';

const Layout = lazy(() => import('../components/structure/Layout.jsx'));
const Home = lazy(() => import('../pages/Home.jsx'));
const Error = lazy(() => import('../pages/Error.jsx'));
const Pokemons = lazy(() => import('../pages/Pokemons.jsx'));
const Pokedex = lazy(() => import('../pages/Pokedex.jsx'));
const Information = lazy(() => import('../pages/Information.jsx'));
const Status = lazy(() => import('../pages/Status.jsx'));

const RoutesApp = (isRenderElements) => { 

  const routesApp = 
  [
    {
      element: <Suspense fallback = {<PokeBallLoader />}><Layout /></Suspense>,
      //loader: <RoutesLoader />,
      errorElement: <ErrorsRoute />,
      children: [
        {
          path: '',
          element: <Home />,
          children: [
            {
              path: '/',
              index: true,
              element: <Home />,
            },
            {
              path: '/home',
              element: <Home />,
              nameParent: true
            },
            {
              path: 'index',
              element: <Home />,
            }
          ]
        },
        {
          path: '*',
          element: <Error />,
          visible: true
        },
        {
          path: '/pokemons',
          element: <Pokemons />,
        },
        {
          path: '/pokedex',
          element: <Pokedex />,
        },
        {
          path: '/information',
          element: <Information />
        },
        {
          path: '/status',
          element: <Status />
        }
      ]
    },
  ];

  return(routesApp);
}

const RoutesAppNav = (routes) => {
  const routesApp =  RoutesApp(false);
  var availableRoutes = [];

  const deleteReactElement = (element) =>{
    if (element?.element) delete element.element;

    if (element?.errorElement) delete element.errorElement;

    return element;
  }

  const mapChildren = (elements) => {
    elements.map((element, index) => {
      if (element?.children) {
        var nameParent = element.children.filter((value, index) => { 
          if (value?.nameParent == true) {
            return index;
          }
        });

        if (nameParent.length == 0) {
          mapChildren(element.children);
        }else{
          nameParent = nameParent[0];
          nameParent.nameParent = element.path;
          nameParent = deleteReactElement(nameParent);
          availableRoutes.push(nameParent);

          //console.warn(index);
          //console.warn(nameParent[0]);
        }
        
      }else{
        if (!(element?.visible == false)) {
          element = deleteReactElement(element);
          availableRoutes.push(element);
        }
        
        //console.warn(index);
        //console.warn(element);
      }
    });
  }

  mapChildren(routesApp);

  return availableRoutes;
}

export default RoutesApp;
export { RoutesAppNav };