import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, useLocation } from "react-router-dom";
import React from 'react';

import Home from '../pages/Home/Home.jsx';
import Pokes from '../pages/Pokes/Pokes.jsx';
import Error from '../pages/Error/Error.jsx';
import Layout from "../components/Layout.jsx";
import ErrorsBoundary, { ErrorFallbackRoot } from "../components/ErrorBoundary.jsx";

export const routes = (
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: '*',
      element: <Error />,
    },
    {
      path: '/pokemons',
      element: <Error />,
    },
    {
      path: '/pokedex',
      element: <Error />,
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
);

const routesFromElements = createRoutesFromElements(
  <Route element = { <Layout/> } errorElement = { <ErrorFallbackRoot /> } >
    
    <Route index element={ <Home/> } />
    <Route path = "/" element={ <Home/> } />
    <Route path = "/Home" element={ <Home/> } />

    <Route path = "/Pokes" element={ <Pokes/> } />
    <Route path = "*" element={ <Error/> } />

    <Route path="/etc" errorElement={<ErrorsBoundary />}
    />
  </Route>
);

const router = createBrowserRouter(routesFromElements);

const RoutesProvider = () => {
  return (<RouterProvider router = { router } />);
}

export default RoutesProvider;