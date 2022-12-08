import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import { FbGetAllCards, Temp } from "service/card_repository";

import Preview from "components/preview";

import * as S from "./home.styled";

import { CardType } from "types";
import { useQuery } from "react-query";

const Home = () => {
  const home = "home";

  const navigate = useNavigate();

  const { isLoading, data } = useQuery<CardType[]>("allCards", Temp);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [loading, setLoading] = useState<boolean>(true);
  const [allCards, setAllCard] = useState<CardType[]>([]);

  const lodingCard = async () => {
    await FbGetAllCards()
      .then((card: unknown) => {
        const dbCards = Object.values(card as CardType)
          .reverse()
          .map((data) => data);
        setAllCard(dbCards);
      })
      .catch(() => setAllCard([]));

    setLoading(false);
  };

  useEffect(() => {
    lodingCard();
  }, []);

  const gotoMyPage = () => {
    navigate("/my");
  };

  return (
    <>
      <Helmet>
        <title>HOME</title>
      </Helmet>
      {/* {loading ? (
        <S.SpinnerContainer>
          <S.Spinner />
        </S.SpinnerContainer>
      ) : allCards.length === 0 ? (
        <S.CardContainer>
          <div>첫 카드를 만들어보세요</div>
          <button onClick={() => gotoMyPage()}>ㅇㅅㅇ</button>
        </S.CardContainer>
      ) : (
        <Preview
          home={home}
          cards={allCards}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setLoading={setLoading}
        />
      )}
      {isLoading ? (
        <S.SpinnerContainer>
          <S.Spinner />
        </S.SpinnerContainer>
      ) : (
        data?.map((card: any) => <div key={card.id}>{card.cardName}</div>)
      )} */}
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
        <Preview
          home={home}
          cards={data}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setLoading={setLoading}
        />
      )}
    </>
  );
};

export default Home;
