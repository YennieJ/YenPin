import React from "react";

import * as S from "./loading.styled";

// pages > home,my,popular

const Loading = () => {
  return (
    <S.SpinnerContainer>
      <S.Spinner />
    </S.SpinnerContainer>
  );
};

export default Loading;
