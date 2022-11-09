import styled from "styled-components";

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 20px 20px;
  // 여긴 마진을 쓰고 싶음.
  input {
    width: 80%;
    height: 3rem;
    margin-bottom: 20px;
    padding: 0;
    border: none;
    border-bottom: 1px solid #9e9e9e;

    font-size: 20px;
    outline: none;

    &:nth-of-type(2) {
      margin-bottom: 30px;
    }
  }
`;

export const UserFormHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  width: 100%;

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
  padding: 0;
  margin-bottom: 10px;
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

export const GoogleLoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  padding: 0;
  border: 1px solid gray;
  border-radius: 50%;

  background-color: #fff;
`;

export const GoogleButtonImage = styled.img`
  width: 35px;
  height: 35px;
`;
