import styled from "styled-components";

export const Gridbox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;

  height: 100%;

  padding: 30px 30px 60px 30px;
`;

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 380px;
  height: 430px;
  border: none;
  border-radius: 20px;
  padding: 10px 0;

  background-color: white;

  box-sizing: border-box;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
`;

export const CardImage = styled.img`
  width: 350px;
  height: 350px;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 10px;
`;

export const CardName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 30px;

  font-size: 25px;
  text-align: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;

  width: 380px;
  height: 430px;
  border: 1px solid gray;
  border-radius: 20px;

  transition: opacity 0.4s ease-in-out;
  background: black;
  cursor: zoom-in;
  &:hover {
    opacity: 0.5;
  }
`;
export const OverlayContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 27px;
`;

// export const CardDeleteButton = styled.button`
//   width: 45px;
//   height: 45px;
//   padding: 0;
//   margin-right: 3px;
//   border: 1px solid gray;
//   border-radius: 50%;
//   cursor: pointer;

//   background-color: #fff;
// `;
