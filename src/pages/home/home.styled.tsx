import styled from "styled-components";

export const temp = styled.div`
  width: 200px;
  height: 200px;
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
