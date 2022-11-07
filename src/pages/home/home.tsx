import React, { useEffect, useState } from "react";

import { FbGetAllCards } from "service/card_repository";

// import { useNavigate } from "react-router-dom";

// import { Props as PopProps } from "../popular/popular";
// const temp: PopProps = { name: "qwe" };
export interface CardType {
  id: number | undefined;
  fileName?: string;
  fileURL: string;
}
const Home = () => {
  // const navigate = useNavigate();
  // const move = () => {
  //   navigate("/my", {
  //     state: {
  //       cards: cards,
  //     },
  //   });
  // };

  //다시 해야돼
  const [allCards, setAllCards] = useState<CardType[]>([]);

  useEffect(() => {
    FbGetAllCards((dbCards: CardType[]) => {
      if (!dbCards) return null;
      const cards = Object.values(dbCards).map((data) => data);
    });
  }, []);

  return (
    <>
      <h1>Home</h1>

      {/* {allCards.map((card) => (
        <div key={card.id}>
          {card.fileName}
          <img alt="" src={card.fileURL} />
        </div>
      ))} */}
      {/* <button onClick={move}>qwe</button> */}
    </>
  );
};

export default Home;
