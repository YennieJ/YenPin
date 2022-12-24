import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { FbGetAllCards } from "service/card_repository";

const SearchBar = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, setValue } = useForm();

  const onValid = (data: any) => {
    const value = data.search;
    if (value.length > 0) {
      FbGetAllCards().then((response) => {
        const seachValue = response.filter((card) =>
          card.cardName.includes(value)
        );
        navigate("/search", { state: seachValue });
      });
      setValue("search", "");
    }
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input type="text" {...register("search")} />
      <button>검색</button>
    </form>
  );
};

export default SearchBar;
