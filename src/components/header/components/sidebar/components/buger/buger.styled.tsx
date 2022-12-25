import styled from "styled-components";

interface Props {
  open: boolean;
  onClick: () => void;
}

export const StyledBurger = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: end;

  height: 50px;
  padding: 10px 10px;

  cursor: pointer;

  div {
    width: 30px;
    height: 4px;
    background-color: ${(props) => props.theme.textColor};
    border-radius: 10px;
    transform-origin: 1px;

    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
