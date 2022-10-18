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

export const UserFormHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  width: 100%;
  margin-top: 10px;

  div {
    &:nth-of-type(2) {
      place-self: center;
      font-size: 30px;
    }
  }
`;

const ButtonBasic = styled.button`
  height: 50px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const CloseLoginModalButton = styled(ButtonBasic)`
  justify-self: right;

  width: 70px;

  color: black;
  font-size: x-large;
`;

export const SubmitButton = styled(ButtonBasic)`
  width: 300px;
  margin: 10px;
  border: 2px solid purple;
  border-radius: 24px;

  font-size: 25px;

  &:hover {
    background-color: #f1c7f1;
  }
`;

export const LoginButton = styled(ButtonBasic)`
  width: 70px;
  margin-right: 15px;

  color: white;
  font-size: x-large;
`;
