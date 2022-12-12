import styled from "styled-components";

export const LoginButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 0 5px;
  margin-right: 15px;

  border: none;
  border-radius: 20px;

  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  font-size: 28px;

  &:hover {
    color: ${(props) => props.theme.contentTxtColor};
    background-color: ${(props) => props.theme.contentBgColor};
  }
`;
