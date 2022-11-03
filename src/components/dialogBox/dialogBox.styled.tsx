import styled from "styled-components";

//padding이 왜 있는지 모르겠음. 그치만 필요한거같아.
export const Backdrop = styled.div`
  display: flex;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.2);
`;

export const DialogBox = styled.dialog`
  display: flex;

  width: 450px;
  height: 450px;
  border: none;
  border-radius: 20px;
  padding: 0;

  background-color: white;

  box-sizing: border-box;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
`;
