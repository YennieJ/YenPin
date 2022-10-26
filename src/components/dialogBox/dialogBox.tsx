import React from "react";
import * as S from "./dialogBox.styled";

interface ContainerProps {
  children: React.ReactNode;
  card?: any;
}
const DialogBox = (props: ContainerProps) => {
  return (
    <S.Backdrop>
      <S.DialogBox>{props.children}</S.DialogBox>
    </S.Backdrop>
  );
};

export default DialogBox;
