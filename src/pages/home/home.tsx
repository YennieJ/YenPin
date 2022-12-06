import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FbGetAllCards } from "service/card_repository";

import Preview from "components/preview";

import * as S from "./home.styled";

import { CardType } from "types";

const Home = () => {
  const home = "home";

  const navigate = useNavigate();

  const [allCards, setAllCard] = useState<CardType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [loading, setLoading] = useState<boolean>(true);

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
      {loading ? (
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
    </>
  );
};

export default Home;
