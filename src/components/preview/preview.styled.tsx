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

// export const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;

//   div {
//     width: 100%;
//     height: 100%;
//     border: 1px solid gray;
//     border-radius: 20px;

//     opacity: 0;
//     transition: opacity 0.4s ease-in-out;
//     background: black;
//   }

//   button {
//     position: absolute;
//     width: 45px;
//     height: 45px;
//     padding: 0;
//     border: 1px solid gray;
//     border-radius: 50%;
//     font-size: 17px;

//     opacity: 0;
//     &:nth-child(2) {
//       bottom: 15px;
//       right: 70px;
//     }
//     &:nth-child(3) {
//       bottom: 15px;
//       right: 15px;
//     }
//   }

//   &:hover {
//     div {
//       cursor: zoom-in;
//       opacity: 0.6;
//     }
//     button {
//       cursor: pointer;

//       background-color: #fff;

//       opacity: 1;

//       &:hover {
//         background: #fff5f5;
//       }
//     }
//   }
// `;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  button {
    opacity: 0;
    border: 1px solid gray;

    :nth-child(1) {
      width: 100%;
      height: 100%;
      border-radius: 20px;

      transition: opacity 0.4s ease-in-out;
      background: black;
    }
    /* 2,3 */
    width: 45px;
    height: 45px;
    padding: 0;
    border-radius: 50%;
    font-size: 17px;

    background-color: white;

    position: absolute;
    &:nth-child(2) {
      bottom: 15px;
      right: 70px;
    }
    &:nth-child(3) {
      bottom: 15px;
      right: 15px;
    }
  }

  &:hover {
    button {
      :nth-child(1) {
        cursor: zoom-in;
        opacity: 0.6;
      }

      /* 2,3 */
      cursor: pointer;
      opacity: 1;
    }
  }
`;
