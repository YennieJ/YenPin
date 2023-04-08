import styled from "styled-components";

export const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: space-around;

  width: 880px;
  height: 530px;

  padding: 20px;

  @media screen and (max-width: 880px) {
    width: 450px;
    height: 100%;

    padding-bottom: 30px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
  height: 370px;

  padding: 10px;

  @media screen and (max-width: 880px) {
    flex-direction: column;

    width: 450px;
    height: 100%;
  }
`;

export const ImgContainer = styled.div<{ photoURL: string }>`
  position: relative;
  align-self: center;

  width: 350px;
  height: 350px;

  border: 1px solid ${(props) => (props.photoURL ? "none" : "#9e9e9e")};
  border-radius: 10px;

  img {
    width: 348px;
    height: 348px;

    border: 1px solid #9e9e9e;
    border-radius: 10px;

    font-size: 20px;
  }

  @media screen and (max-width: 880px) {
    margin-bottom: 10px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 348px;
  height: 348px;

  border: 2px solid #62abf8;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);

  opacity: 0;
  transition: opacity 0.4s ease-in-out;

  cursor: pointer;

  &:hover {
    opacity: 1;
  }
  > div {
    position: absolute;
    top: 50%;
    left: 50%;

    color: white;
    font-size: 27px;
    text-align: center;

    transform: translate(-50%, -50%);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input,
  textarea {
    width: 400px;

    padding: 10px;

    border: 1px solid #9e9e9e;
    border-radius: 10px;
    background-color: ${(props) => props.theme.contentBgColor};

    color: ${(props) => props.theme.textColor};

    text-align: left;
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
      border-radius: 6px;

      background: rgba(0, 0, 0, 0.3);
    }
  }

  span {
    display: flex;
    justify-content: end;

    padding-right: 10px;
    margin-top: 10px;

    color: #606060;
    font-size: 15px;
  }

  @media screen and (max-width: 880px) {
    align-items: center;
    width: 100%;

    > div {
      margin-bottom: 10px;

      > input,
      textarea {
        width: 350px;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;

  border: 2px solid ${(props) => props.theme.textColor};
  border-radius: 24px;
  background-color: ${(props) => props.theme.contentBgColor};

  color: ${(props) => props.theme.textColor};
  font-size: 33px;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;
