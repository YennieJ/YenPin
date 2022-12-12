import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  padding: 30px 40px 50px 40px;
  h1 {
    margin: 0;
    font-size: 30px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 250px;
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

export const Login = styled.span`
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
  background-color: ${(props) => props.theme.inputBgColor};

  &:focus {
    border: 1px solid #80bdff;
  }
`;

// border: 1px solid #ff8d80;
// box-shadow: 0 0 0 3.2px rgb(255 0 0 / 25%);

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

export const SignupButton = styled(ButtonBasic)`
  width: 100%;
  padding: 0;
  border: 2px solid ${(props) => props.theme.textColor};
  border-radius: 24px;

  font-size: 18px;

  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  &:hover {
    color: ${(props) => props.theme.contentTxtColor};
    background-color: ${(props) => props.theme.contentBgColor};
  }
`;
