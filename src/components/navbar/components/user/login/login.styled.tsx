import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  padding: 30px 40px 40px 40px;
  h1 {
    margin-bottom: 20px;

    font-size: 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  padding: 20px 0;
`;

export const InputContainers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 200px;
`;

export const inputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  position: relative;

  font-size: 14px;

  label {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const SignUp = styled.span`
  font-size: 20px;
  font-weight: 600;

  padding-left: 10px;
  color: purple;
  cursor: pointer;
`;

export const Input = styled.input`
  border: 1px solid #ced4da;
  border-radius: 4px;
  margin: 6px 0;
  padding: 14px;
  outline: none;

  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.contentBgColor};

  &:focus {
    border: 2px solid #80bdff;
    /* box-shadow: 0 0 0 3.2px rgb(0 123 255 / 25%); */
  }
`;

export const PasswordText = styled.span`
  width: 50px;
  text-align: end;

  color: #606060;
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
`;

export const CloseLoginModalButton = styled(ButtonBasic)`
  position: absolute;
  top: 10px;
  right: 15px;

  width: 50px;
  padding: 0px;

  color: ${(props) => props.theme.textColor};
  font-size: 28px;
`;

export const Button = styled(ButtonBasic)`
  width: 100%;
  padding: 0;
  border: 2px solid ${(props) => props.theme.textColor};
  border-radius: 24px;

  font-size: 18px;

  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.contentBgColor};

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;

export const AnotherLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  font-size: 17px;
  font-weight: 400;
  color: ${(props) => props.theme.textColor};
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
