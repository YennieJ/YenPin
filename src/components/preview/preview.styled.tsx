import styled from "styled-components";

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: auto;

  position: relative;
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;

  height: 80%;
  padding: 30px 30px 60px 30px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  height: 20%;
`;

export const NewCardButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 45px;
  height: 45px;
  padding: 0;
  border: 2px solid ${(props) => props.theme.hoverColor};
  border-radius: 50px;

  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.contentBgColor};
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);

  position: absolute;
  top: 30px;
  right: 30px;
  transition: width 0.3s ease-out;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border: none;
    border-radius: 50px;
    :nth-child(1) {
      font-size: 25px;
    }

    :nth-child(2) {
      position: absolute;
      right: 0;
      opacity: 0;
    }
  }
  &:hover {
    width: 130px;
    transition: width 0.3s ease-out;
    div {
      :nth-child(2) {
        width: 80%;

        opacity: 1;
        transition: opacity 0.7s ease;
      }
    }
  }
`;
