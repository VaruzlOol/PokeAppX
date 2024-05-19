import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

import Home from '../../pages/Home.jsx';
import Error from '../../pages/Error.jsx';
import Pokemons from '../../pages/Pokemons.jsx';
import Pokedex from '../../pages/Pokedex.jsx';

import Layout from '../components/Layout.jsx';
import ErrorsBoundary, { ErrorFallbackRoot } from '../../components/ErrorBoundary.jsx';

export const routes = (
  [
    {
      root: 'Layout',
      element: <Layout />,
      errorElement: <ErrorFallbackRoot />,
      children: [
        {
          path: '/',
          status: 'on',
          names: ['', '/', 'Home'],
          element: <Home />,
          props: function(){return ([Route.index])}
        },
        {
          path: '*',
          status: 'on',
          name: 'Error',
          element: <Error />,
        },
        {
          path: '/pokemons',
          status: 'on',
          name: 'Pokemons',
          element: <Pokemons />,
        },
        {
          path: '/pokedex',
          status: 'on',
          name: 'Pokedex',
          element: <Pokedex />,
        },

        {
          path: '/generations',
          element: <Error />,
        },
        {
          path: '/regions',
          element: <Error />,
        },
        {
          path: '/types',
          element: <Error />,
        },
        {
          path: '/species',
          element: <Error />,
        },
        {
          path: '/login',
          element: <Error />,
        },
        {
          path: '/profile',
          element: <Error />,
        },
        {
          path: '/about',
          element: <Error />,
        }
      ]
    },
    /*
    {
      root: 'Layout2',
      element: <Layout />,
      errorElement: <ErrorFallbackRoot />,
      children: [
        {
          path: '*',
          status: 'on',
          name: 'Error',
          element: <Error />,
        }
      ]
    }
    */
  ]
);

export const routesOn = (elements = undefined) => {
  return routes.map((routeParent, index) => {
    if (!routeParent?.children) {
      return;
    }

    routeParent.children = routeParent.children.filter((routeChild, index) => {
      return routeChild.status == 'on';
    });

    return routeParent;
  });
}

console.log(routes);
console.log(routesOn);


const routesFromElements = createRoutesFromElements(
  <Route element = { <Layout/> } errorElement = { <ErrorFallbackRoot /> } >
    
    <Route index element={ <Home/> } />
    <Route path = '/' element={ <Home/> } />
    <Route path = '/Home' element={ <Home/> } />

    <Route path = '/Pokedex' element={ <Pokedex/> } />
    <Route path = '/Pokemons' element={ <Pokemons/> } />
    <Route path = '*' element={ <Error/> } />

    <Route path='/etc' errorElement={<ErrorsBoundary />}
    />
  </Route>
);

const router = createBrowserRouter(routesFromElements);

const RoutesProvider = () => {
  return (<RouterProvider router = { router } />);
}

export default RoutesProvider;