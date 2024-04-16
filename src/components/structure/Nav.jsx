import { Link, useMatch, useLocation, NavLink } from "react-router-dom";

export default function Nav(props){
    return(
      <div className = {`nav ${ props?.className ? props.className : '' }`}>
        <ul className = "nav-list">
          <NavLinkItem href = 'Home' />
          <NavLinkItem href = 'Pokes' />
          <NavLinkItem href = 'Error' />
        </ul>
      </div>
    )
  }
  
  const NavLinkItem = (props) => {
    const { href } = props;
  
    console.log(href);
  
    if (href == null || href == undefined) {
      return `NavLinkItem [${ href }]`;
    }
  
    return(
      <li>
        <NavLink 
          to = { href.toLowerCase() }
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
            { href }
          </span>
        </NavLink>
      </li>
    )
  }
  
  const MatchLink = (href) => {
    const match = useMatch("/messages");
    return <li className={ Boolean(match) ? "active" : "" } />;
  }