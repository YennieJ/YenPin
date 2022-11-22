import styled, { css } from "styled-components";

export const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: space-around;

  width: 100%;
  padding: 20px;
`;

export const Header = styled.div`
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

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface TextProps {
  textareaHeight?: number;
}
export const TextContainer = styled.div<TextProps>`
  display: flex;
  flex-direction: column;
  width: 400px;

  input,
  textarea {
    padding: 0;
    margin: 20px 0;

    border: none;
    border-bottom: 1px solid #9e9e9e;

    text-align: left;

    outline: none;

    &:focus {
      border-bottom: 1px solid #62abf8;
    }
  }

  input {
    height: 60px;
    font-size: 28px;
    font-weight: 700;
  }
  textarea {
    /* height: (textareaHeight + 1) * 28px; */
    padding-bottom: 5px;
    /* max-height: 150px; */
    font-size: 20px;
    word-spacing: -8px;

    overflow: hidden;
    white-space: inherit;
    resize: none;
  }
  pre {
    white-space: pre-wrap;
    word-break: break-all;
    width: 400px;
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
  background: #6f6f6f;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
`;
const ButtonBasic = styled.button`
  background: none;
  cursor: pointer;
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

export const Button = styled(ButtonBasic)`
  width: 90px;
  height: 45px;
  padding: 0;
  border: 2px solid purple;
  border-radius: 24px;

  font-size: 23px;
  &:hover {
    background-color: #f1c7f1;
  }
`;
