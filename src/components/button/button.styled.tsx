import styled, { css } from "styled-components";

export const ex = styled.button`
  height: 50px;
  cursor: pointer;
  position: relative;
`;

// export const extend = styled(All)`
//   font-size: 30px;
//   width: 300px;
//   background-color: #fff;
//   border: 2px solid #000;
//   border-radius: 24px;
//   ${(done) => {
//     return css`
//       &:hover {
//         background: red;
//       }
//     `;
//   }}
// `;

const basic = styled.button`
  height: 50px;
  cursor: pointer;
  position: relative;
  border: none;
`;

export const NavBtn = styled(basic)`
  width: 70px;
  background: none;
  color: white;
  font-size: 45px;
`;

export const SnavBtn = styled(basic)`
  width: 70px;
  background: none;
  color: white;
  font-size: x-large;
`;

export const User = styled(basic)`
  font-size: 25px;
  width: 300px;
  background-color: #fff;
  border: 2px solid purple;
  border-radius: 24px;
  margin: 10px;
  &:hover {
    background-color: #f1c7f1;
  }
`;

export const X = styled(SnavBtn)`
  color: black;
  justify-self: right;
`;
// export const ButtonText = styled.span`
//   font-size: 25px;
//   position: relative;
//   color: #000;
// `;
