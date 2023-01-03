import styled from "styled-components";

export const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: space-around;

  width: 880px;
  height: 530px;

  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
  height: 370px;

  padding: 10px;
`;

export const ImgContainer = styled.div`
  position: relative;
  align-self: center;

  width: 350px;
  height: 350px;
  img {
    width: 350px;
    height: 350px;
    font-size: 20px;
    border: 1px solid gray;
    border-radius: 10px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;

  input,
  textarea {
    width: 400px;
    border: 1px solid #9e9e9e;
    border-radius: 10px;
    padding: 10px;

    text-align: left;
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.contentBgColor};
    outline: none;

    &:focus {
      border: 2px solid #62abf8;
    }
  }

  input {
    height: 60px;
    font-size: 28px;
    font-weight: 700;
  }
  textarea {
    height: 220px;

    font-size: 20px;
    word-spacing: -8px;

    overflow: auto;
    white-space: inherit;
    resize: none;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 6px;
    }
  }
  span {
    display: flex;
    justify-content: end;
    padding-right: 5px;
    font-size: 15px;
    color: #606060;
    margin-top: 10px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  width: 350px;
  height: 350px;
  border: 1px solid gray;
  border-radius: 10px;

  transition: opacity 0.4s ease-in-out;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    opacity: 1;
    border: 2px solid #62abf8;
  }
`;
export const OverlayContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
  font-size: 27px;
  color: white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  padding: 0;
  border: 2px solid ${(props) => props.theme.textColor};
  border-radius: 24px;

  font-size: 23px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.contentBgColor};
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;
