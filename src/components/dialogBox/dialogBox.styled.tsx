import styled, { css } from "styled-components";

export const Backdrop = styled.div`
  display: flex;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.2);
`;

interface DialogBoxProps {
  preview?: boolean;
}
export const DialogBox = styled.dialog<DialogBoxProps>`
  display: flex;

  /* width: 450px;
  height: 500px; */
  border: none;
  border-radius: 20px;
  padding: 0;

  background-color: white;

  box-sizing: border-box;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);

  ${({ preview }) => css`
    width: ${preview ? "880px" : "450px"};
    height: ${preview ? "530px" : "500px"};
  `}
`;
