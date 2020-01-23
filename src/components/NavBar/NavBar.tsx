import React from "react";
import { Nav, StyledNavLink } from "./NavBar.styles";
import { routes } from "../../globals/routes";

const NavBar = () => {
  return (
    <Nav className="navbar">
      {routes.map(route => (
        <StyledNavLink key={route.title} to={route.to}>
          {route.title}
        </StyledNavLink>
      ))}
    </Nav>
  );
};

export default NavBar;
