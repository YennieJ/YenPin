import styled from "styled-components";
import { motion } from "framer-motion";

const InputVariants = {
  init: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  activ: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const Container = styled(motion.form)`
  display: flex;

  position: relative;

  width: 100%;
  margin: 0 10px;
`;

export const SearchInput = styled(motion.input).attrs({
  type: "text",
  placeholder: "검색",
  whileFocus: { paddingLeft: "10px" },
})`
  width: 100%;
  height: 40px;

  padding: 5px;
  padding-left: 35px;

  border: 1px solid #9e9e9e;
  border-radius: 10px;
  background-color: ${(props) => props.theme.contentBgColor};

  color: ${(props) => props.theme.textColor};
  font-size: 20px;

  &:focus {
    border: 2px solid #62abf8;
  }
`;

export const SearchIcon = styled(motion.div).attrs({
  variants: InputVariants,
  initial: "init",
  animate: "activ",
  exit: "init",
})`
  position: absolute;
  top: 50%;
  left: 10px;

  color: ${(props) => props.theme.textColor};
  font-size: 20px;

  transform: translate(0%, -50%);
`;

export const DeleteButton = styled(motion.button).attrs({
  type: "button",
  variants: InputVariants,
  initial: "init",
  animate: "activ",
  exit: "init",
})`
  position: absolute;
  top: 50%;
  right: 10px;

  width: 20px;
  height: 20px;

  border: 1px solid #9e9e9e;
  border-radius: 50%;

  color: ${(props) => props.theme.textColor};
  font-size: 10px;

  transform: translate(0%, -50%);
`;
