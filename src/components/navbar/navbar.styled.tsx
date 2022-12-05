import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Container = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;

  height: 50px;

  background-color: purple;
`;
export const LinkContainer = styled.div`
  display: flex;
`;

interface FontProps {
  home?: string;
}
export const LinkTag = styled(Link)<FontProps>`
  display: flex;
  align-items: center;

  color: white;
  text-decoration: none;
  height: 100%;

  &:hover,
  &:focus {
    color: blue;
  }

  &:active {
    color: red;
  }

  ${({ home }) => css`
    font-size: ${home ? "20px" : "28px"};
    padding: ${home ? "0 20px" : " 0 10px "};
    border-right: ${home ? " 3px solid white" : ""};
  `}
`;
