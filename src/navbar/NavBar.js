import { Link, NavLink as RRNavLink} from "react-router-dom"
import { NavItem, Navbar, NavLink, Nav, } from "reactstrap"
import "./NavBar.css"
import { useEffect, useState } from "react";

export const NavBar = () => {


  // const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const offset = window.scrollY;
  //     setIsNavbarFixed(offset > 0);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener when the component is unmounted
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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


            
       
    )
    
}