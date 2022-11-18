import React, { useState, useEffect } from "react";

import { FbGetAllCards } from "service/card_repository";

import Preview from "pages/my/components/preview";

export interface CardType {
  id: number | undefined;
  fileName?: string;
  fileURL: string;
}
const Home = () => {
  const main = "main";
  const [allCards, setAllCard] = useState<CardType[]>([]);
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

  return (
    <>
      <h1>Home</h1>
      <Preview
        main={main}
        cards={allCards}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Home;
