import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  myPage: boolean;
}

export const PreviewContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  height: ${(props) => (props.myPage ? "calc(100% - 260px)" : "100%")};
  padding-bottom: 30px;

  @media (max-width: 940px) {
    padding-bottom: 50px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  justify-content: center;
  place-items: center;
  grid-gap: 20px;

  padding: 50px 30px 60px 30px;
  border-top: 1px groove gray;
`;

export const NewCardButton = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;
  top: 30px;
  right: 30px;

  width: 45px;
  height: 45px;

  padding: 0;

  border: 2px solid ${(props) => props.theme.hoverColor};
  border-radius: 50px;
  background-color: ${(props) => props.theme.contentBgColor};

  color: ${(props) => props.theme.textColor};

  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);

  transition: width 0.3s ease-out;

  z-index: 2;
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
