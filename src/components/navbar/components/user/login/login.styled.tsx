import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  padding: 30px 40px 40px 40px;
  h1 {
    margin: 0;
    font-size: 30px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 170px;
`;

export const InputText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  position: relative;

  label {
    font-size: 16px;
    font-weight: 600;
  }

  span {
    font-size: 14px;
  }
`;

export const SignUp = styled.span`
  font-size: 14px;
  font-weight: 600;

  padding-left: 10px;
  color: purple;
  cursor: pointer;
`;

export const Input = styled.input`
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 4px;
  margin: 6px 0;
  padding: 14px;
  outline: none;

  &:focus {
    border: 1px solid #80bdff;
    box-shadow: 0 0 0 3.2px rgb(0 123 255 / 25%);
  }
`;

export const PasswordText = styled.span`
  width: 50px;
  text-align: end;

  color: #282a35;
  font-weight: 600;
  cursor: pointer;
  svg {
    display: inline-block;
    position: absolute;
    top: 3px;
    right: 35px;
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
  top: 5px;
  right: 5px;

  width: 70px;
  padding: 0px;

  color: black;
  font-size: 28px;
`;

export const Button = styled(ButtonBasic)`
  width: 100%;
  padding: 0;
  border: 2px solid purple;
  border-radius: 24px;

  font-size: 18px;

  &:hover {
    background-color: #f1c7f1;
  }
`;

export const AnotherLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 17px;
  font-weight: 400;
  width: 100%;
`;

export const GoogleLoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  padding: 0;
  margin-left: 10px;
  border: 1px solid gray;
  border-radius: 50%;

  background-color: #fff;
  cursor: pointer;
`;

export const GoogleButtonImage = styled.img`
  width: 25px;
  height: 25px;
`;
