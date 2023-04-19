import styled from "styled-components";

const GOOGLE_IMAGE = "/images/google_logo.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 450px;
  height: 500px;

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

  > div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    position: relative;

    font-size: 14px;

    label {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export const Input = styled.input`
  padding: 14px;
  margin: 6px 0;

  border: 1px solid #ced4da;
  border-radius: 4px;
  background-color: ${(props) => props.theme.contentBgColor};

  color: ${(props) => props.theme.textColor};

  outline: none;

  &:focus {
    border: 2px solid #80bdff;
  }
`;

export const SignupButton = styled.button`
  padding-left: 10px;

  color: purple;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -1px;

  cursor: pointer;
`;

export const ShowPwdButton = styled.button.attrs({ type: "button" })`
  width: 50px;

  color: #606060;
  font-weight: 600;
  text-align: end;

  cursor: pointer;

  svg {
    display: inline-block;

    position: absolute;
    top: 3px;
    right: 40px;
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
  background-color: ${(props) => props.theme.contentBgColor};

  color: ${(props) => props.theme.textColor};
  font-size: 18px;

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;

export const AnotherLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  color: ${(props) => props.theme.textColor};
  font-size: 17px;
  font-weight: 400;
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

export const GoogleButtonImage = styled.img.attrs({
  alt: "",
  src: GOOGLE_IMAGE,
})`
  width: 25px;
  height: 25px;
`;
