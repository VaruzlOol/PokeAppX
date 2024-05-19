import { useMemo, useContext } from "react";
import { Link, useMatch, useLocation, NavLink } from "react-router-dom";
import { RoutesAppNav } from '../../routes/Routes.jsx'

let routesApp;

function Nav(props){
  routesApp = useMemo(() => RoutesAppNav(), []);

  return(
    <div className = {`nav ${ props?.className ? props.className : '' }`}>
      <ul className = "nav-list">
        { <NavRoutes /> }
      </ul>
    </div>
  )
}

const NavRoutes = () => {
  return routesApp.map((element, index) => {
    var href = element.path;
    var name = {  };
    
    name = href.includes('/') ? href.split('/')[1] : href;
    href = name;
    name = name.length > 1 ? name.substring(0,1).toUpperCase() + name.substring(1): name;
    
    if (element?.nameParent === '') {
      href = element.nameParent;
    }

    return( <NavLinkItem key = { index } href = { href } name = { name } /> );
  });
}
  
const NavLinkItem = (props) => {
  const { href, name } = props;

  // console.log("href|" + href);
  // console.log("name|" + name);

  return(
    <li>
      <NavLink 
        to = { href }
        className = {({ isActive, isPending, isTransitioning }) =>
          [
            isPending ? "pending" : "",
            isActive ? "active" : "",
            isTransitioning ? "transitioning" : "",
          ].join("")
        }
        style = {({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            textDecoration: isActive ? "underline" : "",
            color: isPending ? "red" : "",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        <span>
          { name }
        </span>
      </NavLink>
    </li>
  )
}
  
const MatchLink = (href) => {
  const match = useMatch("/messages");
  return <li className={ Boolean(match) ? "active" : "" } />;
}

export default Nav;