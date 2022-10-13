import styled, { css } from "styled-components";
//여기에 버튼베이직을 임포트해서 연장하는게 더 좋은가??

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #333333;
  overflow: hidden;
`;
export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  place-items: center;
`;
export const UserForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    position: relative;
    width: 100%;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    outline: none;
    height: 3rem;
    font-size: 20px;
    margin: 20px;
    padding: 0;
  }
  button {
    &:nth-child(4) {
      margin-top: 50px;
    }
  }
`;

export const UserFormHead = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  div {
    &:nth-child(2) {
      font-size: 30px;
      align-self: center;
      justify-self: center;
    }
  }
`;

export const DialogBox = styled.dialog`
  width: 450px;
  height: 450px;
  display: flex;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
`;

export const SidebarButton = styled.button<{ done?: boolean }>`
  height: 50px;
  cursor: pointer;
  position: relative;

  width: 70px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  ${({ done }) =>
    done &&
    css`
      font-size: x-large;
    `}
`;
export const SidebarMenu = styled.div`
  width: 20rem;
  background-color: #1f2d3d;
  height: calc(100vh - 3.5rem);
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
