import styled, { css } from "styled-components";

export const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: space-around;

  width: 100%;
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
    border-radius: 20px;
    cursor: pointer;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

  input,
  textarea {
    padding: 0;
    border: 1px solid gray;
    border-radius: 20px;
    padding: 10px;
    margin: 20px 0;

    text-align: left;
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.inputBgColor};

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
    height: 200px;

    font-size: 20px;
    word-spacing: -8px;

    overflow: auto;
    white-space: inherit;
    resize: none;
  }
  pre {
    white-space: pre-wrap;
    word-break: break-all;
    width: 400px;
    height: 200px;

    overflow: auto;

    border-bottom: 1px solid #606060;
    padding-bottom: 5px;
    font-size: 20px;
    cursor: text;

    :hover {
      border-bottom: 1px solid #62abf8;
    }
  }
  span {
    display: flex;
    justify-content: end;
    padding-right: 5px;
    font-size: 15px;
    color: #606060;
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
  border-radius: 20px;

  transition: opacity 0.4s ease-in-out;
  background-color: ${(props) => props.theme.contentHoverColor};
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
  color: ${(props) => props.theme.contentTxtColor};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
`;

export const AddFileButton = styled.button`
  width: 350px;
  height: 350px;
  padding: 0;
  font-size: 20px;
  border: 1px solid gray;
  border-radius: 20px;
  background-color: #e7e6e6;
  cursor: pointer;
  &:hover {
    background-color: #888888;
  }
`;

export const Button = styled.button`
  width: 90px;
  height: 45px;
  padding: 0;
  border: 2px solid ${(props) => props.theme.textColor};
  border-radius: 24px;

  font-size: 23px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  &:hover {
    color: ${(props) => props.theme.contentTxtColor};
    background-color: ${(props) => props.theme.contentBgColor};
  }
`;
