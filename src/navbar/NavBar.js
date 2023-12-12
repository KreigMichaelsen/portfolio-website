import { Link, NavLink as RRNavLink} from "react-router-dom"
import { NavItem, Navbar, NavLink, Nav, } from "reactstrap"
import "./NavBar.css"

export const NavBar = () => {
	return (
    <Navbar className="Navbar">
        <Nav className="Nav">
              <NavItem className="NavItem">
                  <NavLink className="NavLink" tag={RRNavLink} to="/portfolio-website">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem className="NavItem">
                  <NavLink  className="NavLink" tag={RRNavLink} to="/portfolio-website/aboutMe">
                   About Me
                  </NavLink>
                </NavItem>
                <NavItem className="NavItem" >
                  <NavLink className="NavLink" tag={RRNavLink} to="/portfolio-website/projects">
                  My Projects
                  </NavLink>
                </NavItem>
        </Nav>
        </Navbar>

    // <div className="navbar">
    //   <div className="navbarItemsContainer">
    //   <li className="navbar__item">
    //     <Link className="navbar__link" to="/home">Home</Link>
    //   </li>
    //   <li className="navbar__item">
    //     <Link className="navbar__link" to="/coffeeShops">About Me</Link>
    //   </li>
    //   <li className="navbar__item">
    //     <Link className="navbar__link" to="/userCoffeeShops">My Projects</Link>
    //   </li>
    //   <li className="navbar__item">
    //     <Link className="navbar__link" to="/users">Connect</Link>
    //   </li>
    //   </div>
    // </div>
              



       
    )
    
}