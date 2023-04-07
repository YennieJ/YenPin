import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 50px;
  border-top: 1px groove gray;

  color: ${(props) => props.theme.textColor};

  div {
    margin-bottom: 30px;

    font-size: 15px;
    font-weight: 400;
  }
  button {
    padding: 15px;

    border: none;
    border-radius: 50px;
    background-color: ${(props) => props.theme.contentBgColor};

    color: ${(props) => props.theme.textColor};
    font-size: 17px;
    font-weight: 500;

    :hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }
`;
