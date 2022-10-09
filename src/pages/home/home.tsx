import Login from "components/login";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Maker from "./components/maker";
import Preview from "./components/preview";
import { CardType } from "pages/home/components/preview";
import { Link } from "react-router-dom";

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

  return (
    <>
      <h1>Home</h1>
      <Maker>
        <Preview cards={cards} />
      </Maker>
      <button onClick={move}>qwe</button>
    </>
  );
};

export default Home;
