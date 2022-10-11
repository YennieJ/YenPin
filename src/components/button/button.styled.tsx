import styled, { css } from "styled-components";

export const Button = styled.button`
  outline: 0;
  padding: 0px 48px;
  height: 48px;
  line-height: 1;
  background-color: #fff;
  -webkit-appearance: none;
  border: 2px solid #000;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  cursor: pointer;
  z-index: 1;
  &:focus {
    outline: none;
  }
`;

export const ButtonText = styled.span`
  font-size: 16px;
  position: relative;
  z-index: 1;
  color: #000;
`;
