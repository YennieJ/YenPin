import React, { useContext, useState, useEffect } from "react";

import { AuthContext } from "service/authContext";

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

  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;

  const [myCards, setMyCards] = useState<CardType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    FbGetAllCards((dbCards: CardType[]) => {
      // let temp = []
      // Object.values(dbCards).map((data) => (
      //   temp.push(data)
      // ))
      // setMyCards(temp);
      if (!dbCards) return null;
      setMyCards(
        Object.values(dbCards)
          .reverse()
          .map((data) => data)
      );
    });
  }, []);

  return (
    <>
      <h1>Home</h1>

      {/* <button onClick={move}>qwe</button> */}
    </>
  );
};

export default Home;
