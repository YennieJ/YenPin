import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import { useAllCardsQueryData } from "hooks/useQueryData";

import Preview from "components/preview";

import * as S from "./home.styled";
import Loading from "components/loading";

const Home = () => {
  const { isLoading, data } = useAllCardsQueryData();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const navigate = useNavigate();
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
          <div>my 페이지로 이동</div>
          <button onClick={() => gotoMyPage()}>ㅇㅅㅇ</button>
        </S.CardContainer>
      ) : isLoading ? (
        <Loading />
      ) : (
        <Preview
          cards={data}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default Home;
