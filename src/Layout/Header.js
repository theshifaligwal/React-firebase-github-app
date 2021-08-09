import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../Context/UserContext";

const Header = () => {
  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white">
          Gitfire App
        </Link>
      </NavbarBrand>
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className="text-white">Sigin</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-white">Sigout</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-white">Logout</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
