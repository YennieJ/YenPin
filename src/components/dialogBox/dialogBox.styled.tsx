import styled from "styled-components";

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

  background-color: white;

  box-sizing: border-box;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
`;

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  place-items: center;

  width: 100%;
  height: 100%;

  input {
    width: 100%;
    height: 3rem;
    margin: 20px;
    padding: 0;
    border: none;
    border-bottom: 1px solid #9e9e9e;

    font-size: 20px;

    outline: none;

    &:nth-of-type(2) {
      margin-bottom: 50px;
    }
  }
`;
