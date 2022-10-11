import styled, { css } from "styled-components";

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
`;
export const UserForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  place-items: center;
  position: fixed;
  top: 0;
`;

export const DialogBox = styled.dialog`
  width: 450px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    outline: none;
    height: 3rem;
    width: 100%;
    font-size: 20px;
    margin: 20px;
    padding: 0;
  }
`;

export const SidebarButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
`;
