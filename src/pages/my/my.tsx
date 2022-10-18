import React, { useRef, useState } from "react";
import { fileURLToPath } from "url";

import * as S from "./my.styled";

// import {Props as MyProps} from '../my.tsx'

export interface CardType {
  id: number;
  fileName?: any;
  fileURL?: any;
}
// interface CardProps {
//   cards: CardType[];
// }

const My = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const secRef = useRef<HTMLInputElement>(null);

  const [cards, setCards] = useState<CardType[]>([]);

  const addCard = (e: React.FormEvent) => {
    const card = [
      {
        id: Date.now(),
        fileName: inputRef.current?.value,
        fileURL: secRef.current?.value,
      },
    ];

    e.preventDefault();
    setCards(cards.concat(card));
    formRef.current?.reset();
  };
  const deleteCard = (id: number) => {
    const filteredCard = cards.filter((card) => card.id !== id);
    setCards(filteredCard);
  };
  return (
    <>
      <S.Container>
        <form ref={formRef} onSubmit={addCard}>
          <input ref={inputRef} type="text" />
          <input ref={secRef} type="text" />
          <button type="submit">등록</button>
        </form>
      </S.Container>

      {cards.map((card) => {
        return (
          <div key={card.id}>
            {card.fileName}
            {card.fileURL}
            <button onClick={() => deleteCard(card.id)}>삭제</button>
          </div>
        );
      })}
    </>
  );
};

// export type {Props as MyProps};
export default My;
