import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

import { useResetRecoilState } from "recoil";
import { useForm } from "react-hook-form";

import { FbGetAllCards } from "service/card_repository";

import * as S from "./searchBar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";

import { onSidebarAtom } from "style/atoms";

const SearchBar = () => {
  const closeSidebar = useResetRecoilState(onSidebarAtom);

  const navigate = useNavigate();
  const [onFocus, setOnFocus] = useState(false);

  const { register, handleSubmit, setValue, getValues } = useForm();

  const onValid = () => {
    const keyword = getValues("keyword");
    if (keyword.length > 0) {
      FbGetAllCards().then((response) => {
        const searchValue = response.filter((card) =>
          card.title.includes(keyword)
        );
        closeSidebar();
        navigate("/search", { state: { searchValue, keyword } });
      });
      setValue("keyword", "");
    }
  };

  const focusOut = () => {
    setValue("keyword", "");
    setOnFocus(false);
  };

  const temp = register("keyword", { required: true, onBlur: focusOut });

  return (
    <>
      <Helmet>
        <title>search</title>
      </Helmet>

      <S.Container onSubmit={handleSubmit(onValid)}>
        <S.SearchInput onFocus={() => setOnFocus(true)} {...temp} />

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
