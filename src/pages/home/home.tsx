import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

import { FbGetAllCards } from "service/card_repository";

import Preview from "components/preview";

import * as S from "./home.styled";

import { CardType } from "types";

const Home = () => {
  const home = "home";
  const [allCards, setAllCard] = useState<CardType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [loading, setLoding] = useState<boolean>(false);

  const lodingCard = async () => {
    await FbGetAllCards().then((card: unknown) => {
      const dbCards = Object.values(card as CardType)
        .reverse()
        .map((data) => data);
      setAllCard(dbCards);
    });
    setLoding(true);
  };

  useEffect(() => {
    lodingCard();
  }, []);

  return (
    <>
      {loading ? (
        <Preview
          home={home}
          cards={allCards}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <S.temp>
          <Spinner
            as="span"
            animation="border"
            role="status"
            aria-hidden="true"
          />
        </S.temp>
      )}
    </>
  );
};

export default Home;
