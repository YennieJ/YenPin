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

interface LinkBoxProps {
  home?: string;
  isActive: boolean;
}

export const LinkBox = styled.span<LinkBoxProps>`
  display: flex;
  align-items: center;
  border-right: ${(props) => (props.home ? " 3px solid white" : "")};

  a {
    display: block;
    color: ${(props) => (props.isActive ? "blue" : "white")};
    ${({ home }) => css`
      font-size: ${home ? "40px" : "28px"};
      padding: ${home ? "0 20px" : " 0 10px "};
    `}
    &:hover {
      color: blue;
    }
  }
`;
