import React from "react";
import { Link } from "react-router-dom";
import {
  NavbarHeader,
  NavbarContainer,
  NavbarLinkContainer,
  NavbarLink,
} from "styles/NavStyled.styled";
export interface INavProps {}

// import * as S from "./nav.styled";

const Nav: React.FC<INavProps> = (porps) => {
  return (
    <>
      <NavbarHeader>
        <NavbarLink className="nav-link active" to="/home">
          Home
        </NavbarLink>
      </NavbarHeader>
      <NavbarContainer>
        <NavbarLinkContainer>
          <NavbarLink className="nav-link" to="/popular">
            popular
          </NavbarLink>
          <NavbarLink className="nav-link" to="/my">
            my
          </NavbarLink>
        </NavbarLinkContainer>
      </NavbarContainer>
    </>
  );
};

export default Nav;
