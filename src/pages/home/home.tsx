import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import { useAllCardsQueryData } from "hooks/useQueryData";

import Preview from "components/preview";

import * as S from "./home.styled";
import Loading from "components/loading";

const Home = () => {
  const navigate = useNavigate();

  const { isLoading, data } = useAllCardsQueryData();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const gotoMyPage = () => {
    navigate("/my");
  };
  return (
    <>
      <Helmet>
        <title>HOME</title>
      </Helmet>

      {data?.length === 0 ? (
        <S.CardContainer>
          <div>첫 카드를 만들어보세요</div>
          <button onClick={() => gotoMyPage()}>ㅇㅅㅇ</button>
        </S.CardContainer>
      ) : isLoading ? (
        <Loading />
      ) : (
        data && (
          <Preview
            cards={data}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )
      )}
    </>
  );
};

export default Home;
