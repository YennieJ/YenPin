import styled from "styled-components";

// export const HomeContainer = styled.div`
//   border: 1px solid green;
//   height: 100%;
// `;
export const CardContainer = styled.div`
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

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Spinner = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
  margin: 15px auto;
  position: relative;
  color: purple;
  box-sizing: border-box;
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

export const ThemeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 15px;
  right: 20px;

  width: 160px;
  height: 50px;
  border-radius: 30px;
  font-size: 20px;
  background-color: ${(props) => props.theme.buttonTheme};

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 140px;
  }
  span {
    font-size: 15px;
  }
`;
