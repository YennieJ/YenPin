import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 15px;
  right: 20px;
  z-index: 99999;

  width: 160px;
  height: 50px;
  border-radius: 30px;
  font-size: 20px;
  background-color: ${(props) => props.theme.buttonTheme};

  div {
    display: flex;
    justify-content: space-around;
    align-items: baseline;

    width: 140px;
  }
  span {
    font-size: 15px;
  }
`;
