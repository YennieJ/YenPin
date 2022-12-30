import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import { FbGetAllCards } from "service/card_repository";

import Preview from "components/preview";

import * as S from "./home.styled";
import { useAllCardQueryData } from "hooks/useQueryData";

const Home = () => {
  const navigate = useNavigate();

  const { isLoading, data } = useAllCardQueryData();

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
        <S.SpinnerContainer>
          <S.Spinner />
        </S.SpinnerContainer>
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
