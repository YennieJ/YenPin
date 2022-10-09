import React from "react";
import { useLocation } from "react-router-dom";
import { CardType } from "pages/home/components/maker";
import * as S from "./my.styled";
import Preview from "pages/home/components/preview/preview";

// import {Props as MyProps} from '../my.tsx'

const My = () => {
  const location = useLocation();
  const { cards } = location.state;
  console.log(cards);
  return (
    <ul>
      {cards.map((card: CardType) => (
        <Preview key={card.id} card={card} />
      ))}
    </ul>
  );
};

// export type {Props as MyProps};
export default My;
