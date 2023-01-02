import styled from "styled-components";
import { motion } from "framer-motion";

interface Props {
  isActive: boolean;
}

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
  height: 50px;

  border-radius: 0 0 10px 10px;
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  font-size: 18px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.contentBgColor};

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: default;
  span {
    &:nth-child(1) {
      width: 200px;
      padding: 3px 15px;
    }
  }
  div {
    padding-right: 15px;
    display: flex;
    align-items: center;
    span {
      padding: 0 7px;
    }
  }
`;

// isActive는 motion의 valid atrribute가 아님.
export const IsActive = styled.div<Props>`
  svg {
    color: ${(props) => (props.isActive ? "red" : props.theme.textColor)};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const LikeButton = styled(motion.button)`
  font-size: 18px;
  background-color: ${(props) => props.theme.contentBgColor};
`;

export const DeletButton = styled(motion.button)`
  position: absolute;
  opacity: 0;

  top: 10px;
  right: 10px;
  width: 35px;
  height: 35px;
  border: 1px solid ${(props) => props.theme.hoverColor};
  padding: 5px;
  font-size: 18px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.contentBgColor};

  border-radius: 50%;
`;
