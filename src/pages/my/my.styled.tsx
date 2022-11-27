import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 80%;

  div {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 30px;
  }
  button {
    border: none;
    border-radius: 50px;
    padding: 15px;

    color: white;
    background: purple;

    font-size: 17px;
    font-weight: 500;

    cursor: pointer;
    :hover {
      background-color: #6b006b;
    }
  }
`;

export const Spinner = styled.span`
  width: 48px;
  height: 48px;
  border: 5px dotted black;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  animation: rotation 2s linear infinite;
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
