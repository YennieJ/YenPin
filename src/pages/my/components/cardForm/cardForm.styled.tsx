import styled from "styled-components";

export const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;

  width: 100%;
  padding: 0 20px;

  input {
    width: 80%;
    height: 3rem;
    padding-top: 20px;
    margin-bottom: 20px;

    border: none;
    border-bottom: 1px solid #9e9e9e;

    font-size: 20px;
    text-align: center;

    outline: none;
    &:nth-of-type(2) {
      display: none;
    }
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
  height: 3rem;
  margin-bottom: 30px;
  font-size: 25px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #f1c7f1;
  }
`;

export const SubmitButton = styled(ButtonBasic)`
  width: 300px;
  margin-bottom: 20px;
  border: 2px solid purple;
  border-radius: 24px;

  font-size: 25px;
  &:hover {
    background-color: #f1c7f1;
  }
`;

export const LoginButton = styled(ButtonBasic)`
  width: 70px;
  margin-right: 15px;

  color: white;
  font-size: x-large;
`;
