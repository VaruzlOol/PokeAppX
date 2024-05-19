import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RoutesApp from '../routes/Routes.jsx'

function RoutesProvider(){
  const Routes = RoutesApp();

  return (
    <RouterProvider router = { router(Routes) } />
  );
}

const router = (routes) => {
  return(createBrowserRouter(routes));
}


export default RoutesProvider;
export { router };