import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 450px;
  height: 500px;

  padding: 30px 40px 50px 40px;

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
`;

export const InputContainers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 280px;
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

  p {
    color: red;
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
    border: 1px solid #80bdff;
  }
`;

export const LoginButton = styled.button`
  padding-left: 10px;

  color: purple;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -1px;

  cursor: pointer;
`;

export const ShowPwdButton = styled.button`
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

export const SignupButton = styled(ButtonBasic)`
  width: 100%;

  padding: 0;

  border: 2px solid ${(props) => props.theme.textColor};
  border-radius: 24px;
  background-color: ${(props) => props.theme.contentBgColor};

  font-size: 18px;
  color: ${(props) => props.theme.textColor};
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;
