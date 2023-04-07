import styled from "styled-components";
import { motion } from "framer-motion";

export const Backdrop = styled.div`
  display: flex;
  place-items: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: ${(props) => props.theme.hoverColor};

  z-index: 4;
`;

export const Dialog = styled(motion.dialog)`
  display: flex;

  padding: 0;

  border: none;
  border-radius: 20px;
  background-color: ${(props) => props.theme.contentBgColor};

  color: ${(props) => props.theme.textColor};
`;
