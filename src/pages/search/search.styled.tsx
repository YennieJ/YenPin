import styled from "styled-components";
export const KeywordBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  span {
    padding: 0 7px;
    padding-bottom: 7px;
    border-bottom: 3px solid ${(props) => props.theme.textColor};
    font-size: 18px;
    color: ${(props) => props.theme.textColor};
  }
`;

export const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
