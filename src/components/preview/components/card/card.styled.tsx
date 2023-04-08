import styled from "styled-components";
import { motion } from "framer-motion";

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    zIndex: 5,
    scale: 1.3,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: "tween",
    },
  },
};

const infoMotion = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duaration: 0.1,
      type: "tween",
    },
  },
};

export const Box = styled(motion.div).attrs({
  variants: boxVariants,
  initial: "nomal",
  whileHover: "hover",
})`
  position: relative;
  background-position: center center;

  width: 235px;
  height: 323px;
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

export const Info = styled(motion.div).attrs({
  variants: infoMotion,
})`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  bottom: 0;

  width: 100%;
  height: 50px;

  border-radius: 0 0 10px 10px;
  background-color: ${(props) => props.theme.contentBgColor};

  color: ${(props) => props.theme.textColor};
  font-size: 18px;

  opacity: 0;

  cursor: default;

  > span {
    width: 200px;
    padding: 3px 15px;
  }
`;

export const LikeContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;

  padding-right: 15px;

  svg {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    color: ${(props) => (props.isActive ? "red" : props.theme.textColor)};
  }
`;

export const LikeButton = styled(motion.button).attrs({
  variants: infoMotion,
})`
  margin-right: 7px;

  background-color: ${(props) => props.theme.contentBgColor};

  font-size: 18px;
`;

export const DeletButton = styled(motion.button).attrs({
  variants: infoMotion,
})`
  position: absolute;
  top: 10px;
  right: 10px;

  width: 35px;
  height: 35px;

  padding: 5px;

  border: 1px solid ${(props) => props.theme.hoverColor};
  border-radius: 50%;
  background-color: ${(props) => props.theme.contentBgColor};

  color: ${(props) => props.theme.textColor};
  font-size: 18px;

  opacity: 0;
`;
