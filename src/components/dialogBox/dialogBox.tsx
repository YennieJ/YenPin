import React from "react";
import * as S from "./dialogBox.styled";

interface ContainerProps {
  children: React.ReactNode;
  preview?: boolean;
}
const DialogBox = ({ children, preview }: ContainerProps) => {
  return (
    <S.Backdrop>
      <S.DialogBox preview={preview}>{children}</S.DialogBox>
    </S.Backdrop>
  );
};

export default DialogBox;
