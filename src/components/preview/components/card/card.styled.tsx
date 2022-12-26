import styled from "styled-components";
import { motion } from "framer-motion";

export const Box = styled(motion.div)`
  position: relative;
  background-position: center center;

  width: 280px;
  height: 330px;
  border: 1px solid ${(props) => props.theme.hoverColor};
  border-radius: 10px;

  background-color: ${(props) => props.theme.contentBgColor};
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;
export const Info = styled(motion.div)`
  padding: 20px;

  border-radius: 0 0 10px 10px;
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  font-size: 18px;
  background-color: ${(props) => props.theme.contentBgColor};
`;

export const DeletButton = styled(motion.button)`
  position: absolute;
  opacity: 0;

  top: 10px;
  left: 10px;
  width: 35px;
  height: 35px;
  border: 1px solid ${(props) => props.theme.hoverColor};
  padding: 5px;
  font-size: 18px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.contentBgColor};

  border-radius: 50%;
`;
