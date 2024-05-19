import { Suspense, lazy } from 'react';

import RoutesLoader from '../components/loaders/RoutesLoader.jsx';
import ErrorsRoute from '../components/boundaries/ErrorRoute.jsx';

// import Layout from '../components/structure/Layout.jsx';
// import Home from '../pages/Home.jsx';
// import Error from '../pages/Error.jsx';
// import Pokemons from '../pages/Pokemons.jsx';
// import Pokedex from '../pages/Pokedex.jsx';
// import Information from '../pages/Information.jsx';

const Layout = lazy(() => import('../components/structure/Layout.jsx'));
const Home = lazy(() => import('../pages/Home.jsx'));
const Error = lazy(() => import('../pages/Error.jsx'));
const Pokemons = lazy(() => import('../pages/Pokemons.jsx'));
const Pokedex = lazy(() => import('../pages/Pokedex.jsx'));
const Information = lazy(() => import('../pages/Information.jsx'));

const RoutesApp = (isRenderElements) => { 

  const routesApp = 
  [
    {
      element: <Suspense fallback = {<RoutesLoader />}><Layout /></Suspense>,
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
          path: 'pokedex',
          element: <Pokedex />,
        },
        {
          path: '/information',
          element: <Information />
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
  expensiveCalculation(1)
  return availableRoutes;
}

const expensiveCalculation = (num) => {
  console.warn("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    for (let i = 0; i < 1; i++) {
      num += 1;
    }
    num += 1;
  }
  console.warn("End calculating. " + num);
  return num;
};

export default RoutesApp;
export { RoutesAppNav, expensiveCalculation };