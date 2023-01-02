import React from "react";
import * as S from "./dialogBox.styled";

interface ContainerProps {
  children: React.ReactNode;
}
const DialogBox = ({ children }: ContainerProps) => {
  return (
    <S.Backdrop>
      <S.DialogBox>{children}</S.DialogBox>
    </S.Backdrop>
  );
};

export default DialogBox;
