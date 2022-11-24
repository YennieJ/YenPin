import React, { useState, useEffect } from "react";

import { FbGetAllCards } from "service/card_repository";

import Preview from "components/preview";

import { CardType } from "types";

const Home = () => {
  const home = "home";
  const [allCards, setAllCard] = useState<CardType[] | null>();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    FbGetAllCards((dbCards: CardType[]) => {
      if (!dbCards) return setAllCard([]);
      setAllCard(
        Object.values(dbCards)
          .reverse()
          .map((data) => data)
      );
    });
  }, []);

  // useEffect(() => {
  //   FbGetAllCards().then((resolve: any) => {
  //     // const dbCards = Object.values(resolve).reverse().map((data)=>data)
  //     return setAllCard(Object.values(resolve).map((data) => data));
  //   });
  // }, []);

  return (
    <>
      {allCards ? (
        <Preview
          home={home}
          cards={allCards}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <h1>LODING</h1>
      )}
    </>
  );
};

export default Home;
