import styled, { css } from "styled-components";

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;

  display: flex;
  place-items: center;
`;

export const DialogBox = styled.dialog`
  width: 450px;
  height: 450px;
  display: flex;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
`;

export const UserForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  place-items: center;

  input {
    position: relative;
    width: 100%;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    outline: none;
    height: 3rem;
    font-size: 20px;
    margin: 20px;
    padding: 0;
    &:nth-of-type(2) {
      margin-bottom: 50px;
    }
  }
`;

export const UserFormHead = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 10px;
  div {
    &:nth-of-type(2) {
      font-size: 30px;
      align-self: center;
      justify-self: center;
    }
  }
`;

const ButtonBasic = styled.button`
  height: 50px;
  cursor: pointer;
  position: relative;
  border: none;
`;

export const CloseLoginModalButton = styled(ButtonBasic)`
  width: 70px;
  background: none;
  color: white;
  font-size: x-large;
  color: black;
  justify-self: right;
`;

export const SubmitButton = styled(ButtonBasic)`
  font-size: 25px;
  width: 300px;
  background-color: #fff;
  border: 2px solid purple;
  border-radius: 24px;
  margin: 10px;
  &:hover {
    background-color: #f1c7f1;
  }
`;

export const LoginButton = styled(ButtonBasic)`
  width: 70px;
  background: none;
  color: white;
  font-size: x-large;
  margin-right: 15px;
`;
