import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarHeader = styled.h1`
  background-color: black;
`;

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 50px;
  background-color: purple;
  display: flex;
  flex-direction: column; ;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  &:hover,
  &:focus {
    color: blue;
  }
  &:active {
    color: red;
  }
`;

export const DetailButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
`;
