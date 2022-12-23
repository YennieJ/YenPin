import { AnimatePresence } from "framer-motion";
import React from "react";
import * as S from "./dialogBox.styled";

interface ContainerProps {
  children: React.ReactNode;
  preview?: boolean;
  layoutId?: string;
}
const DialogBox = ({ children, preview, layoutId }: ContainerProps) => {
  return (
    <S.Backdrop>
      <S.DialogBox layoutId={layoutId} preview={preview}>
        {children}
      </S.DialogBox>
    </S.Backdrop>
  );
};

export default DialogBox;
