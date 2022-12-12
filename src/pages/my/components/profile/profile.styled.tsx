import styled from "styled-components";

export const Container = styled.div`
  height: 260px;
  padding: 10px 0 20px 0;
  border-bottom: 1px groove gray;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  color: ${(props) => props.theme.textColor};
  div {
    &:nth-child(3) {
      display: flex;
      justify-content: space-around;

      width: 250px;
    }
  }
  button {
    padding: 8px 16px;
    border: none;
    border-radius: 50px;

    font-size: 15px;
    background-color: #dadada;

    cursor: pointer;
  }
`;

export const ImgContainer = styled.div`
  width: 96px;
  height: 96px;

  position: relative;

  img {
    width: 96px;
    height: 96px;
    border-radius: 50px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  width: 96px;
  height: 96px;
  border-radius: 50px;

  transition: opacity 0.4s ease-in-out;
  background: #1a1a1afa;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const OverlayContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  font-size: 27px;
`;

interface UserNameStyleProps {
  warningMsg: () => string;
}
export const UserNameEdit = styled.div<UserNameStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  height: 95px;
  padding: 10px 0 0 0;

  font-size: 40px;
  input {
    width: 250px;
    padding: 8px 16px;
    border: 1px solid gray;
    border-radius: 15px;
    border-color: ${(props) => props.warningMsg() && "#fb0000"};

    font-size: 25px;
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.inputBgColor};

    overflow: hidden;
    &:focus {
      border: 1px solid #62abf8;
    }
  }
  span {
    padding: 10px 0;

    font-size: 14px;
    color: #ff0000;
  }
`;

export const DisplayName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  align-items: center;

  height: 95px;
  padding: 10px 0 0 0;

  span {
    &:nth-child(1) {
      font-size: 35px;
      font-weight: 600;
    }
    &:nth-child(2) {
      padding: 10px 0;
      font-size: 14px;
    }
  }
`;
