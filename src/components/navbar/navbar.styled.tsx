import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Header = styled.h1`
  background-color: black;
`;

export const Container = styled.nav`
  width: 100%;
  height: 50px;
  background-color: purple;
  display: flex;
  justify-content: space-between;
`;

export const LinkContainer = styled.div`
  display: flex;
  text-align: end;
`;

export const LinkTag = styled(Link)`
  color: white;
  font-size: x-large;
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
