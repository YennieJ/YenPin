import React, { useRef, useState } from "react";
import { fileURLToPath } from "url";

import * as S from "./my.styled";

// import {Props as MyProps} from '../my.tsx'

export interface CardType {
  id: number;
  fileName?: any;
  fileURL?: any;
}
type CardProps = {
  cards: CardType[];
};

const My = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const secRef = useRef<HTMLInputElement>(null);

  const [cards, setCards] = useState<CardType[]>();

  const onsubmit = (e: React.FormEvent) => {
    const card = [
      {
        id: Date.now(),
        fileName: inputRef.current?.value,
        fileURL: secRef.current?.value,
      },
    ];

    e.preventDefault();
    setCards(card);
    formRef.current?.reset();
  };

  console.log(cards);

  return (
    <>
      <S.Container>
        <form ref={formRef} onSubmit={onsubmit}>
          <input ref={inputRef} type="text" />
          <input ref={secRef} type="text" />
          <button type="submit">등록</button>
        </form>
      </S.Container>
      {cards?.map((item) => console.log(item))}
    </>
  );
};

// export type {Props as MyProps};
export default My;
