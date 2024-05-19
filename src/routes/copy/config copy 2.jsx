import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useLocation } from 'react-router-dom';
import React from 'react';

import Home from '../../pages/Home.jsx';
import Error from '../../pages/Error.jsx';
import Pokemons from '../../pages/Pokemons.jsx';
import Pokedex from '../../pages/Pokedex.jsx';

import Layout from '../components/Layout.jsx';
import ErrorsBoundary, { ErrorFallbackRoot } from '../../components/ErrorBoundary.jsx';

export const routes = (
  [{
    parent: 'layout',
    element: <Layout />,
    children: [
      {
        path: '/',
        status: 'on',
        name: '/',
        element: <Home />
      },
      {
        path: '/home',
        status: 'on',
        name: 'Home',
        element: <Home />,
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
  }]
);

const routesFromElements = createRoutesFromElements(
  <Route element = { <Layout/> } errorElement = { <ErrorFallbackRoot /> } >
    
    <Route index element={ <Home/> } />
    <Route path = '/' element={ <Home/> } />
    <Route path = '/Home' element={ <Home/> } />

    <Route path = '/Pokes' element={ <Pokes/> } />
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