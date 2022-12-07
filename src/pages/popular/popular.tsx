import React from "react";
import { Helmet } from "react-helmet";
import * as S from "./popular.styled";

export interface Props {}

const Popular = ({}: Props) => {
  return (
    <S.Container>
      <Helmet>
        <title>Popular</title>
      </Helmet>
      파풀러
    </S.Container>
  );
};

export default Popular;
