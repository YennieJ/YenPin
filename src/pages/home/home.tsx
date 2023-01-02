import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import { useAllCardsQueryData } from "hooks/useQueryData";

import Preview from "components/preview";

import * as S from "./home.styled";
import Loading from "components/loading";

const Home = () => {
  const navigate = useNavigate();

  const { isLoading, data } = useAllCardsQueryData();

  return (
    <>
      <Helmet>
        <title>HOME</title>
      </Helmet>

      {data?.length === 0 ? (
        <S.CardContainer>
          <div>카드를 만들어 보세요.</div>
          <button onClick={() => navigate("/my/create")}>
            새로운 카드 만들기
          </button>
        </S.CardContainer>
      ) : isLoading ? (
        <Loading />
      ) : (
        <Preview cards={data} />
      )}
    </>
  );
};

export default Home;
