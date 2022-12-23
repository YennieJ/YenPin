import styled from "styled-components";

export const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: space-around;

  width: 100%;
  padding: 20px;
`;
export const Div = styled.div`
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
    border: 1px solid gray;
    border-radius: 20px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 400px;

  div {
    width: 400px;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    padding: 10px;
    margin: 20px 0;

    height: 60px;

    font-size: 28px;
    font-weight: 700;
    text-align: left;
    outline: none;
  }

  pre {
    border: 1px solid #9e9e9e;
    border-radius: 10px;
    padding: 10px;

    height: 200px;

    font-size: 20px;

    overflow: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.3);
      border-radius: 6px;
    }
  }
`;

export const CardName = styled.div`
  width: 400px;
  padding: 0;
  margin: 20px 0;

  border: none;
  border-bottom: 1px solid #9e9e9e;

  text-align: left;

  outline: none;

  height: 60px;
  font-size: 28px;
  font-weight: 700;
`;

export const CardMessage = styled.div`
  width: 400px;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  padding: 0;
  padding-bottom: 5px;
  margin: 20px 0;

  text-align: left;
  outline: none;

  font-size: 20px;
  word-break: break-all;
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

export const AddFileButton = styled.button`
  width: 350px;
  height: 350px;
  padding: 0;
  font-size: 20px;
  border: 1px solid gray;
  border-radius: 20px;
  background-color: #e7e6e6;

  &:hover {
    background-color: #888888;
  }
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
