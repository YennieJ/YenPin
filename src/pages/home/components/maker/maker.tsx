import React, { useState } from "react";
import Preview from "../preview/preview";

// 자식컴포넌트로 넘겨주기위해 export해 줍시다.
export interface CardType {
  id: number;
  fileName: string;
  fileURL: string;
}

interface Props {
  cards: CardType[];
}

function Maker({ cards }: Props) {
  return (
    <ul>
      {cards.map((card) => (
        <Preview key={card.id} card={card} />
      ))}
    </ul>
  );
}

export default Maker;
