import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Backdrop = styled(motion.div)`
  display: flex;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100vw;
  height: 100vh;

  background-color: ${(props) => props.theme.hoverColor};
`;

interface DialogBoxProps {
  preview?: boolean;
}
export const DialogBox = styled(motion.dialog)<DialogBoxProps>`
  display: flex;

  border: none;
  border-radius: 20px;
  padding: 0;

  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.contentBgColor};

  /* box-shadow: 0 0 30px rgba(30, 30, 30, 0.185); */

  ${({ preview }) => css`
    width: ${preview ? "880px" : "450px"};
    height: ${preview ? "530px" : "500px"};
  `}
`;
