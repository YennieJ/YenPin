import styled from "styled-components";

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 70%;

  border-top: 1px groove gray;
`;

export const Spinner = styled.span`
  display: block;

  position: relative;

  width: 12px;
  height: 12px;

  border-radius: 50%;

  margin: 15px auto;

  color: purple;

  animation: animloader 2s linear infinite;

  @keyframes animloader {
    0% {
      box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 -2px;
    }
    25% {
      box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 2px;
    }
    50% {
      box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 2px, -38px 0 0 -2px;
    }
    75% {
      box-shadow: 14px 0 0 2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 -2px;
    }
    100% {
      box-shadow: 14px 0 0 -2px, 38px 0 0 2px, -14px 0 0 -2px, -38px 0 0 -2px;
    }
  }
`;
