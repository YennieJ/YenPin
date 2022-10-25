import { Link } from "react-router-dom";
import styled from "styled-components";

interface LinkProps {
  children?: React.ReactNode;
}

export const Header = styled.h1`
  background-color: black;
`;

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 50px;

  background-color: purple;
`;

export const LinkContainer = styled.div`
  display: flex;
  text-align: end;
`;

export const LinkTag = styled(Link)`
  padding: 10px;

  color: white;
  font-size: x-large;
  text-decoration: none;

  &:hover,
  &:focus {
    color: blue;
  }

  &:active {
    color: red;
  }
`;
