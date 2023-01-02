import React from "react";
import { Link } from "react-router-dom";

import { useAllCardsQueryData } from "hooks/useQueryData";

import Preview from "components/preview";
import Loading from "components/loading";

import * as S from "./home.styled";
import { Helmet } from "react-helmet";

const Home = () => {
  const { isLoading, data } = useAllCardsQueryData();

  return (
    <>
      <Helmet>
        <title>HOME</title>
      </Helmet>

      {data?.length === 0 ? (
        <S.CardContainer>
          <div>카드를 만들어 보세요.</div>
          <Link to="/my/create">새로운 카드 만들기</Link>
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
