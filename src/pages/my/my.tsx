import React, { useRef, useState, useContext } from "react";

import { AuthContext } from "service/authContext";

import CardRepository from "service/card_repository";
import * as S from "./my.styled";

// import {Props as MyProps} from '../my.tsx'
export interface CardType {
  id: number;
  fileName?: string;
  fileURL?: string;
}
// 부모에서 상속받을떼???????????쓰는거래
// interface CardProps {
//   cards: CardType[];
// }

const cardRepository = new CardRepository();
//여기서 가져오는것이 맞는것인가 아니면 최상단에서 가져와서 프롭스로 가져와야하는가

const My = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const userInfo = useContext(AuthContext);
  const userUid = userInfo?.uid;

  const [cards, setCards] = useState<CardType[]>([]);

  // const [file, setFile] = useState<string>()
  // const imgUploader = new ImageUploader();
  // const filehandler = async (event: any) => {
  //   const uploaded = await imgUploader.upload(event.target.files[0]);
  //   console.log(uploaded);
  //   setFile(uploaded.url);
  // };

  const addCard = (e: React.FormEvent) => {
    const card = {
      id: Date.now(),
      fileName: inputRef.current?.value,
      // fileURL: file,
    };
    e.preventDefault();
    setCards([...cards, card]);
    formRef.current?.reset();
    cardRepository.saveCard(userUid, card);
  };

  const deleteCard = (id: number) => {
    const filteredCard = cards.filter((card) => card.id !== id);
    setCards(filteredCard);
    cardRepository.deleteCard(userUid, { id });
  };

  return (
    <>
      <S.Container>
        <form ref={formRef} onSubmit={addCard}>
          <input ref={inputRef} type="text" />
          {/* <input type="file" accept="image/*" onChange={filehandler} /> */}
          <button type="submit">등록</button>
        </form>
      </S.Container>

      {cards.map((card) => {
        return (
          <div key={card.id}>
            {card.fileName}
            <img src={card.fileURL}></img>
            <button onClick={() => deleteCard(card.id)}>삭제</button>
          </div>
        );
      })}
    </>
  );
};

// export type {Props as MyProps};
export default My;
