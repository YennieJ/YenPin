import styled from "styled-components";

// export const HomeContainer = styled.div`
//   border: 1px solid green;
//   height: 100%;
// `;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 80%;

  div {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 30px;
  }
  a {
    border: none;
    border-radius: 50px;
    padding: 15px;

    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.contentBgColor};

    font-size: 17px;
    font-weight: 500;

    cursor: pointer;
    :hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }
`;
