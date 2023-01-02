import styled from "styled-components";

export const Backdrop = styled.div`
  display: flex;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100vw;
  height: 100vh;

  background-color: ${(props) => props.theme.hoverColor};
`;

export const DialogBox = styled.dialog`
  display: flex;

  border: none;
  border-radius: 20px;
  padding: 0;

  width: 450px;
  height: 500px;

  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.contentBgColor};
`;
