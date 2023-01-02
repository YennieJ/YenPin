import Preview from "components/preview";
import React, { useState } from "react";
import { useLocation } from "react-router";

import * as S from "./search.styled";

const Search = () => {
  const location = useLocation();
  const searchValue = location.state.searchValue;
  const keyword = location.state.keyword;

  return (
    <>
      <S.KeywordBox>
        <span>{keyword}</span>
      </S.KeywordBox>
      {searchValue.length ? (
        <Preview cards={searchValue} />
      ) : (
        <S.Container>관련된 카드를 찾지 못했습니다</S.Container>
      )}
    </>
  );
};

export default Search;
