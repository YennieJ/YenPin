import styled from "styled-components";

export const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 0 20px;

  input {
    width: 300px;
    height: 60px;
    padding: 0;
    margin-bottom: 20px;

    border: none;
    border-bottom: 1px solid #9e9e9e;

    font-size: 20px;
    text-align: center;

    outline: none;
  }
`;

export const ImgContainer = styled.div`
  position: relative;

  img {
    width: 350px;
    height: 350px;
    font-size: 20px;
    border: 1px solid gray;
    border-radius: 20px;
    background-color: #fff;
    cursor: pointer;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  border-radius: 20px;

  transition: opacity 0.4s ease-in-out;
  background: black;
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

  width: 95%;
`;
const ButtonBasic = styled.button`
  background: none;
  cursor: pointer;
`;

export const AddFileButton = styled.button`
  width: 350px;
  height: 350px;
  padding: 10px;
  font-size: 20px;
  border: 1px solid gray;
  border-radius: 20px;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #f1c7f1;
  }
`;

export const Button = styled(ButtonBasic)`
  width: 100px;
  height: 50px;
  padding: 0;
  border: 2px solid purple;
  border-radius: 24px;

  font-size: 23px;
  &:hover {
    background-color: #f1c7f1;
  }
`;
