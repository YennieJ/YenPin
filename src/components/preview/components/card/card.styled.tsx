import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 380px;
  height: 430px;
  border: 1px solid ${(props) => props.theme.hoverColor};
  border-radius: 20px;
  padding: 10px 0;

  background-color: ${(props) => props.theme.contentBgColor};

  box-sizing: border-box;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  button {
    opacity: 0;
    border: 1px solid ${(props) => props.theme.textColor};

    &:nth-child(1) {
      width: 100%;
      height: 100%;
      border-radius: 20px;

      transition: opacity 0.2s ease-in-out;
      background-color: ${(props) => props.theme.hoverColor};
    }

    &:nth-child(2),
    &:nth-child(3) {
      width: 45px;
      height: 45px;
      padding: 0;
      border-radius: 50%;
      font-size: 17px;

      color: ${(props) => props.theme.textColor};
      background-color: ${(props) => props.theme.contentBgColor};

      position: absolute;

      &:hover {
        opacity: 0.8;
      }
    }

    &:nth-child(2) {
      bottom: 13px;
      right: 70px;
    }
    &:nth-child(3) {
      bottom: 13px;
      right: 15px;
    }
  }

  &:hover {
    button {
      :nth-child(1) {
        cursor: zoom-in;
      }

      /* 2,3 */
      opacity: 1;
    }
  }
`;
export const CardImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 10px;
`;

export const CardName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 30px;
  padding-top: 10px;

  font-size: 25px;
  text-align: center;
  color: ${(props) => props.theme.textColor};
  border-top: 1px solid #9e9e9e;
`;
