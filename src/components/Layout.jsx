import {  Outlet  } from 'react-router-dom';
import ErrorsBoundary from '../components/ErrorBoundary.jsx';

import Header from './structure/Header.jsx';
import Nav from './structure/Nav.jsx';
import Main from './structure/Main.jsx';
import Footer from './structure/Footer.jsx';
import AppProvider from '../app/context/AppContext.jsx';

export default function Layout(){
  return (
    <>
      <AppProvider>
        <div className = 'app divide-y'>
          <Header className = { 'bg-white dark:bg-black max-2xl:xl:lg:sticky sm:md:absolute' }>
            <Nav />
          </Header>
          <Main>
            <ErrorsBoundary>
              <Outlet />
            </ErrorsBoundary>
          </Main>
          <Footer />
        </div>
      </AppProvider>
    </>
  )
}