import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: center;

  padding: 50px;
  margin-bottom: 10px;

  background-color: black;
`;

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;

  padding-left: 20px;
  align-items: center;

  height: 50px;

  background-color: purple;
`;
export const LinkContainer = styled.div`
  display: flex;
  text-align: end;
`;
interface FontProps {
  home?: boolean;
}
export const LinkTag = styled(Link)<FontProps>`
  color: white;
  text-decoration: none;

  &:hover,
  &:focus {
    color: blue;
  }

  &:active {
    color: red;
  }

  ${({ home }) => css`
    font-size: ${home ? "50px" : "28px"};
    margin-right: ${home ? "" : "20px"};
  `}
`;
