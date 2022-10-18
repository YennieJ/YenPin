import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CardType } from "pages/home/components/preview";

import * as S from "components/button/button.styled";

// import { Props as PopProps } from "../popular/popular";
// const temp: PopProps = { name: "qwe" };

const Home = () => {
  const navigate = useNavigate();

  const [cards, setCards] = useState<CardType[]>([
    {
      id: 0,
      fileName: "철수",
      fileURL: "front-end",
    },
    {
      id: 1,
      fileName: "민성",
      fileURL: "back-end",
    },
  ]);

  const move = () => {
    navigate("/my", {
      state: {
        cards: cards,
      },
    });
  };

  const onclick = () => console.log("gg");
  return (
    <>
      <h1>Home</h1>

      <button onClick={move}>qwe</button>
    </>
  );
};

export default Home;
