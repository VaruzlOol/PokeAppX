import React, { Suspense, lazy } from 'react';
import {  Outlet  } from 'react-router-dom';

import UseWindowTitleRoot from '../../hooks/UseWindowTitle.jsx';
import ErrorOutlet from '../boundaries/ErrorOutlet.jsx';
import OutletLoader from '../loaders/OutletLoader.jsx';

import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

// const ErrorOutlet = lazy(() => import('../boundaries/ErrorOutlet.jsx'));
// const Header = lazy(() => import('./Header.jsx'));
// const Nav = lazy(() => import('./Nav.jsx'));
// const Main = lazy(() => import('./Main.jsx'));
// const Footer = lazy(() => import('./Footer.jsx'));


const SuspenseLayout = () => (
  <Suspense fallback = { <OutletLoader /> }>
    <Outlet context = {{ App: "PokeAppX" }}/>
  </Suspense>
);

function Layout(){
  UseWindowTitleRoot();
  return (
    <>
        <div className = 'app divide-y bg-white dark:bg-slate-800'>
          <Header className = { '' }>
            <Nav />
          </Header>
          <Main>
            <ErrorOutlet>
              <SuspenseLayout />
            </ErrorOutlet>
          </Main>
          <Footer />
        </div>
    </>
  )
}

export default Layout;
export { SuspenseLayout };