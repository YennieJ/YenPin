import React from "react";
import * as S from "./my.styled";

export interface IMyProps {}
const My: React.FC<IMyProps> = () => {
  return <S.Container>마이</S.Container>;
};

export default My;
