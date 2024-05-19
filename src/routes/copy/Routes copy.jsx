import Home from '../../pages/Home.jsx';
import Error from '../../pages/Error.jsx';
import Pokemons from '../../pages/Pokemons.jsx';
import Pokedex from '../../pages/Pokedex.jsx';

import Layout from '../components/Layout.jsx';
import ErrorsBoundary, { ErrorFallbackRoot } from '../../components/ErrorBoundary.jsx';

import UseCopyObject from '../../hooks/UseCopyObject.jsx';

const RoutesApp = [
  {
    root: true,
    name: 'Layout',
    status: 'on',
    props:
      {
        element: <Layout />,
        errorElement: <ErrorFallbackRoot />,
      }
    ,
    children: [
      {
        name: 'Home',
        status: 'on',
        props:
          {
            path: ['', '/', 'Home', 'Index'],
            element: <Home />,
            index: true
          },
      },
      {
        name: 'Error',
        status: 'on',
        props:
          {
            path: '*',
            element: <Error />,
          }
      },
      {
        name: 'Pokemons',
        status: 'on',
        props:
          {
            path: '/pokemons',
            element: <Pokemons />,
          }
      },
      {
        name: 'Pokedex',
        status: 'on',
        props:
          {
            path: '/pokedex',
            element: <Pokedex />,
          }
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
  }
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
];

const RoutesOn = () => {
    //var elementMap = { ... Routes };
    //var elementMap = Object.assign({}, Routes);
    var elementMap = UseCopyObject(RoutesApp);

    return elementMap.map((routeParent, index) => {
      if (!routeParent?.status) {
          return '!routeParent?.status';
        }
        if (routeParent.status != 'on') {
          return '!routeParent?.status == on';
        }
        if (!routeParent?.children) {
          return '!routeParent?.children';
        }

        routeParent.children = routeParent.children.filter((routeChild, index) => {
          return routeChild.status == 'on';
        });

        return routeParent;
    });
}

export default RoutesApp;
export { RoutesOn };