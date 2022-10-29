import styled, { css } from "styled-components";

export const SidebarContainer = styled.div`
  width: 15rem;
  text-align: end;
`;

export const SidebarBackground = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 1;

  width: 15rem;
  height: 400px;

  background-color: purple;
`;

interface ButtonProps {
  font?: number;
  close?: boolean;
}

export const SidebarButton = styled.button<ButtonProps>`
  width: 100%;
  height: 50px;
  border: none;

  background: none;

  color: white;

  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  font-size: ${({ font }) => (font ? `${font}px` : "x-large")};
  ${({ close }) => css`
    text-align: ${close ? "end" : ""};
    padding: ${close ? "0 30px 0 0" : "0"};
  `}
`;
