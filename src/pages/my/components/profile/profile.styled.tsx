import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 260px;
  padding: 20px 0;
  border-top: 1px groove gray;

  color: ${(props) => props.theme.textColor};
`;

export const PhotoContainer = styled.div`
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

  background: #1a1a1afa;

  transition: opacity 0.4s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }

  > div {
    position: absolute;
    top: 50%;
    left: 50%;

    color: white;
    text-align: center;
    font-size: 27px;

    transform: translate(-50%, -50%);
  }
`;

export const UserInfo = styled.div<{ editing: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  height: 95px;

  padding-top: 5px;

  ${(props) =>
    props.editing
      ? css`
          input {
            width: 250px;
            padding: 5px 16px;
            border: 1px solid ${(props) => props.theme.hoverColor};
            border-radius: 15px;

            font-size: 25px;
            color: ${(props) => props.theme.textColor};
            background-color: ${(props) => props.theme.contentBgColor};

            overflow: hidden;
            &:focus {
              border: 1px solid #62abf8;
            }
          }
          > span {
            :nth-child(2) {
              font-size: 14px;
              color: #ff0000;
            }
            :nth-child(3) {
              padding-bottom: 5px;
              font-size: 14px;
            }
          }
        `
      : css`
          > span {
            &:nth-child(1) {
              font-size: 35px;
              font-weight: 600;
            }
            &:nth-child(2) {
              padding-bottom: 5px;

              font-size: 14px;
            }
          }
        `}
`;

export const ButtonBox = styled.div<{ editing: boolean }>`
  display: flex;
  justify-content: space-around;

  button {
    padding: 8px 16px;

    border: none;
    border-radius: 50px;
    background-color: ${(props) => props.theme.contentBgColor};

    font-size: 15px;
    color: ${(props) => props.theme.textColor};

    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }

    :last-child {
      display: ${(props) => !props.editing && "none"};
    }
  }
`;
