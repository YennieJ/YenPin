import styled, { css } from "styled-components";

export const SidebarContainer = styled.div`
  text-align: end;
  width: 18rem;
`;

export const SidebarBackground = styled.div`
  background-color: purple;
  height: 500px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ButtonProps {
  font?: number;
  close?: boolean;
}

export const SidebarButton = styled.button<ButtonProps>`
  height: 50px;
  cursor: pointer;
  border: none;
  background: none;
  color: white;
  width: 100%;
  text-align: ${({ close }) => (close ? "end" : "")};
  padding-right: ${({ close }) => (close ? "30px" : "")};
  font-size: ${({ font }) => (font ? `${font}px` : "x-large")};
  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
