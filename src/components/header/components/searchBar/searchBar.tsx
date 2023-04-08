import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { useResetRecoilState } from "recoil";
import { onSidebarAtom } from "style/atoms";

import { FbGetAllCards } from "service/card_repository";

import * as S from "./searchBar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const closeSidebar = useResetRecoilState(onSidebarAtom);
  const navigate = useNavigate();

  const [onFocus, setOnFocus] = useState(false);

  const focusOut = () => {
    setValue("keyword", "");
    setOnFocus(false);
  };

  const { register, handleSubmit, setValue, getValues } = useForm();

  const keywordRegister = register("keyword", {
    required: true,
    onBlur: focusOut,
  });

  const onValid = async () => {
    const keyword = getValues("keyword");
    if (keyword.length > 0) {
      const response = await FbGetAllCards();
      const searchValue = response.filter((card) =>
        card.cardName.includes(keyword)
      );
      closeSidebar();
      navigate("/search", { state: { searchValue, keyword } });
      setValue("keyword", "");
    }
  };

  return (
    <>
      <Helmet>
        <title>search</title>
      </Helmet>

      <S.Container onSubmit={handleSubmit(onValid)}>
        <S.SearchInput {...keywordRegister} onFocus={() => setOnFocus(true)} />

        {!onFocus && (
          <S.SearchIcon>
            <FontAwesomeIcon icon={faSearch} />
          </S.SearchIcon>
        )}
        {onFocus && (
          <S.DeleteButton>
            <FontAwesomeIcon icon={faX} />
          </S.DeleteButton>
        )}
      </S.Container>
    </>
  );
};

export default SearchBar;
