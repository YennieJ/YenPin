import styled, { css } from "styled-components";

export const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;

  width: 100%;
  padding: 0 20px;

  input {
    width: 80%;
    height: 60px;
    padding: 0;
    padding-top: 20px;
    margin-bottom: 20px;

    border: none;
    border-bottom: 1px solid #9e9e9e;

    font-size: 20px;
    text-align: center;

    outline: none;
  }
`;

const ButtonBasic = styled.button`
  height: 50px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const AddFileButton = styled.button`
  width: 80%;
  height: 70px;
  padding: 0;
  margin-bottom: 20px;
  font-size: 20px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #f1c7f1;
  }
`;

interface SubProps {
  goback?: boolean;
}
export const SubmitButton = styled(ButtonBasic)<SubProps>`
  width: 300px;
  padding: 0;
  border: 2px solid purple;
  border-radius: 24px;

  font-size: 25px;
  &:hover {
    background-color: #f1c7f1;
  }

  margin-bottom: ${({ goback }) => (goback ? "20px" : "")};
`;
