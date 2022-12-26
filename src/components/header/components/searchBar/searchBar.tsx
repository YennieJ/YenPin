import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FbGetAllCards } from "service/card_repository";

import { Helmet } from "react-helmet";
import * as S from "./searchBar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const navigate = useNavigate();
  const [onFocus, setOnFocus] = useState(false);

  const { register, handleSubmit, setValue } = useForm();

  const onValid = (data: any) => {
    const keyword = data.keyword;
    if (keyword.length > 0) {
      FbGetAllCards().then((response) => {
        const searchValue = response.filter((card) =>
          card.cardName.includes(keyword)
        );
        navigate("/search", { state: { searchValue, keyword } });
      });
      setValue("keyword", "");
    }
  };

  const focusOut = () => {
    setValue("keyword", "");
    setOnFocus(false);
  };

  return (
    <>
      <Helmet>
        <title>search</title>
      </Helmet>
      <S.Container onSubmit={handleSubmit(onValid)}>
        {!onFocus && (
          <S.SearchIcon
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </S.SearchIcon>
        )}
        <S.SearchInput
          whileFocus={{ paddingLeft: "10px" }}
          type="text"
          placeholder="검색"
          {...register("keyword", { required: true })}
          onFocus={() => setOnFocus(true)}
          onBlur={focusOut}
        />
        {onFocus && (
          <S.DeleteButton
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            type="button"
          >
            <FontAwesomeIcon icon={faX} />
          </S.DeleteButton>
        )}
      </S.Container>
    </>
  );
};

export default SearchBar;
