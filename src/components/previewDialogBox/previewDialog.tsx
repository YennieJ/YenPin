import React from "react";
import * as S from "./PreviewDialog.styled";

interface ContainerProps {
  children: React.ReactNode;
}
const PreviewDialog = (props: ContainerProps) => {
  return (
    <S.Backdrop>
      <S.DialogBox>{props.children}</S.DialogBox>
    </S.Backdrop>
  );
};

export default PreviewDialog;
