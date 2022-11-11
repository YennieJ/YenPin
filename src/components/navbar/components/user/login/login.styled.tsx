import styled from "styled-components";

export const LoginForm = styled.form`
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

export const LoginFormHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 50px;

  div {
    display: flex;
    align-items: center;
    position: absolute;

    height: 50px;

    font-size: 30px;
  }
`;

const ButtonBasic = styled.button`
  height: 50px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const CloseLoginModalButton = styled(ButtonBasic)`
  position: absolute;
  top: -10px;
  right: 0;

  width: 70px;
  padding: 0px;

  color: black;
  font-size: 28px;
`;

export const Button = styled(ButtonBasic)`
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
  cursor: pointer;
`;

export const GoogleButtonImage = styled.img`
  width: 35px;
  height: 35px;
`;
