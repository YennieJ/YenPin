import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 380px;
  height: 430px;
  border: 1px solid ${(props) => props.theme.hoverColor};
  border-radius: 20px;
  padding: 10px 0;

  background-color: ${(props) => props.theme.contentBgColor};
`;

export const Box = styled(motion.div)`
  position: relative;
  background-position: center center;
  /*  */
  /* background-color: #fff;
  background-size: cover;
  background-position: center center; */
  /*  */
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around; */

  width: 280px;
  height: 330px;
  border: 1px solid ${(props) => props.theme.hoverColor};
  border-radius: 20px;

  background-color: ${(props) => props.theme.contentBgColor};
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;
export const Info = styled(motion.div)`
  padding: 20px;

  border-radius: 0 0 20px 20px;
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  font-size: 18px;
  background-color: ${(props) => props.theme.contentBgColor};
`;

// export const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;

//   button {
//     opacity: 0;
//     border: 1px solid ${(props) => props.theme.textColor};

//     &:nth-child(1) {
//       width: 100%;
//       height: 100%;
//       border-radius: 20px;

//       transition: opacity 0.2s ease-in-out;
//       background-color: ${(props) => props.theme.hoverColor};
//     }

//     &:nth-child(2),
//     &:nth-child(3) {
//       width: 45px;
//       height: 45px;
//       padding: 0;
//       border-radius: 50%;
//       font-size: 17px;

//       color: ${(props) => props.theme.textColor};
//       background-color: ${(props) => props.theme.contentBgColor};

//       position: absolute;

//       &:hover {
//         opacity: 0.8;
//       }
//     }

//     &:nth-child(2) {
//       bottom: 13px;
//       right: 70px;
//     }
//     &:nth-child(3) {
//       bottom: 13px;
//       right: 15px;
//     }
//   }

//   &:hover {
//     button {
//       :nth-child(1) {
//         cursor: zoom-in;
//       }

//       /* 2,3 */
//       opacity: 1;
//     }
//   }
// `;

export const BigMovie = styled(motion.div)`
  position: fixed;
  width: 40vw;
  height: 80vh;
  top: 50px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
`;

export const BigCover = styled.img`
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center center;
`;

export const CardImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 10px;
`;

export const CardName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 30px;
  padding-top: 10px;

  font-size: 25px;
  text-align: center;
  color: ${(props) => props.theme.textColor};
  border-top: 1px solid #9e9e9e;
`;
