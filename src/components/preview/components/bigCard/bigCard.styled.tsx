import styled from "styled-components";
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

export const DialogBox = styled(motion.dialog)`
  display: flex;

  border: none;
  border-radius: 20px;
  padding: 0;

  width: 880px;
  height: 530px;

  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.contentBgColor};
`;
