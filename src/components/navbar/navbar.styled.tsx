import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: center;

  padding: 50px;

  background-color: black;
`;

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;

  margin-top: 10px;
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
  font?: number;
}
export const LinkTag = styled(Link)<FontProps>`
  margin-right: 20px;

  color: white;
  text-decoration: none;

  &:hover,
  &:focus {
    color: blue;
  }

  &:active {
    color: red;
  }

  font-size: ${({ font }) => (font ? `${font}px` : "28px")};
`;
