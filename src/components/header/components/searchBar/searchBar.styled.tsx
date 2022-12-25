import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.form)`
  display: flex;
  position: relative;
  width: 100%;
  margin: 0 10px;
`;

export const SearchIcon = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(0%, -50%);
  font-size: 20px;
  color: ${(props) => props.theme.textColor};
`;
export const SearchInput = styled(motion.input)`
  width: 100%;
  height: 40px;
  padding: 5px;
  padding-left: 35px;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  font-size: 20px;

  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.contentBgColor};
  &:focus {
    border: 2px solid #62abf8;
  }
`;
export const DeleteButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0%, -50%);
  width: 20px;
  height: 20px;
  border: 1px solid #9e9e9e;
  border-radius: 50%;
  font-size: 10px;
  color: ${(props) => props.theme.textColor};
`;
